const btn = document.getElementById('btn');
const dob = document.getElementById('dob');
const form = document.getElementById('form');
const results = document.querySelector('.results');
const resultBtn = document.getElementById('btn-results');

btn.addEventListener('click', calcDays);
resultBtn.addEventListener('click', () => location.reload());

function calcDays() {
    let birthday = new Date(dob.value);
    if(birthday == "Invalid Date") {
        alert('Please submit a valid date.');
    }  else {
        form.classList.toggle('hide');
    }
    
    //convert date to something JS can use
    birthday = Math.floor(birthday);  // ??? MAGIC 
    
    //grab today's date
    const today = Date.now(); //in milliseconds
    
    //convert result to days
    const daysOld = Math.floor((today - birthday) / 1000 / 60 / 60 / 24);
 
    //display the answer
    
    //then make it look nice
    const div = document.createElement('div');
    div.textContent = `You are ${daysOld} days old.`;
    results.style.display = "block";
    results.appendChild(div);
    
}