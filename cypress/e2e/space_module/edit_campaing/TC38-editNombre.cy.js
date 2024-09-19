import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../../support/hooks";
import Campaign from "../../class/campaign.cy";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Editar campaña', () => {
    it ('Verificar el envio de mensajes al asignado de la tarea en la campaña',()=>{
        const campaign=new Campaign();
        campaign.editTaskCampaign();
    })
})