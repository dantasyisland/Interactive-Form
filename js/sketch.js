// The "Name" <input type="text"> element (should already have a variable)
// The "Email Address" <input type="text"> element
// The "Register for Activities" <fieldset> element (should already have a variable)
// The "Card number" <input type="text"> element
// The "Zip code" <input type="text"> element
// The "CVV" <input type="text"> element

function validationPass(element) {
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.style.display = 'none'; // last element is a span - must format email
  }

function validationFail(element) {
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.style.display = 'inline'; // last element is a span - must format email
  }

// Validator Functions




name.addEventListener('keyup', (e)=>{
    const nameValue = name.value;
    const properName = (/^[a-z,.'-]+$/gi).test(nameValue); // FIX FIX FIX - spaces include
    if (properName === false) {
        validationFail(name);
    }
    else {
        validationPass(name);
    }
    console.log(properName);
})

email.addEventListener('keyup', (e)=>{
    const emailValue = email.value;
    const properEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
    if (properEmail === false) {
        validationFail(email);
    } else {
        validationPass(email)
    }


})

form.addEventListener('click', (e)=>{


    e.preventDefault();
})


