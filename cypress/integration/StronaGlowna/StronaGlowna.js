import {
    Before,
    After,
    Given,
    When,
    And,
    Then
} from 'cypress-cucumber-preprocessor/steps'

beforeEach(() => {
    cy.visit('/')
    cy.get('.eupopup-closebutton').click()
    // cy.get(':nth-child(4) > .col-10').type("10")
    // cy.get('[data-cy=changePassword-link]').click()
})


Given('użytkownik znajduje się na stronie głównej Meest', () => {
    cy.url().should('include', '/')
})
Then('tekst powitalny jest widoczny', () => {
    cy.contains('Meest')
})


Then('widzi tytuł formatki: Sprawdź cenę', () => {
    cy.contains('Sprawdź cenę')
})
And('widzi pole: \"Z:\"', () => {
    cy.contains('Z:')
})
And('widzi napis \"Polska\" jako zawartość pola \"Z:\"', () => {
    cy.contains('Polska')
})
And('widzi pole: \"Do:\"', () => {
    cy.contains('Do:')
})
And('widzi napis \"Ukraina\" jako zawartość pola \"Do:\"', () => {
    cy.contains('Ukraina')
})
And('widzi pole typu input: \"waga\"', () => {
    cy.get(':nth-child(4) > .col-10').should('be.visible')
})
And('widzi oznaczenie jednostki wagowej: \"kg\"', () => {
    cy.contains('kg')
})
And('widzi przycisk: \"Sprawdź cenę\"', () => {
    cy.contains('Zobacz ceny')
})


When('używa przycisku: "Zobacz ceny"', () => {
    cy.contains('Zobacz ceny').click()
})
Then('pozostaje na stronie głównej aplikacji', () => {
    cy.url().should('include', '/')
})


When('wprowadza wartość 10kg w pole: waga', () => {
    cy.get(':nth-child(4) > .col-10').type("10")
})
Then('zostaje przekirowany na stronę nadania przesyłki', () => {
    cy.url().should('include', '/calculator')
})











