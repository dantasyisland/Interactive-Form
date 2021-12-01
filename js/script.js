// Lets focus on text field for name

let namefield = document.getElementById('name');
namefield.focus();

// Displays other text field if selected
let jobRole = document.getElementById('title');
let otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.display = '';
    } else {
        otherJobRole.style.display = 'none';
        console.log('df')
    }

});


//T Shirt info

// Disable the "Color" <select> element.
// Program the "Design" <select> element to listen for user changes. When a change is detected:
// The "Color" <select> element should be enabled.
// The "Color" <select> element should display an available color.
// The "Color" dropdown menu should display only the color options associated with the selected design. For example:
// If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
// If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey."
// Important Note: A select element is used for the color selection. There are two parts to a select element display: the element field and the drop down menu which opens after clicking on the field. Both the "Color" field and drop down menu must correctly update when the user selects a new theme. Neither should be empty or display unavailable colors.


let color = document.getElementById('color');
color.disabled = true;

let design = document.getElementById('design');

design.addEventListener('change', (e) => {
    color.disabled = false;
    if (e.target.value === 'js puns') {
        for (let i = 0; i < color.options.length; i++) {

            color.options[i].disabled = false;
            if (color.options[i].dataset.theme !== "js puns") {
                color.options[i].disabled = true;
                color.options[1].selected = true;

            }
        }
    }
    if (e.target.value === 'heart js') {
        for (let i = 0; i < color.options.length; i++) {
            color.options[i].disabled = false;
            if (color.options[i].dataset.theme !== "heart js") {
                color.options[i].disabled = true;
                color.options[4].selected = true;

            }
        }

    }
})





let paymentInfo = document.querySelector('#payment');
let paymentMethods = document.querySelector('.payment-methods')
let creditCard = document.querySelector('#credit-card')
let paypal = document.querySelector('#paypal')
let bitcoin = document.querySelector('#bitcoin')




paymentInfo.options[1].selected = true;

//if option-value for select == classname
//e.target = select
// children expect value hidden
paymentInfo.addEventListener('change', (e) =>{

    console.log(e.target.value);
    for(let i = 0; i< paymentInfo.length; i++) {
        console.log(paymentInfo[i]);
        if (e.target.value != paymentInfo[i].value) {
        }
    }


})


console.log(paymentInfo);