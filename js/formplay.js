// Variables for the entire form


//BASIC INFO fieldset

let name = document.getElementById('name'); // input
let email = document.getElementById('email'); // input
let jobRole = document.getElementById('title'); // select - 1st option has hidden attribute - last option is Other - options have values
let otherJobRole = document.getElementById('other-job-role'); // input - other job role

//SHIRTS fieldset
let tShirtSize = document.getElementById('size'); // select - options have values
let tShirtDesign = document.getElementById('design'); // select - options have values

let tShirtDesignOptions = document.querySelectorAll('#design option') // SMARTER WAY TO GO
let tShirtColor = document.getElementById('color'); // select - options have data-theme js puns or heart js

//ACTIVITES fieldset
let activitiesBox = document.getElementById('activities-box');


// let checkboxes = activitiesBox.children; // HTML collection of labels - input type checkbox
let activitiesCheckboxes = document.querySelectorAll('.activities input'); // node list  HTML collection of inputs type - checkbox


// Payment Info
let payment = document.getElementById('payment');
let payment2 = document.querySelectorAll('#payment option'); // values - select method hidden


