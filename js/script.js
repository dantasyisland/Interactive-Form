const form = document.querySelector('form');
const registerButton = document.querySelector('button[type="submit"]')


// NAME
let name = document.getElementById('name');
name.focus();


// JOB ROLE
const jobRole = document.getElementById('title'); // select - 1st option has hidden attribute - last option is Other - options have values
const otherJobRole = document.getElementById('other-job-role'); // input - other job role

// Displays other job role text input box if other job role is selected
otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.display = '';
    } else {
        otherJobRole.style.display = 'none';
    }

});

// T SHIRT
//SHIRTS fieldset
const tShirtDesign = document.getElementById('design'); // select - options have values
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



// ACTIVTIES

let activitiesCost = document.querySelector('#activities-cost'); // paragraph elemment
let activities = document.querySelector('#activities-box');
let activitiesCheckboxes = document.querySelectorAll('.activities input'); // node list input type check box
let total = 0; // outside for validation

activities.addEventListener('change', (e) =>{
    for (let i=0; i< activitiesCheckboxes.length; i++) {
        if((e.target.checked === true) && (e.target.getAttribute('data-day-and-time') === activitiesCheckboxes[i].getAttribute('data-day-and-time'))) {
        activitiesCheckboxes[i].disabled = true;
        e.target.disabled = false;
    } else if ((e.target.checked === false) && (e.target.getAttribute('data-day-and-time') === activitiesCheckboxes[i].getAttribute('data-day-and-time'))) {
        activitiesCheckboxes[i].disabled = false;
        e.target.disabled = false;
    }
    }

    if(e.target.checked === true) {
        total += parseInt(e.target.getAttribute('data-cost'));

    }
    else if(e.target.checked === false) {
        total -=parseInt(e.target.getAttribute('data-cost'));

    }
    activitiesCost.innerText = `Total: $${total}`
})



// PAYMENT


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


// nested inside I can hide them other s clean switch


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

//VALIDATORS


const email = document.getElementById('email'); // input

function valid(element) {
    element.parentElement.classList.remove('not-valid');
    element.parentElement.classList.add('valid');
    element.parentElement.lastElementChild.style.display = 'none';
}

function invalid(element) {
    element.parentElement.classList.remove('valid');
    element.parentElement.classList.add('not-valid');
    element.parentElement.lastElementChild.style.display = 'inline';
}



function isNamevalid (name) {
    const nameIsvalid = /^[a-z ,.'-]+$/i.test(name.value);
    if(nameIsvalid === true) valid(name);
    else invalid(name);
}
function isEmailvalid (email) {
    const emailIsvalid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
    if(emailIsvalid === true) valid(email);
    else invalid(email);
}


// NEW CODE

function isActivitiesvalid (activities) {
    if (total>0) {

        valid(activities);

    }
    else {
        invalid(activities);
    }

}

// END OF NEW CODE

function isCreditCardNumValid () {
// creditCardNumber
}

function isCreditCardZipValid () {
// creditCardZip
}

function isCvvValid() {
// cvv
}




form.addEventListener('keyup', e => {
        e.preventDefault(); // REMOVE
        isNamevalid(name);
        isEmailvalid(email);
        isActivitiesvalid(activities);
//      if (!emailvalidator())  e.preventDefault();
//     if (!languagevalidator()) e.preventDefault();

   });

form.addEventListener('change', e => {
        isActivitiesvalid(activitiesCheckboxes);
});

form.addEventListener('submit', e => {
    e.preventDefault();
})
