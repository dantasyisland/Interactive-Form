// Variables for the entire form


//BASIC INFO fieldset

const nameField = document.getElementById('name'); // input
const email = document.getElementById('email'); // input
const jobRole = document.getElementById('title'); // select - 1st option has hidden attribute - last option is Other - options have values
const otherJobRole = document.getElementById('other-job-role'); // input - other job role


//Adds focus to name field on form
nameField.focus();


// Displays other job role input box if other job role is selected
otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.display = '';
    } else {
        otherJobRole.style.display = 'none';
    }

});




//SHIRTS fieldset
const tShirtSize = document.getElementById('size'); // select - options have values
const tShirtDesign = document.getElementById('design'); // select - options have values

const tShirtDesignOptions = document.querySelectorAll('#design option') // SMARTER WAY TO GO
const tShirtColor = document.getElementById('color'); // select - options have data-theme js puns or heart js


// Disables T-Shirt Color Option
tShirtColor.disabled = true;

tShirtDesign.addEventListener('change', (e) => {

    tShirtColor.disabled = false;

    if (e.target.value === 'js puns') {
        for (let i = 0; i < tShirtColor.options.length; i++) {

            tShirtColor.options[i].disabled = false;
            if (tShirtColor.options[i].dataset.theme !== "js puns") {
                tShirtColor.options[i].disabled = true;
                tShirtColor.options[1].selected = true;

            }
        }
    }
    if (e.target.value === 'heart js') {
        for (let i = 0; i < tShirtColor.options.length; i++) {
            tShirtColor.options[i].disabled = false;
            if (tShirtColor.options[i].dataset.theme !== "heart js") {
                tShirtColor.options[i].disabled = true;
                tShirtColor.options[4].selected = true;

            }
        }

    }

})





//ACTIVITES fieldset
// const activitiesBox = document.getElementById('activities-box');


// const checkboxes = activitiesBox.children; // HTML collection of labels - input type checkbox

// let activities = document.querySelectorAll('#activities')


let activitiesCheckboxes = document.querySelectorAll('.activities input'); // node list input type check box
let totalParagraph = document.querySelector('#activities-cost'); // paragraph elemment

activities.addEventListener('change', (e) =>{
    let total = 0;

    for(let i=0; i < activitiesCheckboxes.length; i++) {
        if(activitiesCheckboxes[i].checked == true) {
            total += parseInt(activitiesCheckboxes[i].getAttribute('data-cost'));
    }
    if((e.target.checked === true) && (e.target.getAttribute('data-day-and-time') === activitiesCheckboxes[i].getAttribute('data-day-and-time'))) {
        activitiesCheckboxes[i].disabled = true;
        e.target.disabled = false;
    } else if ((e.target.checked === false) && (e.target.getAttribute('data-day-and-time') === activitiesCheckboxes[i].getAttribute('data-day-and-time'))) {
        activitiesCheckboxes[i].disabled = false;
        e.target.disabled = false;
    }
}

    totalParagraph.innerHTML = `<p id="activities-cost" class="activities-cost">Total: $${total}</p>`
})



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

paymentOptions[1].selected = true;
const paymentInfo = document.querySelector('#payment');

//if option-value for select == classname
//e.target = select
// children expect value hidden
paymentInfo.addEventListener('change', (e) =>{

    // let x = document.querySelector(`#${e.target.value}`);
    // x.style.display = "block";
    for(let i = 0; i< paymentInfo.length; i++) {
        if (paymentInfo[i].selected === true) {
            if (paymentInfo[i].value === 'paypal') {
                paypal.style.display = "block"
                creditCard.style.display = "none";
                bitcoin.style.display = "none";
            } else if (paymentInfo[i].value === 'bitcoin') {
                bitcoin.style.display = "block";
                paypal.style.display = "none"
                creditCard.style.display = "none";
            } else if (paymentInfo[i].value === 'credit-card') {
                creditCard.style.display = "block";
                bitcoin.style.display = "none";
                paypal.style.display = "none"
            }

        }
    }




})
