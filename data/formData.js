// When user bind any event like click, onChange, onblur all callback will
//have [e, obj, array, dataObjArray] arguments.
const formData = [
  {
    type: 'hidden',
    key: 'userId',
    label: 'User Id',
    unique: true,
    getValue: function (obj) {
      // when user will use type hidden in formData object at that time we don't have to add any input element in form but we should notify or give error to user in console if user has not mentioned getValue function.
      // getValue function will only have current form data in form of object key value pair
      // first condition is to check if userId is present then use it because we only want to set userId for new records
      return obj.userId || Math.floor(100000 + Math.random() * 900000);
    },
  },
  {
    type: 'hidden',
    key: 'createdAt',
    label: 'Created At',
    getValue: function (obj) {
      // first condition is to check if createdAt is present then use it as we only want to set createdAt while creating new records
      return obj.createdAt || new Date().getTime();
    },
  },
  {
    type: 'text',
    label: 'Name',
    key: 'name',
    value: '',
    // attr is option, User can add new html element properties to it or user can remove all properties like empty object  attr: {}
    attr: {
      id: 'txtName1',
      class: 'form-control textInput',
      placeholder: 'Enter name',
      name: 'txtName',
      required: true,
      // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'email',
    label: 'Email',
    key: 'email',
    value: '',
    attr: {
      id: 'txtEmail',
      class: 'form-control textInput',
      placeholder: 'Enter email',
      name: 'txtEmail',
      required: true,
      // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'tel',
    label: 'Phone',
    key: 'phone',
    value: '',
    attr: {
      id: 'txtPhone',
      class: 'form-control textInput',
      placeholder: 'Enter Phone',
      name: 'txtPhone',
      required: true,
    },
  },
  {
    type: 'textarea',
    label: 'Address',
    key: 'address',
    value: '',
    attr: {
      id: 'txtAddress',
      class: 'form-control textInput',
      placeholder: 'Enter Address',
      rows: '5',
      name: 'txtAddress',
      required: true, //Add validation for required field
      // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'text',
    label: 'Street Address',
    key: 'street_address',
    value: '',
    attr: {
      id: 'txtStreet',
      class: 'form-control textInput',
      placeholder: 'Enter Street Address',
      name: 'txtStreet',
      required: true,
      // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'text',
    label: 'City',
    key: 'city',
    value: '',
    attr: {
      id: 'txtCity',
      class: 'form-control textInput',
      placeholder: 'Enter City',
      name: 'txtCity',
      required: true,
      // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'text',
    label: 'State',
    key: 'state',
    value: '',
    attr: {
      id: 'txtState',
      class: 'form-control textInput',
      placeholder: 'Enter State',
      name: 'txtState',
      required: true,
      // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'number',
    label: 'Pin Code',
    key: 'pin_code',
    value: '',
    attr: {
      id: 'txtPincode',
      class: 'form-control textInput',
      placeholder: 'Enter Pin Code',
      name: 'txtPincode',
      required: true,
      // e, obj, array, dataObjArray you will get in function argument
    },
  },
  {
    type: 'select',
    label: 'Country',
    key: 'country',
    value: [],
    attr: {
      id: 'txtCountry',
      name: 'country',
      required: true,
      class: 'form-control columns',
      // e, obj, array, dataObjArray you will get in function argument
    },
    options: [
      {
        innerText: 'Select Country',
        value: '',
      },
      {
        innerText: 'India',
        value: 'india',
      },
      {
        innerText: 'United States',
        value: 'united-states',
      },
      {
        innerText: 'Sri Lanka',
        value: 'sri-lanka',
      },
    ],
  },
  {
    type: 'radio',
    label: 'Gender',
    key: 'gender',
    value: '',
    options: [
      {
        innerText: 'Male',
        value: 'male',
        name: 'gender',
        attr: {
          id: 'male',
          class: 'form-check-input radioGender',
          required: true,
          // e, obj, array, dataObjArray you will get in function argument
        },
      },
      {
        innerText: 'Female',
        value: 'female',
        name: 'gender',
        attr: {
          id: 'female',
          class: 'form-check-input radioGender',
          required: true,
          // e, obj, array, dataObjArray you will get in function argument
        },
      },
    ],
  },
  {
    type: 'checkbox',
    label: 'Hobbies',
    key: 'hobbies',
    value: [],
    options: [
      {
        innerText: 'Swimming',
        value: 'swimming',
        name: 'hobbies',
        attr: {
          id: 'swimming',
          class: 'form-check-input radioHobbies',
          // e, obj, array, dataObjArray you will get in function argument
        },
      },
      {
        innerText: 'Singing',
        value: 'singing',
        name: 'hobbies',
        attr: {
          id: 'singing',
          class: 'form-check-input radioHobbies',
          // e, obj, array, dataObjArray you will get in function argument
        },
      },
      {
        innerText: 'Writing',
        value: 'writing',
        name: 'hobbies',
        attr: {
          id: 'writing',
          class: 'form-check-input radioHobbies',
          // e, obj, array, dataObjArray you will get in function argument
        },
      },
    ],
  },
  {
    type: 'submit',
    label: 'Submit',
    attr: {
      id: 'btnSubmit',
      name: 'btnSubmit',
      class: 'btn btn-block btn-primary submit',
      value: 'Submit',
      onclick: function () {},
    },
  },
  {
    type: 'reset',
    label: 'Reset',
    attr: {
      id: 'btnReset',
      name: 'btnReset',
      class: 'btn btn-block btn-primary reset',
      value: 'Reset',
      onclick: function () {}, // e, obj, array, dataObjArray you will get in function argument
    },
  },
];
export default formData;
