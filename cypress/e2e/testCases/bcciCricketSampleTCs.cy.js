const envVar = require('../../fixtures/envVariables/envVariable.json')
const testData = require('../../fixtures/testData/testData.json')
const objRepo = require('../../fixtures/UIPath/objectRepo.json')

describe('BCCI web application Sample Test Cases', () => {
  before(() => {
    cy.clearCookies()
    cy.getCookies().should('be.empty')
  })

  beforeEach(() => {
    cy.visit(envVar.base_url,{headers: { "Accept-Encoding": "gzip, deflate" }});
    cy.xpath(objRepo.icon_CloseHome).click()
   // cy.visit(envVar.login_url);   
    Cypress.on('uncaught:exception', (err, runnable) => {
         return false
  })
  })

  it('TC-01 Search Functionality', () => {
    cy.get(objRepo.icon_Search).click()
    cy.get(objRepo.txt_SearchBox).type(testData.search_Data)
    cy.xpath(objRepo.btn_Search).click()
    cy.xpath(objRepo.page_Search).should('have.text','Search Results')

  })

  it('TC-02 Play Search Result Video', () => {
    cy.get(objRepo.icon_Search).click()
    cy.get(objRepo.txt_SearchBox).type(testData.search_Data)
    cy.xpath(objRepo.btn_Search).click()
    cy.xpath(objRepo.page_Search).should('have.text','Search Results')
    cy.xpath(objRepo.play_Video).click({ force: true })
    cy.wait(5000)
    cy.xpath(objRepo.icon_Close).click()
  })

  
  it('TC-03 Get ODI Team Rankings list', () => {
    const countryNames = {
			Country_1: 'Pakistan',
			Country_2: 'South Africa',
			Country_3: 'India',
			Country_4: 'New Zealand',
      Country_5: 'West Indies',
			Country_6: 'Sri Lanka',
			Country_7: 'Bangladesh',
			Country_8: 'Thailand',
      Country_9: 'Australia',
		};

    cy.xpath(objRepo.menu_Rankings).click()
    cy.xpath(objRepo.btn_ODI).click()
   
    cy.xpath(objRepo.country1).should('have.text',countryNames.Country_1)
    cy.xpath(objRepo.country2).should('have.text',countryNames.Country_2)
    cy.xpath(objRepo.country3).should('have.text',countryNames.Country_3)
    cy.xpath(objRepo.country4).should('have.text',countryNames.Country_4)
    cy.xpath(objRepo.country5).should('have.text',countryNames.Country_5)
    cy.xpath(objRepo.country6).should('have.text',countryNames.Country_6)
    cy.xpath(objRepo.country7).should('have.text',countryNames.Country_7)
    cy.xpath(objRepo.country8).should('have.text',countryNames.Country_8)
    cy.xpath(objRepo.country9).should('have.text',countryNames.Country_9)
  })

  it("TC-04 Get ODI Player Rankings",() => {
    cy.xpath(objRepo.menu_Rankings).click()
    cy.xpath(objRepo.btn_ODI).click()
    cy.xpath(objRepo.arrow_playerRankings).click()


  })
})
