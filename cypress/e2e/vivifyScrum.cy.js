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


describe ('VivifyScrum testing' , () =>{

    before (() =>{
        cy.request ("POST" , "https://cypress-api.vivifyscrum-stage.com/api/v2/login" , {
            email: "dragan@dragan.com", 
            password: "Nada1111!",
        }).its('body').then((response) => {
            window.localStorage.setItem('token' , response.token)
            window.localStorage.setItem('user', JSON.stringify(response.user))
            window.localStorage.setItem('user_id', response.user.id)
        })
    })
// before ('Visit login page and login - FrontEnd', () => {
//     cy.intercept("POST", 'https://www.vivifyscrum.com/api/v2/login').as('validLogin')
//     cy.visit ('/login')
//     cy.url().should('contain' , '/login')
//     general.headerTitle.should('be.visible')
//     .and('have.text', data.loginHeader)
//     loginClass.loginFunc()
//     cy.wait('@validLogin').then(intercept => {
//         // console.log(intercept)
//         expect(intercept.response.statusCode).to.eq(200)
//         token = intercept.response.body.token
// })    })




// beforeEach ('Set token to local storage' , () => {
//     window.localStorage.setItem ('token' , token)
// })

// it ('Add board ' , () => {
//     cy.intercept("POST" , 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards').as('validAdd')
//     cy.visit('/my-organizations')
//     cy.url().should('contain' , '/my-organizations')
//     addBoard.addBoardFunc(faker.name.firstName())
//     cy.url().should('contain' , '/boards')
//     cy.wait('@validAdd').then(intercept =>{
//         // console.log(intercept)
//         expect(intercept.response.statusCode).to.eq(201)
//         boardId = intercept.response.body.id
//     })

// })

// it ('Edit board ' , () => {

//     edit.getFirstBoardFunc()
//     edit.editFunc(faker.random.alpha(6) , faker.lorem.sentence(7))
//     general.SuccessfulUpdate.should('exist')
//     .and('have.text', 'Successfully updated the Board Basic Info.')
// })

// it ('Delete board ' , () => {
//     cy.request({
//         method : "DELETE" , 
//         url : `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardId}`,
//         headers : {
//             authorization : `Bearer ${token}`
//         }
//     }).then ((response) => {
//         expect(response.status).to.eq(200)
//     })
// })

// it ('Logout Front ' , () => {
//     logout.logoutFunc()
// })

it ('Go to TimeOff tab' , () =>{
    cy.visit('/boards/13575')
    navigation.timeOffFunc()
    general.memberHeaderTitle.should('be.visible')
    .and ('have.text' , 'Member')
})

it ('Add Number of vacation days on this day', () =>{
    const numberOfVacationDays = faker.datatype.number(100);
    navigation.numberOfVacationFunc(numberOfVacationDays)
    general.totalNmbrOfUnusedDays.should('be.visible')
    .and('contain', numberOfVacationDays)
    general.SuccessfulUpdate.should('be.visible')
    .and('have.text' , "Successfully updated number of vacation days on this day")
})

it ('Add vacaction event' , () => {
    navigation.chooseVacation()
    general.vacationAssert.should('be.visible')
     .and('have.css' , 'background-color' , 'rgb(168, 206, 72)')
     navigation.usedDaysVac.should('contain','3d')
    // general.totalNmbrOfUnusedDays.should('contain' , numberOfVacationDays - 3 )
     navigation.deleteEventFunc()

})

it ('Add sick leave event ' , () => {
    navigation.chooseSickLeave()
    general.sickLeaveAssert.should('be.visible')
    .and('have.css' , 'background-color' , 'rgb(72, 206, 149)')
    navigation.usedDaysSick.should('contain','1d')
     // general.totalNmbrOfUnusedDays.should('contain' , numberOfVacationDays - 1 )
     navigation.deleteEventFunc()
})

it ('Add Parental leave' , () => {
    navigation.chooseParentalLeave()
    general.parentalLeaveAssert.should('be.visible')
    .and('have.css' , 'background-color' , 'rgb(224, 148, 238)')
    navigation.deleteEventFunc()

})

it ('Add Paid time off', () => {
    navigation.choosePaidTimeOff()
    general.paidTimeOffAssert.should('be.visible')
    .and('have.css' , 'background-color' , 'rgb(237, 176, 68)')
    navigation.deleteEventFunc()

})

it ('Add Unpaid time off', () => {
    navigation.chooseUnpaidTimeOff()
    general.unpaidTimeOffAssert.should('be.visible')
    .and('have.css' , 'background-color' , 'rgb(92, 190, 237)')
    navigation.deleteEventFunc()

})

it ('Add Other', () => {
    navigation.chooseOther()
    general.otherAssert.should('be.visible')
    .and('have.css' , 'background-color' , 'rgb(72, 186, 206)')
    navigation.deleteEventFunc()

})











})