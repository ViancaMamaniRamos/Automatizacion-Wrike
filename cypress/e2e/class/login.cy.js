class Login {
    #username = '';
    #password = '';

    constructor(username, password) {
        this.#username = username;
        this.#password = password;
    }

    login() {
        cy.get('#login-input-id').type(this.#username);
        cy.contains('button', 'Next').click();
        cy.get('input[placeholder="Password"]').type(this.#password);
        cy.contains('button', 'Log in').click();
        cy.get('button[data-application="login-remember"]')
            .should('exist')
            .click()
    }

    closeWindow() {
        cy.get('button[aria-label="Cerrar"]')
            .should('exist')
            .click();
    }
}

export default Login;