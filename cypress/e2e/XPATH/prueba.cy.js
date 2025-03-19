require('cypress-xpath');

it('Debe hacer clic en el botón Olvidé mi contraseña usando XPath', () => {
    cy.visit('https://qasentidad.servir.gob.pe/#/auth/login');

    // Usando cy.xpath para seleccionar el botón por su atributo name
    cy.xpath('//button[@name="Olvidé mi contraseña"]').click();
});