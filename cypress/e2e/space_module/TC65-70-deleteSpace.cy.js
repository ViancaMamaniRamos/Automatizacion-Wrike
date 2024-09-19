import Space from "../class/space.cy";
import {OptionCreateSpace, OptionViewSpace} from "../constants/constants";
import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Eliminar espacios', () => {
    it('Verificar eliminado del espacio en blanco', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        
        space.deleteSpace('Nuevo espacio');
    })
    it('Verificar eliminado de proyectos', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        
        space.deleteSpace('Proyectos');
    })
    it('Verificar eliminado de seguimiento de objetivos', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        
        space.deleteSpace('Seguimiento de objetivos');
    })
    it('Verificar eliminado de solicitudes', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        
        space.deleteSpace('Solicitudes');
    })
    it('Verificar eliminado de campañas', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        
        space.deleteSpace('Campañas');
    })
    it('Verificar eliminado de sprints', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        
        space.deleteSpace('Sprints');
    })
})