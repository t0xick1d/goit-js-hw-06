// const refs = {
//   emailRefs: document.querySelector('[name=email]'),
//   passwordRefs: document.querySelector('[name=password]'),
//   btnSubmitRefs: document.querySelector('[type=submit]'),
// };

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;
  email !== '' && password !== ''
    ? console.log({ email, password })
    : alert('Всі поля мають бути заповнені!');
  form.reset();
}
// Треба обнулить формою методом ресет
