import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener("input", throttle(saveInput, 500));
form.addEventListener("submit", submitInput);

populateInput()

function saveInput(evt) {
    evt.preventDefault();
    let formData = localStorage.getItem(LOCALSTORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    : {};
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    }

function submitInput(evt) {
    evt.preventDefault();
    const email = evt.target.elements.email.value;
    const message = evt.target.elements.message.value;    
    if (email === '' || message === '') {
        alert('Please fill in all the fields!');
    } else {
        localStorage.removeItem(LOCALSTORAGE_KEY);
        console.log({ email, message });
    }
    evt.currentTarget.reset()
}

function populateInput() {
    let savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedData) {
        savedData = JSON.parse(savedData);
        form.elements.email.value = savedData.email;
        form.elements.message.value = savedData.message
    }
}
