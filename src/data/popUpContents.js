const popUpContents = {
  signUp: {
    content: 'forms',
    title: 'Sign Up',
    fields: [
      {
        type: 'text',
        label: 'User name',
      },
      {
        type: 'email',
        label: 'E-mail',
      },
      {
        type: 'password',
        label: 'Password',
      },
    ],
    button: 'Submit',
  },
  login: {
    content: 'forms',
    title: 'Login',
    fields: [
      {
        type: 'email',
        label: 'E-mail',
      },
      {
        type: 'password',
        label: 'Password',
      },
    ],
    button: 'Login',
  },
};

export default popUpContents;
