const axios = require('axios');
const config = require('../../config');

describe('Cowin slots', () => {
    const runTest = (pincode, page = 0) => {
        it(`${pincode} check page=${page}`, () => {
            cy.visit('https://www.cowin.gov.in/home');
            cy.get('.pintextbox')
                .type(pincode);
            cy.contains('Search').click();
            while(page--) {
                cy.get('.carousel-control-next').click();
            }
            cy.contains(`Age ${config.age}+`).click();
            cy.get('.slots-box:not(.no-seat):not(.no-available)').then(() => axios.get(`http://localhost:8000/${pincode}`));
            expect(true).to.equal(true);
        });
    }

    config.pincodes.forEach(pincode => {
        for(let i=0; i<3; i++) {
            runTest(pincode, i);
        }
    });
  })