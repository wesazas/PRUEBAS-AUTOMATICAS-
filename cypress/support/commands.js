Cypress.Commands.add('login', (usuario, password) => {
    cy.visit('https://qasentidad.servir.gob.pe'); // URL de login
  
    cy.get('input[formControlName="documentNumber"]').clear().type(usuario);
    cy.get('input[formControlName="password"]').clear().type(password);
  
    // Si hay un captcha, puedes modificar esto según cómo lo manejes
    cy.get('input[formControlName="inputCaptcha"]').clear().type('ABCDE');
  
    // Hacer clic en el botón de "Iniciar Sesión"
    cy.contains('button', 'Iniciar Sesión').click();
   
 
  });
  