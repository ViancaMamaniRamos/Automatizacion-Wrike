import Space from "../../class/space.cy";
import {OptionCreateSpace, OptionViewSpace} from "../../constants/constants";
import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Eliminar Tareas', () => {

    it('Verificar la eliminacion de tareas', () => {
        cy.viewport(1280, 720);

        const space = new Space();
        space.deleteAllTasks('Sprint 1')
    })
})