import createForm from "../lib/form.js";
import formData from "../data/formData.js";

const { form, submitData, resetData } = createForm(formData);
const container = document.getElementById("container");
container.appendChild(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = submitData();
  console.log(data);
  resetData();
});

form.addEventListener("reset", (e) => {
  e.preventDefault();
  resetData();
});
