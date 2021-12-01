// Variables for the entire form


//BASIC INFO fieldset

const name = document.getElementById('name'); // input
const email = document.getElementById('email'); // input
const jobRole = document.getElementById('title'); // select - 1st option has hidden attribute - last option is Other - options have values
const otherJobRole = document.getElementById('other-job-role'); // input - other job role

//SHIRTS fieldset
const tShirtSize = document.getElementById('size'); // select - options have values
const tShirtDesign = document.getElementById('design'); // select - options have values

const tShirtDesignOptions = document.querySelectorAll('#design option') // SMARTER WAY TO GO
const tShirtColor = document.getElementById('color'); // select - options have data-theme js puns or heart js

//ACTIVITES fieldset
const activitiesBox = document.getElementById('activities-box');


// const checkboxes = activitiesBox.children; // HTML collection of labels - input type checkbox
const activitiesCheckboxes = document.querySelectorAll('.activities input'); // node list  HTML collection of inputs type - checkbox


// Payment Info
const paymentOptions = document.querySelectorAll('#payment option'); // values - select method hidden


const creditCard = document.querySelector('#credit-card');
//Credit card has div creditcard

const creditCardInfo = document.querySelectorAll('#credit-card select')

const expMonth = document.querySelectorAll('#exp-month option'); // values month of year
const expYear = document.querySelectorAll('#exp-year option'); //


// in Num box
const creditCardNumber = document.querySelector('#cc-num');
const creditCardZip = document.querySelector('#zip') ///hmmmm
const cvv = document.querySelector('#cvv')

const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');


const registerButton = document.querySelector('button[type="submit"]')


paypal.style.display = "none";
bitcoin.style.display = "none";
creditCard.style.display = "none";
