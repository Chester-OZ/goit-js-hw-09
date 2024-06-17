let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const handleInput = event => {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
};

const loadFormData = () => {
  const storedData = localStorage.getItem('feedback-form-state');

  if (storedData) {
    formData = JSON.parse(storedData);
    Object.keys(formData).forEach(key => {
      form.elements[key].value = formData[key];
    });
  }
};

const handleSubmit = event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  form.reset();
};

form.addEventListener('input', handleInput);
document.addEventListener('DOMContentLoaded', loadFormData);
form.addEventListener('submit', handleSubmit);
