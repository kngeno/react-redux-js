export default {
  name: 'asyncFormModel',
  // global validate function
  validateAsync: function(form, dispatch) {
    setTimeout( () => {
      console.log(this);
      console.log(form);
      if (form.email.value) {
        errors.email = 'Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)) {
        errors.email = 'Invalid email address'
      }
    }, 3000);
  },
  data: {
    'email': {
      validate: {
        required: true,
        pattern: 'email',
      },
    },
  },
};
