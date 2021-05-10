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
    cy.get(':nth-child(4) > .col-10').type("10")
    cy.contains('Zobacz ceny').click()

})


Given('użytkownik znajduje się na podstronie "Nadaj przesyłkę"', () => {
    cy.url().should('include', '/calculator')
})
Then('nazwa podstrony w stopce jest widoczna', () => {
    cy.get('.breadcrumb > .active').contains('Nadaj przesyłkę')
})


Then('widzi nazwę dostawcy: Paczkomat InPost', () => {
    cy.get('[ng-show="calculator.carriersOffers.length>0"] > :nth-child(1) > :nth-child(1) > .card > .card-header')
        .contains("Paczkomat InPost")
})
And('widzi informację o wymogu drukowania', () => {
    cy.get('[ng-repeat]:nth-of-type(1) .ng-scope:nth-of-type(1) .d-md-inline').contains("nie wymaga drukowania")
})
And('widzi informację o sposobie płatności', () => {
    cy.get('[ng-repeat]:nth-of-type(1) .ng-scope:nth-of-type(2) .d-md-inline').contains("płatność online")
})
And('widzi przewidywany czas dostawy', () => {
    cy.get('[ng-repeat]:nth-of-type(1) [class=\'d-flex flex-row mt-2\'] [class] .ng-binding').contains("4-8 dni roboczych")
})
And('widzi cenę przesyłki', () => {
    cy.get('[ng-repeat]:nth-of-type(1) [ng-show=\'calculator\.parcelWeight\']').contains("54,00 zł")
})
And('widzi przycisk: "Nadaj paczkę"', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .card > .card-body > .row > .mt-4 > .btn').contains("Nadaj paczkę")
})


And('klika przycisk: "Nadaj paczkę"', () => {
    cy.get(':nth-child(1) > :nth-child(1) > .card > .card-body > .row > .mt-4 > .btn').click()
})
Then('widzi nagłówek: Wybierz rodzaj nadawcy i typ paczki', () => {
    cy.contains('Wybierz rodzaj nadawcy i typ paczki')
})
And('widzi nagłówek: Wymagania dotyczące paczki', () => {
    cy.contains('Wymagania dotyczące paczki')
})
And('widzi nagłówek: Wybierz sposób dostawy w Ukrainie', () => {
    cy.contains('Wybierz sposób dostawy w Ukrainie')
})
And('widzi nagłówek: Wypełnij dane nadawcy i odbiorcy', () => {
    cy.contains('Wypełnij dane nadawcy i odbiorcy')
})
And('widzi nagłówek: Deklaracja celna', () => {
    cy.contains('Deklaracja celna')
})