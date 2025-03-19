import 'cypress-file-upload';
import 'cypress-iframe';



describe('Registro de nuevo Jefe ORH con datos externos', () => {
    const datosPersonas = require('../fixtures/datos_personas_actualizado.json');

    it('Registro solicitud Jefe ORH con ID específico', () => {
        const idSeleccionado = 1;
        const data = datosPersonas.find(item => item.id === idSeleccionado);

        if (!data) {
            cy.log(`No se encontró ningún conjunto de datos con el ID: ${idSeleccionado}`);
            return;
        }


        cy.visit('https://qasgme.servir.gob.pe/#/auth/login');

        //Login
        cy.get('.registroEntidad').click();

        //Datos Entidad

        cy.get(':nth-child(3) > .input-full-width').clear().type('20376082114');
        cy.get(':nth-child(4) > .appearance-outline').click();
        cy.get('.px-2').click();
        cy.get(':nth-child(3) > .mr-3').click();

        //Datos Jefe ORH
        cy.get(':nth-child(1) > .nb-form-field-size-medium > .nb-form-control-container > .appearance-outline > .select-button').click();
        cy.get('#nb-option-287').click();


        cy.get(':nth-child(2) > .input-full-width').clear().type(data.DNI);
        cy.get(':nth-child(3) > .input-full-width').clear().type(data.apPaterno);
        cy.get(':nth-child(4) > .input-full-width').clear().type(data.apMaterno);
        cy.get(':nth-child(5) > .input-full-width').clear().type(data.nombres);
        cy.get(':nth-child(6) > .nb-form-field-size-medium > .nb-form-control-container > .appearance-outline > .select-button').click();
        cy.get('#nb-option-9').click();
        cy.get(':nth-child(7) > .input-full-width').clear().type('Jefe ORH'); // Considera usar data.cargo si es variable
        cy.get(':nth-child(8) > .input-full-width').clear().type(data.correo); // Considera usar data.correo si es variable
        cy.get(':nth-child(9) > .input-full-width').clear().type('12345678');
        cy.get(':nth-child(10) > .input-full-width').clear().type('12345678');
        cy.get(':nth-child(11) > .input-full-width').clear().type('123456789');

        //Carga de Arvhivvo
        cy.get('input[type="file"]') // Selecciona el input file
        .attachFile('documentodeprueba.pdf'); // Asegúrate de tener un archivo de prueba en cypress/fixtures


        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(11) > .input-full-width').clear();
        cy.get(':nth-child(11) > .input-full-width').type('123456789');
        cy.get('.status-info').click();
        cy.get(':nth-child(3) > .mr-3').click();
        /* ==== End Cypress Studio ==== */
    });
});