import Space from "../../class/space.cy";
import {OptionCreateSpace, OptionViewSpace} from "../../constants/constants";
import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Editar tarea', () => {

    it('Verificar editar tarea a estado de en curso', () => {
        cy.viewport(1280, 720);

        const space = new Space();
        space.editTaskInCourse('Task four')
    })
})