import SpaceSettings from "../../class/space-settings-flow.cy";
import { OptionCreateSpace, OptionViewSpace } from "../../constants/constants";
import { setup_after_all, setup_after_each, setup_before_all, setup_before_each } from "../../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Cambio de color', () => {

    it('Verificar agregar un estado (completado) nuevo', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeFlowNewCompleted();
    })
    it('Verificar editar el color del estado (completado) nuevo', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeFlowColorCompleted();
    })
    it('Verificar editar el nombre del estado (completado) nuevo', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeFlowEditNameCompleted();
    })
    it('Verificar deshacer el eliminado del estado (completado) nuevo creado', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeFlowDeleteCompletedUndo();
    })
    it('Verificar eliminar el estado (completado) nuevo creado', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeFlowDeleteCompleted();
    })
})