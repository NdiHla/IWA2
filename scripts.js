const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT =5;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () => {
const newValue = parseInt(number.value) - 1
number.value = number.value

if (subtract.disabled === true) {
    subtract.disabled = false
} 

if (newValue <= MIN_NUMBER) {
    subtract.disabled = true
} 
}

const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = number.value + 1;

if (subtract.disabled === true) {
    subtract.disabled = false
} 

if (newValue >= MAX_NUMBER) {
    add.disabled =true
} 
}


subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)

/* This is the firstname of the user */

const user = 'John'


/* This is the lastname of the user /* const surname = 'Smith' */


console.log(user, surname)

/* (c) ACME Inc. 2010 */

/*
 * This is the date that a user created their account 
 */
const date = '10/07/2014'

console.log(date)

/*
It is important to show the following message in order to:
- to assure users
- to scare hackers
- to impress investors
*/

console.warn('Security scan starting')

/* It is important to let user know when they can close the page  */

cnosole.info('Please wait for scan to complete before closing the browser')