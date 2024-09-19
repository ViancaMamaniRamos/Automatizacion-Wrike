class SpaceSettingsFlow {

    constructor() {
    }

    changeFlowNewActive() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click();
        cy.contains('button', 'Añadir estado').eq(0).click();
        cy.get('input[placeholder="Activo"]').clear().type('Reabierto');
        cy.contains('button', 'Guardar').click();
    }

    changeFlowColorActive() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click();
        cy.get('.wf-designer-scheme-status-card').eq(4).click();
        cy.get('.wf-designer-scheme-color-picker__cell[data-application="orange"]').click();
        cy.contains('button', 'Guardar').click();
    }

    changeFlowEditNameActive() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click();
        cy.get('.wf-designer-scheme-status-card').eq(4).click();
        cy.get('input[placeholder="Activo"]').clear().type('Re-abierto');
        cy.contains('button', 'Guardar').click();
    }

    changeFlowDeleteActiveUndo() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click(); 
        cy.get('.wf-designer-scheme-status-card').eq(4).click();
        cy.contains('button', 'Eliminar estado').click();
        cy.contains('DESHACER').click();
    }

    changeFlowDeleteActive() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click();
        cy.get('.wf-designer-scheme-status-card').eq(4).click();
        cy.contains('button', 'Eliminar estado').click();
        cy.contains('button', 'Guardar').click();
    }

    changeFlowNewCompleted() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click();
        cy.get('.button--color-mode-accent.skin-pseudo.size-m.theme-default').eq(1).click();
        cy.get('input[placeholder="Completado"]').clear().type('Reapertura')
        cy.contains('button', 'Guardar').click()
    }

    changeFlowColorCompleted() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click();
        cy.get('.wf-designer-scheme-status-card').eq(5).click();
        cy.get('.wf-designer-scheme-color-picker__cell[data-application="orange"]').click();
        cy.contains('button', 'Guardar').click();
    }

    changeFlowEditNameCompleted() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click();
        cy.get('.wf-designer-scheme-status-card').eq(5).click();
        cy.get('input[placeholder="Completado"]').clear().type('Re-apertura');
        cy.contains('button', 'Guardar').click();
    }

    changeFlowDeleteCompletedUndo() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click(); 
        cy.get('.wf-designer-scheme-status-card').eq(5).click();
        cy.contains('button', 'Eliminar estado').click();
        cy.contains('DESHACER').click();
    }

    changeFlowDeleteCompleted() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Flujo de trabajo').click(); 
        cy.get('.wf-designer-scheme-status-card').eq(5).click();
        cy.contains('button', 'Eliminar estado').click();
        cy.contains('button', 'Guardar').click();
    }

    #goToSettingsSpace() {
        cy.contains('span', 'Ajustes del espacio')
            //.parents('sidebar-item')
            .click({ force: true });
    }
}

export default SpaceSettingsFlow;