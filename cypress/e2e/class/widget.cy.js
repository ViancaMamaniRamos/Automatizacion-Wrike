class Space {

    constructor() {
    }

    createWidgetPersonalizado() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Widget personalizado')
            .click();
        cy.contains('Crear widget')
            .click();
    }

    createWidgetMyTask() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Mis tareas')
            .click();
    }

    createWidgetMyWeekTask() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Mis tareas esta semana')
            .click();
    }

    createWidgetTaskList() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Lista de tareas')
            .click();
    }

    createWidgetListProjects() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Lista de proyectos')
            .click();
    }

    createWidgetReccountProjects() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Recuento de proyectos')
            .click();
    }

    createWidgetReccountTasks() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Recuento de tareas')
            .click();
    }

    createWidgetProgress() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Progreso')
            .click();
    }

    createWidgetStatusProject() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Proyectos por estado')
            .click();
    }

    createWidgetStatusTasks() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Tareas por estado')
            .click();
    }

    createWidgetAssignedTasks() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Tareas por asignado')
            .click();
    }

    createWidgetBurndown() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click();
        cy.contains('Diagrama burndown por finalización de la tarea')
            .click();
    }

    #goToSettingsSpace() {
        cy.contains('span', 'Ajustes del espacio')
            .parents('sidebar-item')
            .click();
    }
}

export default Space;