

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