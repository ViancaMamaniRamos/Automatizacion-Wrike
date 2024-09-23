import SpaceSettings from "../../class/space-settings-flow.cy";
import { OptionCreateSpace, OptionViewSpace } from "../../constants/constants";
import { setup_after_all, setup_after_each, setup_before_all, setup_before_each } from "../../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Cambio de color', () => {

    it('Verificar agregar un estado nuevo', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeFlowNewActive();
    })
    it('Verificar editar el color del estado nuevo', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeFlowColorActive();
    })
    it('Verificar editar el nombre del estado nuevo', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeFlowEditNameActive();
    })
    it('Verificar eliminar el estado nuevo creado', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeFlowDeleteActive();
    })
})