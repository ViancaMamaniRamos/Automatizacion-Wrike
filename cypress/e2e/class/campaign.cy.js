class Space {

    constructor() {
    }

    editTaskCampaign() {
        cy.get('button[aria-label="Espacio Campaña de Marketing. Abrir para cambiar entre espacios"]').click()
        cy.contains('Campaña de Marketing').click({force:true})
    }

    #goToSettingsSpace () {
        cy.contains('span', 'Ajustes del espacio')
            .parents('sidebar-item')
            .click();
    }
}

export default Space;