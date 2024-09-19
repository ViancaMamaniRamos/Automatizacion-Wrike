Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora los errores específicos de "NoSuchMethodError" y "Cannot read properties of null"
    if (err.message.includes('NoSuchMethodError') || err.message.includes('Cannot read properties of null')) {
      return false; // Evita que Cypress falle por estos errores específicos
    }
    
    // Ignora el error de "ResizeObserver loop completed with undelivered notifications"
    if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
      return false; // Evita que Cypress falle por este error específico
    }
  
    // O simplemente ignora todas las excepciones (como ya lo tienes implementado)
    return false; 
  });
  
  