
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
