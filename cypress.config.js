const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qasentidad.servir.gob.pe/#/auth/login', // Reemplaza con la URL base de tu aplicación
    video: true, // Habilita la grabación de videos (útil para depuración)
    screenshotOnRunFailure: true, // Captura screenshots en fallos (esencial para análisis)
    defaultCommandTimeout: 10000, // Aumenta el timeout para comandos (más estable)
    pageLoadTimeout: 120000, // Aumenta el timeout para carga de páginas (para aplicaciones lentas)
    viewportWidth: 1280, // Ancho de la ventana del navegador (ajusta según tus necesidades)
    viewportHeight: 720, // Altura de la ventana del navegador (ajusta según tus necesidades)
    experimentalStudio: true, // Habilita Cypress Studio (si no está habilitado por defecto)
    retries: { // Configura reintentos para pruebas intermitentes
      runMode: 2,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // Implementa listeners de eventos de Node aquí
      // Por ejemplo, para tareas personalizadas o plugins
    },
  },
  // Configuración adicional para Cypress Studio (si es necesario)
  // studio: {
  //   // Opciones específicas para Cypress Studio
  // },
});