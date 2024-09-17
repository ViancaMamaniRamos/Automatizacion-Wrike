import Form from "../../class/form.cy";
import {OptionCreateSpace, OptionViewSpace} from "../../constants/constants";
import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Formularios legales', () => {

    it('Verificar vuelta a la lista sin que crear el formulario', () => {
        cy.viewport(1280, 720);

        const form = new Form();
        form.createFormLegalBack('Ventas');
    })
})