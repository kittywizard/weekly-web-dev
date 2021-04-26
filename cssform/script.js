const form = document.getElementById('sign-up');
const container = document.querySelector(".container");

form.addEventListener('submit', event => {
    let newData = new FormData(event.target);
    let name = newData.get('name');
    let email = newData.get('email');
    form.classList.add("animation");
    
    setTimeout(()=> {
        
        createCopy('h6', 'thanks', `Hey ${name}!`);
        createCopy('h6', 'thanks', ` Thanks for signing up!`)
        createCopy('p', 'email', `Look out for an email at 
        ${email} soon.`);
        
    }, 2500);
    
    event.preventDefault();
});

function createCopy(e, className, message) {
        let element = document.createElement(e);
        element.textContent = message;
        element.classList.add(className, 'form-success');
        container.appendChild(element);
}