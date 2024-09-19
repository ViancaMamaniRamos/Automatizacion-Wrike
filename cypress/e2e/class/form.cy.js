class Form {

    constructor() {
    }

    createFormActiveVoid() {
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.contains('h3', 'Formulario de solicitud de activos').first().click();
        cy.contains('button', 'Enviar').click();
    }

    createFormActiveBack(active) {
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.contains('h3', 'Formulario de solicitud de activos').first().click();
        cy.wait(2000);
        cy.contains('Describe brevemente el activo que necesitas').click().type(active);
        cy.contains('button', 'Volver a la lista').click();
        cy.contains('button', 'Salir').click();
    }

    createFormActive(projectName, active) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.wait(2000);
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.contains('h3', 'Formulario de solicitud de activos').first().click();
        cy.wait(2000);
        cy.contains('Describe brevemente el activo que necesitas').click().type(active);
        cy.contains('button', 'Enviar').click();
    }

    createFormRequisitosTI(projectName, optionOffice) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.wait(2000);
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.contains('h3', 'Requisitos de TI').click();
        cy.wait(2000);
        cy.get('.select__trigger').first().click({ force: true });
        cy.contains(optionOffice).click()
        cy.contains('Enviar').click();
    }

    createFormRequisitosTIBack(optionOffice) {
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.contains('h3', 'Requisitos de TI').click();
        cy.wait(2000);
        cy.get('.select__trigger').first().click({ force: true });
        cy.contains(optionOffice).click();
        cy.contains('button', 'Volver a la lista').click();
        cy.contains('button', 'Salir').click();
    }

    createFormRequisitosTIVoid() {
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.contains('h3', 'Requisitos de TI').click();
        cy.contains('button', 'Enviar').click();
    }


    createFormLegal(projectName, optionOffice) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.wait(2000);
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.contains('h3', 'Solicitud legal').click()
        cy.wait(2000);
        cy.get('.select__trigger').first().click({ force: true });
        cy.contains(optionOffice).click();
        cy.contains('button', 'Enviar');
    }

    createFormLegalVoid() {
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.contains('h3', 'Solicitud legal').click();
        cy.contains('button', 'Enviar').click();
    }

    createFormLegalBack(optionOffice) {
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.contains('h3', 'Solicitud legal').click()
        cy.wait(2000);
        cy.get('.select__trigger').first().click({ force: true });
        cy.contains(optionOffice).click();
        cy.contains('button', 'Volver a la lista').click();
        cy.contains('button', 'Salir').click();
    }
}

export default Form;