const createForm = (formData) => {
  const form = document.createElement('form');
  formData.forEach((field) => {
    if (
      field.type === 'text' ||
      field.type === 'email' ||
      field.type === 'tel' ||
      field.type === 'password' ||
      field.type === 'number' ||
      field.type === 'textarea'
    ) {
      const div = document.createElement('div');
      div.classList.add('form-group');
      if (field.label) {
        const label = document.createElement('label');
        label.innerHTML = field.label;
        div.appendChild(label);
      }
      const input = document.createElement('input');
      input.type = field.type;
      if (field.value) {
        input.value = field.value;
      }
      if (field.attr) {
        Object.keys(field.attr).forEach((key) => {
          input.setAttribute(key, field.attr[key]);
        });
      }
      div.appendChild(input);
      form.appendChild(div);
    }

    if (field.type === 'select') {
      const div = document.createElement('div');
      div.classList.add('form-group');
      if (field.label) {
        const label = document.createElement('label');
        label.innerHTML = field.label;
        div.appendChild(label);
      }
      const select = document.createElement('select');
      field.options.forEach((option) => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.innerHTML = option.innerText;
        select.appendChild(optionElement);
      });
      div.appendChild(select);
      form.appendChild(div);
    }
    if (field.type === 'checkbox' || field.type === 'radio') {
      const div = document.createElement('div');
      div.classList.add('form-group');
      if (field.label) {
        const label = document.createElement('label');
        label.innerHTML = field.label;
        div.appendChild(label);
      }
      field.options.forEach((option) => {
        const input = document.createElement('input');
        input.type = field.type;
        input.value = option.value;
        input.name = option.name;
        if (option.attr) {
          Object.keys(option.attr).forEach((key) => {
            input.setAttribute(key, option.attr[key]);
          });
        }
        div.appendChild(input);
        const label = document.createElement('label');
        label.innerHTML = option.innerText;
        div.appendChild(label);
      });
      form.appendChild(div);
    }

    if (field.type === 'submit' || field.type === 'reset') {
      const div = document.createElement('div');
      div.classList.add('form-group');
      const button = document.createElement('button');
      button.type = field.type;
      button.innerHTML = field.label;
      if (field.attr) {
        Object.keys(field.attr).forEach((key) => {
          button.setAttribute(key, field.attr[key]);
        });
      }
      div.appendChild(button);
      form.appendChild(div);
    }
  });
  return form;
};

export default createForm;
