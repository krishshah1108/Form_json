const createForm = (formData) => {
  let form = document.createElement('form');

  formData.forEach((field) => {
    if (
      field.type === 'text' ||
      field.type === 'email' ||
      field.type === 'tel' ||
      field.type === 'password' ||
      field.type === 'number'
    ) {
      const div = document.createElement('div');
      div.classList.add('form-group');
      const label = document.createElement('label');
      label.innerHTML = field.label;
      div.appendChild(label);
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

    if (field.type === 'textarea') {
      const div = document.createElement('div');
      div.classList.add('form-group');
      const label = document.createElement('label');
      label.innerHTML = field.label;
      div.appendChild(label);
      const textarea = document.createElement('textarea');
      if (field.value) {
        textarea.value = field.value;
      }
      if (field.attr) {
        Object.keys(field.attr).forEach((key) => {
          textarea.setAttribute(key, field.attr[key]);
        });
      }
      div.appendChild(textarea);
      form.appendChild(div);
    }

    if (field.type === 'select') {
      const div = document.createElement('div');
      div.classList.add('form-group');
      const label = document.createElement('label');
      label.innerHTML = field.label;
      div.appendChild(label);
      const select = document.createElement('select');
      if (field.attr) {
        Object.keys(field.attr).forEach((key) => {
          select.setAttribute(key, field.attr[key]);
        });
      }
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
      const label = document.createElement('label');
      label.innerHTML = field.label;
      div.appendChild(label);
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

        form.appendChild(div);
      });
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

// Submit event
const getFormData = (form) => {
  const data = {};
  const elements = form.elements;

  for (let element of elements) {
    if (element.name) {
      if (element.type === 'checkbox') {
        if (!data[element.name]) {
          data[element.name] = [];
        }
        if (element.checked) {
          data[element.name].push(element.value);
        }
      } else if (element.type === 'radio') {
        if (element.checked) {
          data[element.name] = element.value;
        }
      } else {
        data[element.name] = element.value;
      }
    }
  }
  return data;
};

// Reset event
const resetFormData = (form) => {
  const elements = form.elements;

  for (let element of elements) {
    if (element.type === 'checkbox' || element.type === 'radio') {
      element.checked = false;
    } else if (element.tagName === 'SELECT') {
      element.selectedIndex = 0;
    } else {
      element.value = '';
    }
  }
};

export { createForm, getFormData, resetFormData };
