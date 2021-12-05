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

