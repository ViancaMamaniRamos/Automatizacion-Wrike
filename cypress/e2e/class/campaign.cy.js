class Campaign {

    constructor() {
    }

    editTaskCampaign() {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Campañas').first().click({ force: true });
        cy.wait(3000);
        cy.contains('Crear contenido').click();
        cy.wait(3000);
        cy.get('button[aria-label="Mostrar más campos"]').click();
        cy.get('[contenteditable="true"]').eq(2).clear({ force: true }).type('3000', { force: true });
        cy.contains('button', 'Enviar').click();
    }
    searchBudget() {
        cy.get('button[data-onboarding="sidebar-context-switcher"]').click({ force: true });
        cy.contains('a.context-selector-menu-item__link', 'Campañas').first().click({ force: true });
        cy.contains('Crear contenido').click();
        cy.get('button[aria-label="Mostrar más campos"]').click();
        cy.get('input[placeholder="Buscar campos"]').type('Pre', { force: true });
        cy.contains('Presupuesto').click({ force: true });
    }
}

export default Campaign;