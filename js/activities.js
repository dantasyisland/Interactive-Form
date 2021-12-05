
let activitiesCost = document.querySelector('#activities-cost'); // paragraph elemment
let activities = document.querySelector('#activities');
let activitiesCheckboxes = document.querySelectorAll('.activities input'); // node list input type check box
let total = 0; // outside for validation

activities.addEventListener('change', (e) =>{
    for (let i=0; i< activitiesCheckboxes.length; i++) {
        if((e.target.checked === true) && (e.target.getAttribute('data-day-and-time') === activitiesCheckboxes[i].getAttribute('data-day-and-time'))) {
        activitiesCheckboxes[i].disabled = true;
        console.log('hey');
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
