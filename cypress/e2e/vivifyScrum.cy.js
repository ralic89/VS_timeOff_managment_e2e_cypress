/// <reference types="cypress" />
import{general} from '../e2e/page_objects/general'
import{navigation} from '../e2e/page_objects/navigation'
import{loginClass} from '../e2e/page_objects/loginPage'
import data from '../fixtures/data.json'
import { addBoard } from './page_objects/addBoard'
import {faker} from '@faker-js/faker'
import { edit } from './page_objects/edit'
import { logout } from './page_objects/logout'

var token;
var boardId;


describe ('Zavrsni ispit ' , () =>{

before ('Visit login page and login - FrontEnd', () => {
    cy.intercept("POST", 'https://cypress-api.vivifyscrum-stage.com/api/v2/login').as('validLogin')
    cy.visit ('/login')
    cy.url().should('contain' , '/login')
    general.headerTitle.should('be.visible')
    .and('have.text', data.loginHeader)
    loginClass.loginFunc()
    cy.wait('@validLogin').then(intercept => {
        // console.log(intercept)
        expect(intercept.response.statusCode).to.eq(200)
        token = intercept.response.body.token
    })


})

beforeEach ('Set token to local storage' , () => {
    window.localStorage.setItem ('token' , token)
})

it ('Add board ' , () => {
    cy.intercept("POST" , 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards').as('validAdd')
    cy.visit('/my-organizations')
    cy.url().should('contain' , '/my-organizations')
    addBoard.addBoardFunc(faker.name.firstName())
    cy.url().should('contain' , '/boards')
    cy.wait('@validAdd').then(intercept =>{
        // console.log(intercept)
        expect(intercept.response.statusCode).to.eq(201)
        boardId = intercept.response.body.id
    })

})

it ('Edit board ' , () => {

    edit.getFirstBoardFunc()
    edit.editFunc(faker.random.alpha(6) , faker.lorem.sentence(7))
    general.SuccessfulUpdate.should('exist')
    .and('have.text', 'Successfully updated the Board Basic Info.')
})

it ('Delete board ' , () => {
    cy.request({
        method : "DELETE" , 
        url : `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardId}`,
        headers : {
            authorization : `Bearer ${token}`
        }
    }).then ((response) => {
        expect(response.status).to.eq(200)
    })
})

it ('Logout Front ' , () => {
    logout.logoutFunc()
})











})