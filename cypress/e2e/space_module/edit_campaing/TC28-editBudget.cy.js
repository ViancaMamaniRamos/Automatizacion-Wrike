import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../../support/hooks";
import Campaign from "../../class/campaign.cy";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Editar campaña', () => {
    it ('Verificar la busqueda del presupuesto',()=>{
        const campaign=new Campaign();
        campaign.searchBudget();
    })
})