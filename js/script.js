let name = document.getElementById('name');
name.focus();

// if other clicked

let otherJobRole = document.getElementById('other-job-role');


let select = document.getElementById('title');
otherJobRole.style.display = '';

console.log('tbb');

select.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.display = '';
    }
   console.log(`You like ${event.target.value}`);
  });
