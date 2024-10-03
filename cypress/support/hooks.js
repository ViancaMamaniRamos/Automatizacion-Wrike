export function setup_before_all() {
    before(() => {
    });
}

export function setup_before_each() {
    beforeEach(() => {
        cy.session('login', () => {
            cy.login()
        }, {
            cacheAcrossSpecs: true
          })
        cy.visit("https://www.wrike.com/workspace.htm?acc=6616278&wr=26#inbox")
    });
}

export function setup_after_each() {
    afterEach(() => {
    });
}

export function setup_after_all() {
    after(() => {
    });
}
