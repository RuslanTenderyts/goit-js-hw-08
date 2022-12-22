import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const LOCALSTORAGE_KEY = "feedback-form-state";


(function() {
    try {
        const saveFormValue = JSON.parse(localStorage.getItem("feedback-form-state"));
        form.elements.email.value = saveFormValue.email
        form.elements.message.value = saveFormValue.message
    } catch (e) {
        console.log('localStorage empty');
    }
})();


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 1000));

// const formDat = JSON.parse(localStorage.getItem("feedback-form-state"));
const formData = {
    email : form.elements.email.value || '',
    message : form.elements.message.value || ''
};

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};   

function onFormSubmit(evt) {
    evt.preventDefault();
    
    console.log(formData)
    form.reset();
    localStorage.clear();
};

