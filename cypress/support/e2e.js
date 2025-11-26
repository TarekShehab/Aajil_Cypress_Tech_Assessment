// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Handling application errors
Cypress.on('uncaught:exception', (err, runnable) => {

  // Log the error for visibility (optional)
  console.log('Uncaught Application Error:', err.message);

  // Ignoring these application errors

//   if (err.message.includes('Mixed Content')) {
//     return false;
//   }
  if (err.message.includes('a is not a function')) {
    return false;
  }
  if (err.message.includes('jQuery is not defined')) {
    return false;
  }
});
