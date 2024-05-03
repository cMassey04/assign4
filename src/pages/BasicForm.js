import React from 'react';
import ReactDOM from 'react-dom/client';

class BasicForm extends React.Component {
  static displayName = "BasicInputForm";
  state = {
    users: [],
    errors: {
      name: '',
      email: '',
      phone: ''
    }
  };

  nameRef = React.createRef();
  emailRef = React.createRef();
  phoneRef = React.createRef();

  validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  validatePhone = (phone) => {
    const re = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    return re.test(String(phone));
  };

  validateField = (field, value) => {
    let errorMsg = '';

    switch (field) {
      case 'name':
        if (value.trim() === '') {
          errorMsg = 'Name Template cannot be empty.';
        }
        break;
      case 'email':
        if (!this.validateEmail(value)) {
          errorMsg = 'Invalid email format, please re-enter email correctly.';
        }
        break;
      case 'phone':
        if (!this.validatePhone(value)) {
          errorMsg = 'Invalid phone number, use XXX-XXX-XXXX format.';
        }
        break;
      default:
        break;
    }

    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        [field]: errorMsg
      }
    }));

    return errorMsg === '';
  };

  handleChange = (event, fieldType) => {
    const { name, value } = event.target;
    this.validateField(fieldType, value);
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
      phone: this.phoneRef.current.value
    };

    // Validate all fields on form submission
    const isNameValid = this.validateField('name', newUser.name);
    const isEmailValid = this.validateField('email', newUser.email);
    const isPhoneValid = this.validateField('phone', newUser.phone);

    if (isNameValid && isEmailValid && isPhoneValid) {
      this.setState(prevState => ({
        users: [...prevState.users, newUser],
        errors: { name: '', email: '', phone: '' }  // Reset errors
      }));

      this.nameRef.current.value = '';
      this.emailRef.current.value = '';
      this.phoneRef.current.value = '';
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h1>Sign Up Sheet</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            ref={this.nameRef}
            onChange={(e) => this.handleChange(e, 'name')}
            className={errors.name ? 'error' : ''}
          />
          <div className='error'>{errors.name}</div>

          <input
            placeholder='Email'
            type='email'
            ref={this.emailRef}
            onChange={(e) => this.handleChange(e, 'email')}
            className={errors.email ? 'error' : ''}
          />
          <div className='error'>{errors.email}</div>

          <input
            placeholder='Phone Number'
            type='tel'
            ref={this.phoneRef}
            onChange={(e) => this.handleChange(e, 'phone')}
            className={errors.phone ? 'error' : ''}
          />
          <div className='error'>{errors.phone}</div>

          <input type='submit' value='Submit' />
        </form>

        <div>
          <h3>Names/Emails/Numbers</h3>
          <ul>
            {this.state.users.map((user, index) => (
              <li key={index}>
                {user.name} / {user.email} / {user.phone}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BasicForm;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BasicForm />);
