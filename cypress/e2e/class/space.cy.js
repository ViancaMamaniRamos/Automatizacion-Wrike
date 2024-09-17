class Space {

    constructor() {
    }

    createNewSpace(spaceOption) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click();
        cy.contains('a.context-selector-menu-item__link', 'Espacio').click();
        cy.contains('h4.template-item__title', spaceOption)
            .parents('template-item')
            .find('button.template-item__preview-button')
            .click();
    }

    changeViewSpace(option) {
        cy.get('button[aria-label="Más opciones"]').click({ force: true });
        cy.contains('wrike-text-card-v2', option)
            .parents('wrike-list-v2-item')
            .click({ force: true });

    }

    editNewSpaceNameDescription(name, description) {
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Introduce el nombre del espacio"]')
            .clear()
            .type(name);
        cy.get('textarea[placeholder="Añadir descripción"]')
            .clear()
            .type(description);
        cy.contains('button', 'Guardar')
            .click();
        cy.get('button[aria-label="Cerrar"]')
            .last().click();
    }

    editNewSpaceNameVoid() {
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Introduce el nombre del espacio"]')
            .clear();
        cy.contains('button', 'Guardar')
            .click();
        cy.get('button[aria-label="Cerrar"]')
            .last().click();
    }

    editNewSpaceTypeProject(typeProject) {
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Nombre del tipo de proyecto"]')
            .clear()
            .type(typeProject);
        cy.contains('button', 'Guardar')
            .click();
        cy.get('button[aria-label="Cerrar"]')
            .last().click();
    }

    editNewSpaceTypeProjectVoid() {
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Nombre del tipo de proyecto"]')
            .clear();
        cy.contains('button', 'Guardar')
            .click();
        cy.get('button[aria-label="Cerrar"]')
            .last().click();
    }

    editNewSpaceTypeTask(typeTask) {
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Nombre del tipo de tarea"]')
            .clear()
            .type(typeTask);
        cy.contains('button', 'Guardar')
            .click();
        cy.get('button[aria-label="Cerrar"]')
            .last().click();
    }

    editNewSpaceTypeTaskVoid() {
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Nombre del tipo de tarea"]')
            .clear();
        cy.contains('button', 'Guardar')
            .click();
        cy.get('button[aria-label="Cerrar"]')
            .last().click();
    }

    editNewSpaceCancel(typeProject, typeTask) {
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Nombre del tipo de proyecto"]')
            .clear()
            .type(typeProject);
        cy.get('input[placeholder="Nombre del tipo de tarea"]')
            .clear()
            .type(typeTask);
        cy.contains('button', 'Cancelar')
            .click();
        cy.get('button[aria-label="Cerrar"]')
            .last().click();
    }

    deleteSpace() {
        this.#goToSettingsSpace();
        cy.contains('button', 'Eliminar espacio')
            .click();
        cy.get('div.confirmation-dialog__actions')
            .find('button[wrike-button-v2]')
            .contains('Eliminar')
            .should('exist')
            .click();
    }

    createProject() {
        cy.get('button[data-application="project-creation-button"]').click();
        cy.get('input[placeholder="Introduce el nombre"]').type('Sprint 1{enter}');

    }

    createTask(projectName, taskName) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Tarea')
            .click();
        cy.get('input[data-tsid="text-input"]').type(taskName);
        cy.contains('button', 'Añadir y abrir').click();
        cy.contains('.title__ghost', taskName)
            .parents('.work-item-header__main')
            .find('button[data-application="close-button"]')
            .click();
    }

    createTaskCancel(projectName, taskName) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Tarea')
            .click();
        cy.get('input[data-tsid="text-input"]').type(taskName);
        cy.contains('button', 'Cancelar').click();
    }

    editTask(projectName, taskName) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.contains('Task one').click()
        cy.get('textarea[aria-label="Título del elemento, Task one"]').clear().type(taskName);
    }

    editTaskPlanified(projectName) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.contains('Task one').click()
        cy.contains('span.status-button__text', 'Nuevo').click();
        cy.contains('Planificado').click();
    }

    editTaskInCourse(projectName) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.contains('Task one').click()
        cy.contains('span.status-button__text', 'Nuevo').click();
        cy.contains('En curso').click();
    }

    editTaskInRevision(projectName) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.contains('Task one').click()
        cy.contains('span.status-button__text', 'Nuevo').click();
        cy.contains('En revisión').click();
    }

    editTaskCompleted(projectName) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.contains('Task one').click()
        cy.contains('span.status-button__text', 'Nuevo').click();
        cy.contains('Completado').click();
    }

    editTaskLevelA(projectName) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.contains('Task one').click()
        cy.get('button[aria-label="Mostrar más campos"]').click()
        cy.get('#b957ea0a-760c-4df0-9686-536477614e75').click()
        cy.contains('A').click()
    }

    editTaskImportance(projectName, importance) {
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click();
        cy.contains('Task one').click()
        cy.get('button[aria-label="Mostrar más campos"]').click()
        cy.get('#ca381cff-1eaf-4950-9a9e-769068d9a5b0').click()
        cy.contains(importance).click()
    }

    #goToSettingsSpace() {
        cy.contains('span', 'Ajustes del espacio')
            //.parents('sidebar-item')
            .click({ force: true });
    }
}

export default Space;