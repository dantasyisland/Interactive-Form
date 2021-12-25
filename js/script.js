/**
* Treehouse Techdegree:
* FSJS Project 3 - Interactive Form
* This following code will validate a registration form for a fictional Full Stack Conference.
* I am shooting for an exceeds expectations grade
*/


/**
 * The following code ensures that the cursor appears in the name field by calling the focus() method.
 */

let name = document.getElementById('name');
name.focus();

/**
 * The following ensures that the "Other Job Role" field is hidden and displayed only when selected as an option in the job role select element.
 * focus() method is also called on the "Other Job Role" text field
 */

const jobRole = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.display = '';
        otherJobRole.focus();
    } else {
        otherJobRole.style.display = 'none';
    }
});

/**
 * The following code disables the t-shirt color field. Once a t-shirt design is selected via change event, the anonymous function in the event listener
 * will check the data-theme for either "js puns" or "heart js" and then enable respective color options to be selected on the form.
 */

const tShirtDesign = document.getElementById('design');
const tShirtColor = document.getElementById('color');

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


/**
 * The following code allows the dislay of the total cost of the user selected activities. In the anonymous function in the event listener, checkboxes are disabled or enabled
 * based on matching the data-day-and-time attribute against all other options available. If a day and time of a selected activity is
 */

let activitiesCost = document.querySelector('#activities-cost');
let activities = document.querySelector('#activities-box');
let activitiesCheckboxes = document.querySelectorAll('.activities input');
let total = 0;

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


/**
 * The following code handles payment information. The credit card option and it's respective input fields are the only fields visible. If the "Paypal" or "Bitcoin" option is
 * selected by the user then credit card information is hidden and the selected option will display. Payment methods will update if a user selects a different option.
 */


const paymentOptions = document.querySelectorAll('#payment option');
const creditCard = document.querySelector('#credit-card');

const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');

paypal.style.display = "none";
bitcoin.style.display = "none";

paymentOptions[1].selected = true;
const paymentInfo = document.querySelector('#payment');


paymentInfo.addEventListener('change', (e) =>{

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


/**
 *
 */
// Will add a focus class to a checkbox that is in focus - CSS properties change drawing attention to element

for (let i =0; i< activitiesCheckboxes.length; i++) {
    activitiesCheckboxes[i].addEventListener('focus', (e)=>{
        e.target.parentElement.classList.add("focus")
    });
    activitiesCheckboxes[i].addEventListener('blur', (e)=>{
        e.target.parentElement.classList.remove("focus");
    });
}


/**
 * The following are html elements needed for validator functions
 */

const email = document.getElementById('email'); // input

const creditCardNumber = document.querySelector('#cc-num');
const creditCardZip = document.querySelector('#zip') ///hmmmm
const cvv = document.querySelector('#cvv')


/**
 *
 * @param {*} element
 */

function valid(element) {
    element.parentElement.classList.add('valid');
    element.parentElement.lastElementChild.style.display = 'none';
    element.parentElement.classList.remove('not-valid');
}

/**
 *
 * @param {*} element
 */

function invalid(element) {
    element.parentElement.classList.add('not-valid');
    element.parentElement.lastElementChild.style.display = 'inline';
    element.parentElement.classList.remove('valid');
}

/**
 *
 */

function isNamevalid () {
    const nameIsvalid = /^[a-z ,.'-]+$/i.test(name.value);
    if(nameIsvalid === true) valid(name);
    else invalid(name);
}
function isEmailvalid () {
    const emailIsvalid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
    if(emailIsvalid === true) valid(email);
    else invalid(email);
}


function isActivitiesvalid () {
    if (total>0) {

        valid(activities);

    }
    else {
        invalid(activities);
    }

}

function isCreditCardNumValid () {
    const ccNumIsValid = /^\d{13,16}$/.test(creditCardNumber.value);
    if(ccNumIsValid === true) valid(creditCardNumber);
    else invalid(creditCardNumber);
}

function isCreditCardZipValid () {
    const isZipValid = /^\d{5}$/.test(creditCardZip.value);
    if(isZipValid === true) valid(creditCardZip);
    else invalid(creditCardZip);


}

function isCvvValid() {
    const isCvvValid = /^\d{3}$/.test(cvv.value);
    if(isCvvValid === true) valid(cvv);
    else invalid(cvv);
}


/**
 *
 */
 const form = document.querySelector('form');

 // MAY NOT NEED THIS
 const registerButton = document.querySelector('button[type="submit"]')



form.addEventListener('keyup', e => {
    isNamevalid();
    isEmailvalid();
    isActivitiesvalid();
    isCreditCardNumValid();
    isCreditCardZipValid();
    isCvvValid();

//      if (!emailvalidator())  e.preventDefault();
//     if (!languagevalidator()) e.preventDefault();

});

form.addEventListener('change', e => {
    isActivitiesvalid(activitiesCheckboxes);
});

form.addEventListener('submit', e => {
    if(!isNamevalid() || !isEmailvalid() || !isActivitiesvalid() || !isCreditCardNumValid() || !isCreditCardZipValid() ||!isCvvValid()) e.preventDefault();
    // isNamevalid();
    // isEmailvalid();
    // isActivitiesvalid();
    // isCreditCardNumValid();
    // isCreditCardZipValid();
    // isCvvValid();
});




