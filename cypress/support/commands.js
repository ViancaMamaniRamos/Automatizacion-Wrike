// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {GlobalConstants, User} from "../e2e/constants/constants";
import Login from "../e2e/class/login.cy";

Cypress.Commands.add('login', () => {
    cy.viewport(1280, 720);
    cy.visit(GlobalConstants.MY_DOMAIN_LOGIN);
    const login = new Login(User.USER, User.PASSWORD);
    login.login();
    cy.url().should('include', '/workspace')
});