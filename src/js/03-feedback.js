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
  
  console.log(formData);

  if (refs.input.value.length !== 0 && refs.message.value.length !== 0) {
  e.currentTarget.reset();
  localStorage.removeItem(STOR_KEY);
  } else {
    alert('Ooo, Усі поля повинні бути заповнені');
  }
}

function getSaveData() {
  const lsData = JSON.parse(localStorage.getItem(STOR_KEY));

  if (!lsData) {
    return;
  }
    
  refs.input.value = lsData.email ?? '';
  refs.message.value = lsData.message ?? '';
}
