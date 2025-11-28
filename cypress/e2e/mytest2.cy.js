describe("my login test", ()=>{
    it("webvisit", ()=>{
        cy.visit("https://sports.bet9ja.com")
        cy.get('.btn-primary-m.btn-login')
.click()
cy.get('#username').type("alaayo89");
cy.get('#password').type("choice123");
cy.get('.btn-primary-l.mt20').click()

    })
})