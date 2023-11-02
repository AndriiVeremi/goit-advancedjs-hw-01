import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  input: document.querySelector('.js-feedback-form input'),
  message: document.querySelector('.js-feedback-form textarea'),
};

let formData = {};
const STOR_KEY = 'feedback-form-state';

getSaveData();

refs.form.addEventListener('input', throttle(handlerInput, 500));
refs.form.addEventListener('submit', handlerSubmit);

function handlerInput() {
  formData = {
    email: refs.input.value,
    message: refs.message.value,
  };

  localStorage.setItem(STOR_KEY, JSON.stringify(formData));
}

function handlerSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STOR_KEY);
}

function getSaveData() {
  const lsData = JSON.parse(localStorage.getItem(STOR_KEY));

  if (!lsData) {
    return;
  }
    
  refs.input.value = lsData.email ?? '';
  refs.message.value = lsData.message ?? '';
}
