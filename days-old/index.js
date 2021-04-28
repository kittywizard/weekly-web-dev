const btn = document.getElementById('btn');
const dob = document.getElementById('dob');
const form = document.getElementById('form');
const results = document.querySelector('.results');
const resultBtn = document.getElementById('btn-results');
const container = document.querySelector('.container');

btn.addEventListener('click', calcDays);
resultBtn.addEventListener('click', () => location.reload());

function calcDays() {
    let birthday = new Date(dob.value);
    if(birthday == "Invalid Date") {
        alert('Please submit a valid date.');
        return;
    }  else {
        container.removeChild(form); //delete the form so the new stuff centers!
    }
    
    //convert date to something JS can use
    birthday = Math.floor(birthday);  // ??? MAGIC 
    
    //convert result to days
    let daysOld = Math.floor((Date.now() - birthday) / 1000 / 60 / 60 / 24);
    let daysStr = daysOld.toLocaleString();
 
    //display the answer
         //then make it look nice
    let div = document.createElement('div');
    let num = document.createElement('span');
    num.textContent = `${daysStr}`;
    num.classList.add('bold');
    div.textContent = `You are `;
    div.appendChild(num);
    if(daysOld >= 12312){ div.textContent += ` days old! ☠️`}
    else {  div.textContent += ` days old! 👶`}
    results.style.display = 'block'
    results.insertBefore(div, resultBtn);
    
}