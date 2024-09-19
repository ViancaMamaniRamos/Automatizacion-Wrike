import Space from "../class/space.cy";
import {OptionViewSpace} from "../constants/constants";
import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Change View Space', () => {

    it('Change view space', () => {
        cy.viewport(1280, 720);
        const space = new Space()
        space.changeViewSpace(OptionViewSpace.TODOS_MIS_ESPACIOS);
        space.changeViewSpace(OptionViewSpace.SOLO_ESPACIO_SELECCIONADO);
    })
})