class Space {

    constructor() {
    }

    createNewSpace(spaceOption) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Espacio').click({ force: true });
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
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Introduce el nombre del espacio"]')
            .clear()
            .type('Automation');
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
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Nombre del tipo de proyecto"]')
            .clear()
            .type('Proyecto');
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
        cy.wait(2000)
        this.#goToSettingsSpace();
        cy.get('input[placeholder="Nombre del tipo de tarea"]')
            .clear()
            .type('Tarea');
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

    deleteSpace(nameSpace) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', nameSpace).click({ force: true });
        cy.wait(3000)
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
            .click({force:true});
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

    createTaskVoid(projectName, taskName) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Automation').first().click({ force: true });
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click({force:true});
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.contains('span.template-card__info-main', 'Tarea')
            .click();
        cy.get('input[data-tsid="text-input"]').type(taskName);
        cy.contains('button', 'Añadir y abrir').click();
    }

    createTaskCancel(projectName, taskName) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Automation').first().click({ force: true });
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click({force:true});
        cy.get('button[aria-label="Crear nuevo"]')
            .click();
        cy.get('.template-card__content .template-card__info-main span')
            .first().click();
        cy.get('input[data-tsid="text-input"]').type(taskName);
        cy.contains('button', 'Cancelar').click();
    }

    editTask(projectName,taskCreate , taskName) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Automation').first().click({ force: true });
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click({force:true});
        cy.wait(3000)
        this.#createTaskForEdit(taskCreate);
        cy.contains(taskCreate).first().click()
        cy.get('textarea[aria-label="Título del elemento, Task one"]').clear().type(taskName);
    }

    editTaskPlanified(taskName) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Automation').first().click({ force: true });
        cy.wait(3000)
        this.#createTaskForEdit(taskName);
        cy.contains(taskName).click()
        cy.contains('span.status-button__text', 'Nuevo').click();
        cy.contains('Planificado').click();
    }

    editTaskInCourse(taskName) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Automation').first().click({ force: true });
        cy.wait(3000)
        this.#createTaskForEdit(taskName);
        cy.contains(taskName).click()
        cy.contains('span.status-button__text', 'Nuevo').click();
        cy.contains('En curso').click();
    }

    editTaskInRevision(taskName) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Automation').first().click({ force: true });
        cy.wait(3000)
        this.#createTaskForEdit(taskName);
        cy.contains(taskName).click()
        cy.contains('span.status-button__text', 'Nuevo').click();
        cy.contains('En revisión').click();
    }

    editTaskCompleted(taskName) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Automation').first().click({ force: true });
        cy.wait(3000)
        this.#createTaskForEdit(taskName);
        cy.contains(taskName).click()
        cy.contains('span.status-button__text', 'Nuevo').click();
        cy.contains('Completado').click();
    }

    deleteAllTasks(projectName) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Automation').first().click({ force: true });
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click({force:true});
        cy.get('input[aria-label="Seleccionar todos los elementos de la tabla"]').check();
        cy.get('button[aria-label="Eliminar"]').click();
    }

    editTaskImportance(projectName, importance, taskName) {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Automation').first().click({ force: true });
        cy.contains('span.tree-item-name__button-text', projectName)
            .parents('folder-tree-node')
            .click({force:true});
        this.#createTaskForEdit(taskName);
        cy.contains(taskName).click()
        cy.get('button[aria-label="Mostrar más campos"]').click()
        cy.contains('span', 'Normal').click();
        cy.contains('span',importance).click()
        cy.get('button[aria-label="Mostrar menos campos"]').click()
    }

    #goToSettingsSpace() {
        cy.contains('span', 'Ajustes del espacio')
            //.parents('sidebar-item')
            .click({ force: true });
    }

    #createTaskForEdit(taskName) {
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
}

export default Space;