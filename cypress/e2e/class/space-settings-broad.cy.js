class SpaceSettingsBroad {

    constructor() {
    }

    changeColor(){
        this.#goToSettingsSpace();
        cy.contains('button','Cambiar icono').click()
        cy.get('li.space-icon-list__list-item').eq(8).find('button').click();
    }

    changeIcon(){
        this.#goToSettingsSpace();
        cy.contains('button','Cambiar icono').click()
        cy.get('.space-icon-list__item.space-standard-icon').eq(2).click();
    }

    changeIconMoreOptions(){
        this.#goToSettingsSpace();
        cy.contains('button','Cambiar icono').click()
        cy.contains('button','Seleccionar otro icono').click()
        cy.get('#bat-1').click()
    }

    changeIconMoreOptionsSearch(){
        this.#goToSettingsSpace();
        cy.contains('button','Cambiar icono').click()
        cy.contains('button','Seleccionar otro icono').click()
        cy.get('input[placeholder="Buscar icono"]').type('atom')
        cy.get('#atom-null').click()
    }

    #goToSettingsSpace() {
        cy.contains('span', 'Ajustes del espacio')
            //.parents('sidebar-item')
            .click({ force: true });
    }
}

export default SpaceSettingsBroad;