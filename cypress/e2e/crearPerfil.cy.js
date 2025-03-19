
require('cypress-xpath');


describe('template spec', () => {

  

  it('CREAR PERIL ASISTENTE', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://qasentidad.servir.gob.pe/#/pages/entidad');
    cy.get('#mail').clear('73237976');
    cy.get('#mail').type('73237976');
    cy.get(':nth-child(2) > .w-100 > .nb-form-control-container').click();
    cy.get('#pass').clear('L');
    cy.get('#pass').type('Lima2021${enter}');
    cy.get(':nth-child(3) > .itemPadre').click();
    cy.get(':nth-child(3) > .submenu > .item > .text-menu-hijo').click();

    cy.xpath('//button[normalize-space()="Crear perfil"]').click();

    cy.get('nb-option[name="---Seleccione---"]').click();

    cy.get('#nb-option-85').click();


    cy.get('.formCreation > .w-100').click();
    cy.get('#mat-input-0').clear('P');
    cy.get('#mat-input-0').type('Perfil Analista');
    cy.get('textarea[placeholder="Redacta de forma breve la misión del puesto"]').type('texto prueba');
    cy.get('serv-talento-identificacion > .px-5 > :nth-child(2)').click();
    cy.get(':nth-child(2) > .nb-form-field-size-medium > .nb-form-control-container > .ng-untouched').click();
    cy.get('serv-talento-identificacion > .px-5 > .row > :nth-child(1)').click();
    cy.get(':nth-child(1) > autocomplete > .nb-form-field-size-large > .nb-form-control-container > .mat-autocomplete-trigger').clear(' ');
    cy.get(':nth-child(1) > autocomplete > .nb-form-field-size-large > .nb-form-control-container > .mat-autocomplete-trigger').type(' ');
    cy.get('#mat-option-13 > .mat-option-text').click();
    cy.get(':nth-child(2) > autocomplete > .nb-form-field-size-large > .nb-form-control-container > .mat-autocomplete-trigger').clear(' ');
    cy.get(':nth-child(2) > autocomplete > .nb-form-field-size-large > .nb-form-control-container > .mat-autocomplete-trigger').type(' ');
    cy.get('#mat-option-32 > .mat-option-text').click();
    cy.get(':nth-child(4) > select-field > .nb-form-field-size-large > .nb-form-control-container > .select-component-empty > .select-button').click();
    cy.get("#nb-option-2990").click();
    cy.get('#nb-option-212').click();
    cy.get(':nth-child(5) > select-field > .nb-form-field-size-large > .nb-form-control-container > .select-component-empty > .select-button').click();
    cy.get('#nb-option-218').click();
    cy.get(':nth-child(6) > select-field > .nb-form-field-size-large > .nb-form-control-container > .select-component-empty > .select-button').click();
    cy.get('#nb-option-3010').click();
    cy.get(':nth-child(7) > select-field > .nb-form-field-size-large > .nb-form-control-container > .select-component-empty > .select-button').click();
    cy.get('#nb-option-3017').click();
    cy.get(':nth-child(8) > select-field > .nb-form-field-size-large > .nb-form-control-container > .select-component-empty > .select-button').click();
    cy.get('#nb-option-3011').click();
    cy.get(':nth-child(9) > select-field > .nb-form-field-size-large > .nb-form-control-container > .select-component-empty > .select-button').click();
    cy.get('#nb-option-220').click();
    cy.get(':nth-child(10) > select-field > .nb-form-field-size-large > .nb-form-control-container > .select-component-empty > .select-button').click();
    cy.get('#nb-option-3018').click();
    cy.get('.row > :nth-child(11) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').clear('J');
    cy.get('.row > :nth-child(11) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').type('Jefe ORH');
    cy.get('.select-component-empty > .select-button').click();
    cy.get('#nb-option-224').click();

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(14) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').clear('1');
    cy.get(':nth-child(14) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').type('1');
    cy.get('.flex-v-center > .ng-untouched').clear('01');
    cy.get('.flex-v-center > .ng-untouched').type('01');
    cy.get(':nth-child(16) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').clear('1');
    cy.get(':nth-child(16) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').type('1');
    cy.get(':nth-child(17) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').clear('01');
    cy.get(':nth-child(17) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').type('01');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.row > :nth-child(18)').click();
    cy.get('.divbottom > .px-5').click();
    cy.get('.px-5 > :nth-child(1) > serv-talento-strings-array-field > .d-flex > serv-talento-btn-add > .btnAddFunction > .material-icons').click();
    cy.get('.iconAdd > .mat-button-wrapper > .material-icons').click();
    cy.get('.iconAdd > .mat-button-wrapper > .material-icons').click();
    cy.get('.iconAdd > .mat-button-wrapper > .material-icons').click();
    cy.get('.iconAdd > .mat-button-wrapper > .material-icons').click();
    cy.get('#cdk-drop-list-1 > :nth-child(1) > .w-100').clear('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.');
    cy.get('#cdk-drop-list-1 > :nth-child(1) > .w-100').type('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.1');
    cy.get('#cdk-drop-list-1 > :nth-child(2) > .w-100').clear('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.');
    cy.get('#cdk-drop-list-1 > :nth-child(2) > .w-100').type('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.2');
    cy.get('#cdk-drop-list-1 > :nth-child(3) > .w-100').clear('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.');
    cy.get('#cdk-drop-list-1 > :nth-child(3) > .w-100').type('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.3');
    cy.get('#cdk-drop-list-1 > :nth-child(4) > .w-100').clear('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.');
    cy.get('#cdk-drop-list-1 > :nth-child(4) > .w-100').type('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.4');
    cy.get('#cdk-drop-list-1 > :nth-child(5) > .w-100').clear('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.');
    cy.get('#cdk-drop-list-1 > :nth-child(5) > .w-100').type('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.5');
    cy.get('serv-talento-funciones > .px-5').click();
    
    cy.get('.px-5 > :nth-child(2) > textarea-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').click();
    cy.get('.px-5 > :nth-child(2) > textarea-field > .d-flex > .flex-spacer').click();

    cy.get('.contenedor-condicion-atipica textarea[placeholder="Ingrese texto"]').type('Condiciones de desempeño');
    cy.get('serv-talento-funciones > .px-5 > :nth-child(2)').click();
    cy.get(':nth-child(4) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').clear('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.');
    cy.get(':nth-child(4) > input-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').type('Lorem ipsum dolor sit amet consectetur, adipiscing elit tristique magnis.');
    cy.get(':nth-child(3) > h6').click();
    cy.get(':nth-child(3) > :nth-child(2) > textarea-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').click();
    cy.get(':nth-child(3) > :nth-child(2) > textarea-field > .d-flex > .flex-spacer').click();
    cy.get(':nth-child(2) > .mat-list-item-content > .mat-list-text').click();
    cy.get('.mat-selection-list').click();
    cy.get(':nth-child(4) > textarea-field > .nb-form-field-size-large > .nb-form-control-container > .input-full-width').click();
    cy.get('.px-5 > :nth-child(3) > :nth-child(4)').click();
    cy.get('.divbottom > .px-5').click();
    /* ==== End Cypress Studio ==== */
  });



})