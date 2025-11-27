describe("new learning on cypress", ()=>{
    it("my testing on login details", ()=>{
        cy.visit("https://sports.bet9ja.com/")
        cy.get("h-ml__logo-icon").should("be.visible")
    })
})