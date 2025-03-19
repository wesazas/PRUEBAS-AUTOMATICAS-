import 'cypress-file-upload';
import 'cypress-iframe';
require('cypress-xpath');



describe('Registro de nuevo Jefe ORH con datos externos', () => {
    const datosPersonas = require('../fixtures/datos_personas_actualizado.json');
    const datosEntidades = require('../fixtures/datos_entidad_con_id.json');

    it('Registro solicitud Jefe ORH con ID específico', () => {
        const idpersona = 1;
        const dataPersona = datosPersonas.find(item => item.id === idpersona);

        const identidad = 2700; // Ajustado según tu JSON de ejemplo
        const dataEntidad = datosEntidades.find(item => item.id === identidad);

        const identidad0 = 0; // Ajustado según tu JSON de ejemplo
        const dataEntidad0 = datosEntidades.find(item => item.id === identidad0);




        if (!dataPersona) {
            cy.log(`No se encontró ningún conjunto de datos con el ID: ${idpersona}`);
            return;
        }

        if (!dataEntidad) {
            cy.log(`No se encontró ningún conjunto de datos con el ID: ${identidad}`);
            return;
        }

        // ✅ URL configurable desde cypress.config.js
        cy.visit(Cypress.env('baseUrl') || 'https://qasgme.servir.gob.pe/#/auth/login');

        // Login
        cy.get('.registroEntidad').click();

        // RUC
        cy.xpath('//input[@formcontrolname="rucEntidadSearch"]')
          .type(String(dataEntidad.RUC)); // Convertir a string si es necesario
        cy.xpath('//button[contains(text(), "Buscar")]').eq(0).click();

        // Nombre abreviado (Usar siglas si existen, de lo contrario, nombre de la entidad)
        cy.xpath('//input[@formcontrolname="abreviaturaEntidad"]')
          .type(dataEntidad["SIGLAS DE LA ENTIDAD"] || dataEntidad["NOMBRE DE LA ENTIDAD"].substring(0, 8));

        // Poder
        cy.xpath('//nb-select[@formcontrolname="poderId"]').click();
        cy.xpath(`//nb-option[contains(text(), "${dataEntidad0.PODER}")]`).click();


        // Nivel de gobierno
        cy.xpath('//nb-select[@formcontrolname="nivelGobiernoId"]').click();
        cy.xpath(`//nb-option[contains(text(), "${dataEntidad0["NIVEL DE GOBIERNO"]}")]`).click();

        // Tipo de entidad
        cy.xpath('//nb-select[@formcontrolname="tipoEntidadId"]').click();
        cy.xpath(`//nb-option[contains(text(), "${dataEntidad0["TIPO DE ENTIDAD"]}")]`).click();

        // Sector
        cy.xpath('//nb-select[@formcontrolname="sectorId"]').click();
        cy.xpath(`//nb-option[contains(text(), "${dataEntidad0.SECTOR}")]`).click();

        // Pliego
        cy.xpath('//nb-select[@formcontrolname="pliegoId"]').click();
        cy.xpath(`//nb-option[contains(text(), "${dataEntidad0.PLIEGO}")]`).click();

        // Naturaleza
        cy.xpath('//nb-select[@formcontrolname="naturalezaId"]').click();
        cy.xpath(`//nb-option[contains(text(), "${dataEntidad0.NATURALEZA}")]`).click();

        // Tipo Municipalidad
        cy.xpath('//nb-select[@formcontrolname="tipoNaturalezaId"]').click();
        cy.xpath(`//nb-option[contains(text(), "${dataEntidad0["TIPO DE MUNICIPALIDAD"]}")]`).click();

        // Siguiente
        cy.xpath('//button[contains(text(), "Siguiente")]').click();





        cy.get(':nth-child(3) > .mr-3').click();

        //Datos Jefe ORH
        cy.get(':nth-child(1) > .nb-form-field-size-medium > .nb-form-control-container > .appearance-outline > .select-button').click();
        cy.get('#nb-option-287').click();


        cy.get(':nth-child(2) > .input-full-width').clear().type(dataPersona.DNI);
        cy.get(':nth-child(3) > .input-full-width').clear().type(dataPersona.apPaterno);
        cy.get(':nth-child(4) > .input-full-width').clear().type(dataPersona.apMaterno);
        cy.get(':nth-child(5) > .input-full-width').clear().type(dataPersona.nombres);
        cy.get(':nth-child(6) > .nb-form-field-size-medium > .nb-form-control-container > .appearance-outline > .select-button').click();
        cy.get('#nb-option-9').click();
        cy.get(':nth-child(7) > .input-full-width').clear().type('Jefe ORH'); // Considera usar data.cargo si es variable
        cy.get(':nth-child(8) > .input-full-width').clear().type(dataPersona.correo); // Considera usar data.correo si es variable
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
        // cy.get(':nth-child(3) > .mr-3').click();
        /* ==== End Cypress Studio ==== */

    });
});
