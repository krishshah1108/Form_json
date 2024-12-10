import { createForm, getFormData, resetFormData } from '../lib/form.js';
import formData from '../data/formData.js';
import { saveData } from '../lib/storage.js';

const form = createForm(formData);
const container = document.getElementById('container');
container.appendChild(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = getFormData(form);
  console.log(data);
  saveData(data);
  resetFormData(form);
});

form.addEventListener('reset', (e) => {
  e.preventDefault();
  resetFormData(form);
});
