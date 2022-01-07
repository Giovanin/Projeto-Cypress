describe('Facebook',    () => {
    it('acesso_login',  () => {
        cy.visit('https://www.instagram.com/?hl=pt-br');
         
        // cy.get('#txtLogin').type("03310574");
        // cy.get('#txtSenha').type("@2021Gio");
        // cy.get('#btnEntrar').click();
      

        
        // cy.get('.tn-elem__3021874551591543397295 > .tn-atom').click();

        // cy.get('.t-input-group_nm > .t-input-block > .t-input').type("Giovani Garcia Leite");

        // cy.get('.t-input-phonemask__wrap > .t-input').type("12996313274");

        // cy.get('.t-input-group_em > .t-input-block > .t-input').type("giovanileite562@gmail.com");

        // cy.get('.t-submit').click();





        // cy.get('#login_email').type('giovanileite562@gmail.com');

        // cy.get('#login_senha').type("@2021$#Gio$van");

        // cy.get(':nth-child(1) > :nth-child(1) > .js-form > ._text-right > .ui-button').click();



        cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type("giovanileite562@gmail.com")

        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type('@2021$#Gio')

        cy.get('.sqdOP > .qF0y9').click();

        // cy.get('[data-testid=royal_email]').type("giovani.leite.37");

        // cy.get('[data-testid=royal_pass]').type("Gio*2019");

        // cy.get('[data-testid=royal_login_button]').click();

    });
});


   