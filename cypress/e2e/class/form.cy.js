class Space {

    constructor() {
    }

    createFormActiveBack(projectName, active) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.get('a[aria-labelledby="79a71e7c-144f-49a1-9457-92b15b14c706-2074035"]').click()
        cy.get('#3e849264-1419-4a82-9fce-6a5a67087c1e').type(active);
        cy.contains('Enviar').click();
        cy.contains('span.button-text._ngcontent-pzl-3', 'Volver a la lista')
            .click();
        cy.contains('Salir');
    }

    createFormActive(projectName, active) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.get('a[aria-labelledby="79a71e7c-144f-49a1-9457-92b15b14c706-2074035"]').click()
        cy.get('#3e849264-1419-4a82-9fce-6a5a67087c1e').type(active);
        cy.contains('Enviar').click();
    }

    createFormRequisitosTI(projectName, optionOffice) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.get('#e58bb0e-b96e-4869-bd34-6fd011438691-2074032').click()
        cy,get('button[id="78ca510d-e8db-45b6-a29b-019fdaaf1e16"]').click()
        cy.contains(optionOffice).click()
        cy.contains('Enviar').click();
    }

    createFormRequisitosTIBack(projectName, optionOffice) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.get('#e58bb0e-b96e-4869-bd34-6fd011438691-2074032').click()
        cy,get('button[id="78ca510d-e8db-45b6-a29b-019fdaaf1e16"]').click()
        cy.contains(optionOffice).click();
        cy.contains('span.button-text._ngcontent-pzl-3', 'Volver a la lista')
            .click();
        cy.contains('Salir');
    }

    createFormLegal(projectName, optionOffice) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.get('h3[id="0d43fa7a-32e2-4c0e-9d38-88313d0fef5b-2074033"]').click()
        cy,get('button[id="2c5934ca-8bcf-4f60-8416-658d6011fb61"]').click()
        cy.contains(optionOffice).click()
    }

    createFormLegalBack(projectName, optionOffice) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Solicitud')
            .click();
        cy.get('h3[id="0d43fa7a-32e2-4c0e-9d38-88313d0fef5b-2074033"]').click()
        cy,get('button[id="2c5934ca-8bcf-4f60-8416-658d6011fb61"]').click()
        cy.contains(optionOffice).click();
        cy.contains('span.button-text._ngcontent-pzl-3', 'Volver a la lista')
            .click();
        cy.contains('Salir');
    }

    #goToSettingsSpace () {
        cy.contains('span', 'Ajustes del espacio')
            .parents('sidebar-item')
            .click();
    }
}

export default Space;