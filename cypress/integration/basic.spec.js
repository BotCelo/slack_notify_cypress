/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.pause()
        //const title = cy.title()
        //console.log(title)
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo').debug()
        cy.title()
        .should('contain', 'Campo' )
        .and('be.equal', 'Campo de Treinamento' )
        //TODO imprimir o logo no console
        //escrever o title em um campo de texto
    })
    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')

    })
})