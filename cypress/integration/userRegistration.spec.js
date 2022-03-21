/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();

describe('RegisterUser', () => {   

    it('When I inform the data and finish, then the registration must be done', () => {
        cy.visit('http://automationpractice.com')
        cy.get('.login').click()
        cy.url().should('contain', 'my-account')

        cy.get('#email_create').type(chance.email())
        cy.get('#SubmitCreate > span').click()

        cy.url().should('contain', 'authentication&back')

        cy.get('#id_gender2').check()
        cy.get('#customer_firstname').type(chance.first())
        cy.get('#customer_lastname').type(chance.last())
        cy.get('#passwd').type(chance.string())
        cy.get('#days').select(chance.integer({ min: 1, max: 30 }))
        cy.get('#months').select(chance.month())
        cy.get('#years').select(chance.year({ min: 1900, max: 2022 }))
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('#company').type(chance.company())
        cy.get('#address1').type(chance.address())
        cy.get('#city').type(chance.city())
        cy.get('#id_state').select(chance.state({ full: true }))
        cy.get('#postcode').type(chance.zip())
        cy.get('#phone').type(chance.phone())
        cy.get('#phone_mobile').type(chance.phone())
        cy.get('#alias').type(chance.string())

        cy.get('#submitAccount > span').click()

        cy.url().should('contain', 'my-account')
    });


});