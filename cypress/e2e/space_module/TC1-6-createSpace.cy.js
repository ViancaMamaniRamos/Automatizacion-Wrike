import Space from "../class/space.cy";
import {OptionCreateSpace} from "../constants/constants";
import {setup_after_all, setup_after_each, setup_before_all, setup_before_each} from "../../support/hooks";

setup_before_all();
setup_before_each();
setup_after_each();
setup_after_all();

describe('Create Space', () => {

    it('Verificar la creacion de un espacio en blanco', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        space.createNewSpace(OptionCreateSpace.VACIO);
    })
    it('Verificar la creacion de un espacio en marketing', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        space.createNewSpace(OptionCreateSpace.MARKETING);
    })
    it('Verificar la creacion de un espacio en sprint', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        space.createNewSpace(OptionCreateSpace.SPRINTS);
    })
    it('Verificar la creacion de un espacio de seguimiento de objetivos', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        space.createNewSpace(OptionCreateSpace.SEGUIMIENTO_OBJETIVOS);
    })
    it('Verificar la creacion de un espacio de solicitudes', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        space.createNewSpace(OptionCreateSpace.SOLICITUDES);
    })
    it('Verificar la creacion de un espacio en proyectos tareas', () => {
        cy.viewport(1280, 720);
        const space = new Space();
        space.createNewSpace(OptionCreateSpace.PROYECTOS_TAREAS);
    })
})