const axios = require('axios');
const config = require('../../config');

const maxPages = config.maxPages || 2;

describe('Cowin slots', () => {
    const search = (page, loc) => {
        cy.contains('Search').click();
        while(page--) {
            cy.get('.carousel-control-next').click();
        }
        cy.contains(`Age ${config.age}+`).click();
        cy.get('.slots-box:not(.no-seat):not(.no-available)', {timeout: 1000}).debug().then((els) => {
            debugger;
            let names = [loc];
            for(let i=0; i<els.length; i++) {
                names.push(els[i].closest('.col-sm-12.col-md-12.col-lg-12').querySelector('.center-name-title').textContent);
            }
            names = names.join(' , ');
            axios.get(`http://localhost:8000/${names}`);
        });
        expect(true).to.equal(true);
    };

    const runTestForPincode = (pincode, page = 0) => {
        it(`${pincode} check page=${page}`, () => {
            cy.visit('https://www.cowin.gov.in/home');
            cy.get('.pintextbox')
                .type(pincode);
            search(page, pincode);
        });
    };

    const runTestForDistrict = ([state, district], page = 0) => {
        it(`${state}-${district} check page=${page}`, () => {
            cy.visit('https://www.cowin.gov.in/home');
            cy.get('.status-switch').click();

            cy.get('mat-select[formcontrolname="state_id"]').click();
            cy.get('mat-option').contains(state).click();

            cy.get('mat-select[formcontrolname="district_id"]').click();
            cy.get('mat-option').contains(district).click();

            search(page, district);
        });
    };

    config.pincodes.forEach(pincode => {
        for(let i=0; i<maxPages; i++) {
            runTestForPincode(pincode, i);
        }
    });

    config.districts.forEach(district => {
        for(let i=0; i<maxPages; i++) {
            runTestForDistrict(district, i);
        }
    });
  })