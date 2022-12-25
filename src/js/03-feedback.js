import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const LOCALSTORAGE_KEY = "feedback-form-state";
let formData = {};

(function() {
    try {
        const saveFormValue = localStorage.getItem(LOCALSTORAGE_KEY);
        if (!saveFormValue) {
            return
        }else {
            formData = JSON.parse(saveFormValue)         
            Object.entries(formData).forEach(([key, value]) => {
                form.elements[key].value = value;
            } )
        };
              
    } catch (error) {
        console.log('localStorage empty', error);
    }
})();


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 1000));

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
};   

function onFormSubmit(evt) {
    evt.preventDefault();
    
    console.log(formData)
    evt.currentTarget.reset();
    localStorage.clear();
};

