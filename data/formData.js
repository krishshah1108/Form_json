// When user bind any event like click, onChange, onblur all callback will
//have [e, obj, array, dataObjArray] arguments.
const formData = [
  {
    type: "hidden",
    key: "userId",
    label: "User Id",
    unique: true,
    getValue: function (obj) {
      // when user will use type hidden in formData object at that time we don't have to add any input element in form but we should notify or give error to user in console if user has not mentioned getValue function.
      // getValue function will only have current form data in form of object key value pair
      // first condition is to check if userId is present then use it because we only want to set userId for new records
      return obj.userId || Math.floor(100000 + Math.random() * 900000);
    },
  },
  {
    type: "hidden",
    key: "createdAt",
    label: "Created At",

    getValue: function (obj) {
      // first condition is to check if createdAt is present then use it as we only want to set createdAt while creating new records
      return obj.createdAt || new Date().getTime();
    },
  },
  {
    type: "hidden",
    key: "updatedAt",
    label: "updated At",

    getValue: function (obj) {
      // first condition is to check if updatedAt is present then use it as we only want to set createdAt while updating records
      return obj.updatedAt || new Date().getTime();
    },
  },
  {
    type: "text",
    label: "Name",
    key: "name",
    value: "",

    attr: {
      id: "txtName1",
      class: "form-control textInput",
      placeholder: "Enter name",
      name: "txtName",
      required: true,
    },
  },
  {
    type: "email",
    label: "Email",
    key: "email",
    value: "",
    attr: {
      id: "txtEmail",
      class: "form-control textInput",
      placeholder: "Enter email",
      name: "txtEmail",
      required: true,
    },
  },
  {
    type: "tel",
    label: "Phone",
    key: "phone",
    value: "",
    attr: {
      id: "txtPhone",
      class: "form-control textInput",
      placeholder: "Enter Phone",
      name: "txtPhone",
      required: true,
    },
  },
  {
    type: "textarea",
    label: "Address",
    key: "address",
    value: "",
    attr: {
      id: "txtAddress",
      class: "form-control textInput",
      placeholder: "Enter Address",
      rows: "5",
      name: "txtAddress",
      required: true, //Add validation for required field
    },
  },
  {
    type: "text",
    label: "Street Address",
    key: "street_address",
    value: "",
    attr: {
      id: "txtStreet",
      class: "form-control textInput",
      placeholder: "Enter Street Address",
      name: "txtStreet",
      required: true,
    },
  },
  {
    type: "text",
    label: "City",
    key: "city",
    value: "",
    attr: {
      id: "txtCity",
      class: "form-control textInput",
      placeholder: "Enter City",
      name: "txtCity",
      required: true,
    },
  },
  {
    type: "text",
    label: "State",
    key: "state",
    value: "",
    attr: {
      id: "txtState",
      class: "form-control textInput",
      placeholder: "Enter State",
      name: "txtState",
      required: true,
    },
  },
  {
    type: "number",
    label: "Pin Code",
    key: "pin_code",
    value: "",
    attr: {
      id: "txtPincode",
      class: "form-control textInput",
      placeholder: "Enter Pin Code",
      name: "txtPincode",
      required: true,
    },
  },
  {
    type: "select",
    label: "Country",
    key: "country",
    value: [],
    attr: {
      id: "txtCountry",
      name: "country",
      required: true,
      class: "form-control columns",
    },
    options: [
      {
        innerText: "Select Country",
        value: "",
      },
      {
        innerText: "India",
        value: "india",
      },
      {
        innerText: "United States",
        value: "united-states",
      },
      {
        innerText: "Sri Lanka",
        value: "sri-lanka",
      },
    ],
  },
  {
    type: "radio",
    label: "Gender",
    key: "gender",
    value: "",
    options: [
      {
        innerText: "Male",
        value: "male",
        name: "gender",
        attr: {
          id: "male",
          class: "form-check-input radioGender",
          required: true,
        },
      },
      {
        innerText: "Female",
        value: "female",
        name: "gender",
        attr: {
          id: "female",
          class: "form-check-input radioGender",
          required: true,
        },
      },
    ],
  },
  {
    type: "checkbox",
    label: "Hobbies",
    key: "hobbies",
    value: [],
    options: [
      {
        innerText: "Swimming",
        value: "swimming",
        name: "hobbies",
        attr: {
          id: "swimming",
          class: "form-check-input radioHobbies",
        },
      },
      {
        innerText: "Singing",
        value: "singing",
        name: "hobbies",
        attr: {
          id: "singing",
          class: "form-check-input radioHobbies",
        },
      },
      {
        innerText: "Writing",
        value: "writing",
        name: "hobbies",
        attr: {
          id: "writing",
          class: "form-check-input radioHobbies",
        },
      },
    ],
  },
  {
    type: "submit",
    label: "Submit",
    attr: {
      id: "btnSubmit",
      name: "btnSubmit",
      class: "btn btn-block btn-primary submit",
      value: "Submit",
    },
  },
  {
    type: "reset",
    label: "Reset",
    attr: {
      id: "btnReset",
      name: "btnReset",
      class: "btn btn-block btn-primary reset",
      value: "Reset",
    },
  },
];
export default formData;
