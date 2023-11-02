import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  input: document.querySelector('.js-feedback-form input'),
  message: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(handlerInput, 500));
refs.form.addEventListener('submit', handlerSubmit)


const lsData = localStorage.getItem('feedback-form-state');
const saveData = JSON.parse(lsData);
refs.input.value = saveData.email ?? '';
refs.message.value = saveData.message ?? '';





function handlerInput(e) {
  const { email, message } = e.currentTarget.elements;

  const data = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}



function handlerSubmit(e) {
    // e.preventDefault();

      const { email, message } = e.currentTarget.elements;

      const data = {
        email: email.value,
        message: message.value,
      };
    
    
    
        
}

