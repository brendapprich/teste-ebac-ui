/// <reference types="cypress" />

context('Funcionalidade Login',() =>{

    it ('Deve fazer login com sucesso'), () => {
         cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    }
    it ('deve exibir uma mensagem de erro ao inserir senha ou usuario invalidos') , () =>{

    }
})