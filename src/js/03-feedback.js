import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const LOCALSTORAGE_KEY = "feedback-form-state";
const formData = {};
const savedMassege = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

form.addEventListener("input", throttle(saveInput, 500));
form.addEventListener("submit", submitInput);

populateInput()

function saveInput(evt) {
    evt.preventDefault();
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function submitInput(evt) {
    evt.preventDefault();
    console.log(savedMassege)
    evt.currentTarget.reset()
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

function populateInput() {
    if (savedMassege) {
        form.elements.email.value = savedMassege.email;
        form.elements.message.value = savedMassege.message
    }
}