import SpaceSettings from "../../class/space-settings-broad.cy";
import {OptionCreateSpace, OptionViewSpace} from "../../constants/constants";
import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Cambio de icono', () => {

    it('Verificar el cambio del icono del espacio', () => {
        cy.viewport(1280, 720);

        const spaceSettings = new SpaceSettings();
        spaceSettings.changeIcon();
    })
})