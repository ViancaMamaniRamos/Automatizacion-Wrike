class Widget {

    constructor() {
    }

    createWidgetPersonalizado() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click({ force: true });
        cy.contains('Widget personalizado')
            .click({ force: true });
        cy.contains('Crear widget')
            .click({ force: true });
    }

    createWidgetMyTask() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click({ force: true });
        cy.contains('Mis tareas')
            .click({ force: true });
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
            .click({ force: true });
        cy.contains('Lista de proyectos')
            .click({ force: true });
    }

    createWidgetReccountProjects() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click({ force: true });
        cy.contains('Recuento de proyectos')
            .click({ force: true });
    }

    createWidgetReccountTasks() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click({ force: true });
        cy.contains('Recuento de tareas')
            .click({ force: true });
    }

    createWidgetProgress() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click({ force: true });
        cy.contains('Progreso')
            .click({ force: true });
    }

    createWidgetStatusProject() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click({ force: true });
        cy.contains('Proyectos por estado')
            .click({ force: true });
    }

    createWidgetStatusTasks() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click({ force: true });
        cy.contains('Tareas por estado')
            .click({ force: true });
    }

    createWidgetAssignedTasks() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click({ force: true });
        cy.contains('Tareas por asignado')
            .click({ force: true });
    }

    createWidgetBurndown() {
        cy.contains('a', 'Panel de control')
            .click({ force: true });
        cy.contains('button', 'Widget')
            .click({ force: true });
        cy.contains('Diagrama burndown por finalización de la tarea')
            .click({ force: true });
    }

}

export default Widget;