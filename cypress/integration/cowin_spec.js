const axios = require('axios');
const config = require('../../config');

describe('Cowin slots', () => {
    const runTestForPincode = (pincode, page = 0) => {
        it(`${pincode} check page=${page}`, () => {
            cy.visit('https://www.cowin.gov.in/home');
            cy.get('.pintextbox')
                .type(pincode);
            cy.contains('Search').click();
            while(page--) {
                cy.get('.carousel-control-next').click();
            }
            cy.contains(`Age ${config.age}+`).click();
            cy.get('.slots-box:not(.no-seat):not(.no-available)', {timeout: 1000}).then(() => axios.get(`http://localhost:8000/${pincode}`));
            expect(true).to.equal(true);
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

            cy.contains('Search').click();
            while(page--) {
                cy.get('.carousel-control-next').click();
            }
            cy.contains(`Age ${config.age}+`).click();
            cy.get('.slots-box:not(.no-seat):not(.no-available)', {timeout: 1000}).then(() => axios.get(`http://localhost:8000/${district}`));
            expect(true).to.equal(true);
        });
    };

    config.pincodes.forEach(pincode => {
        for(let i=0; i<3; i++) {
            runTestForPincode(pincode, i);
        }
    });

    config.districts.forEach(district => {
        for(let i=0; i<3; i++) {
            runTestForDistrict(district, i);
        }
    });
  })