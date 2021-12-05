// Will add a focus class to a checkbox that is in focus - CSS properties change drawing attention to element

for (let i =0; i< activitiesCheckboxes.length; i++) {
    activitiesCheckboxes[i].addEventListener('focus', (e)=>{
        e.target.parentElement.classList.add("focus")
    });
    activitiesCheckboxes[i].addEventListener('blur', (e)=>{
        e.target.parentElement.classList.remove("focus");
    });
}


