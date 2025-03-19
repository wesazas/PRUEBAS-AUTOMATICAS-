import '../support/commands';

describe('Inicio de sesión como Administrador', () => {
  it('Debe iniciar sesión con un usuario administrador', () => {
    cy.login('73237976', 'Lima2021$'); // Usuario y contraseña del admin
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .itemPadre').click();
    cy.get(':nth-child(3) > .submenu > .item > .text-menu-hijo').click();
    cy.get('.px-5').click();
    cy.get('.select-button').click();
    cy.get('#nb-option-85').click();
    cy.get('.formCreation > .w-100').click();
    /* ==== End Cypress Studio ==== */
  });
});


