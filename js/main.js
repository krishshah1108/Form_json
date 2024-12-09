import createForm from '../lib/form.js';
import formData from '../data/formData.js';

const form = createForm(formData);
const container = document.getElementById('container');
container.appendChild(form);
