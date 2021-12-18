
const form = document.getElementById('tipCalc');
const results = document.querySelector('.results');
const tip15 = document.getElementById('15percent');
const tip18 = document.getElementById('18percent');
const tip20 = document.getElementById('20percent');

// tip15.addEventListener('click', () => {
//     tip15.classList.add('selected');
//     //need to deactivate other buttons
// });

// tip18.addEventListener('click', () => {
//     tip18.classList.add('selected');
// });

// tip20.addEventListener('click', () => {
//     tip20.classList.add('selected');
// });

form.addEventListener('submit', e => {
    let newData = new FormData(e.target);
    let check = newData.get('checkAmount');

    //check for if a button is selected

    let tip = newData.get('tipAmount');
    console.log(tip)
    //let tip = newData.get('customTip');
    
    

    getData(check, tip);
    e.preventDefault();
});


function getData(check, tip) {

    let tipPercent = tip / 100; //to get the decimal

    let tipFinal = (Number(check) * tipPercent).toFixed(2);
    tipFinal = Number(tipFinal).toFixed(2);
    console.log(`Amount of Tip: $${tipFinal}`);

    let totalBill = Number(check) + Number(tipFinal);
    totalBill = Number(totalBill).toFixed(2);
    check = Number(check).toFixed(2);

    console.log(`Total Bill Amount: ${totalBill}`);

    results.classList.toggle('hide');
    results.innerHTML = `
                        <strong>Check Amount:</strong> $${check}
                        <br>
                        <strong>Tip Amount:</strong> $${tipFinal}
                        <hr>
                        <strong>Total:</strong> $${totalBill}`;
}

function setTipAmount(tip, btn) {
    btn.classList.add('selected');
    //deselect other buttons - remove eventlisteners



    // let checkDisplay = document.createElement('span');
    // checkDisplay.classList.add('result-display');
    // checkDisplay.textContent = `Check: ${check}`;

    // let tipDisplay = document.createElement('span');
    // tipDisplay.classList.add('result-display');
    // tipDisplay.textContent = `Tip Amount: ${tipFinal}`;


    // let totalDisplay = document.createElement('span');
    // totalDisplay.classList.add('result-display');
    // totalDisplay.textContent = `Total: ${totalBill}`;

    // results.appendChild(checkDisplay);
    // results.appendChild(tipDisplay);
    // results.appendChild(totalDisplay);
}

//need to activate the function with any button click - but need to make sure that the check amount has been filled in 

//