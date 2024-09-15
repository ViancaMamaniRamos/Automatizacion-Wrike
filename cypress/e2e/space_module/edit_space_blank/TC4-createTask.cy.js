import Space from "../../class/space.cy";
import {OptionCreateSpace, OptionViewSpace} from "../../constants/constants";
import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Edit Space', () => {

    it('Edit Space', () => {
        cy.viewport(1280, 720);

        const space = new Space();
        space.createTask('Sprint 1', 'Task four');
    })
})