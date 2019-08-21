import React, { Component } from 'react';

import './form.css';

class Form extends Component {
  state = {
    newName: '',
    newSurName: '',
    newEmail: '',
    newPhone: '',
    newPassword: ''
  }
  validation = (commingEvent) => {
    let email = document.querySelector('.email');
    let phone = document.querySelector('.phone');
    let password = document.querySelector('.password');

    function ValidateEmail(mail) {
      if (/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/.test(mail)) {
        email.style.borderColor = "#b9ea43";
        return true;
      }
      email.style.borderColor = "#ea4343";
      return false
    }

    function ValidatePhone(phoneNum) {
      if(/^\+?[ \d]*$/.test(phoneNum)) {
        phone.style.borderColor = "#b9ea43";
        return true;
      }
      phone.style.borderColor = "#ea4343";
      return false;
    }

    function ValidatePassword(passwordVal) {
      if (/^.*(?=.{8,})(?=.*[@\$=!:.#%\?\/\\\*])(^[a-zA-Z0-9@\$=!:.#%\?\/\\\*]+$)/.test(passwordVal)) {
        password.style.borderColor = "#b9ea43";
        return true;
      }
      password.style.borderColor = "#ea4343";
      return false;
    }

    let data = { value: commingEvent.target.value, class: commingEvent.target.className };
    switch (data.class) {
      case 'name':
        commingEvent.target.value = commingEvent.target.value.replace(/[^a-zA-Z@]+/, '');
        this.setState({...this.state, newName: data.value.toLowerCase()})
        break;
      case 'surname':
        commingEvent.target.value = commingEvent.target.value.replace(/[^a-zA-Z@]+/, '');
        this.setState({...this.state, newSurName: data.value.toLowerCase()});
        break;
      case 'email':
        if (ValidateEmail(data.value.toLowerCase())) {
          this.setState({...this.state, newEmail: data.value.toLowerCase()});
        } else {
          this.setState({...this.state, newEmail: ''});
        }
        break;
      case 'phone':
        if (ValidatePhone(data.value)) {
          this.setState({...this.state, newPhone: data.value.toLowerCase()});
        } else {
          this.setState({...this.state, newPhone: ''});
        }
        break;
      case 'password':
        if (ValidatePassword(data.value)) {
          this.setState({...this.state, newPassword: data.value.toLowerCase()});
        } else {
          this.setState({...this.state, newPassword: ''});
        }
        break;
      default:
        console.log('Error', data)
        break;
    }
  }
  render() {
    return (
      <div>
        <form className="form">
            <input onInput={(event) => this.validation(event)} placeholder="Your name" className="name" type="text" />
            <input onInput={(event) => this.validation(event)}placeholder="Your surname" className="surname" type="text" />
            <input onInput={(event) => this.validation(event)} placeholder="Your email" className="email" type="text" />
            <input onInput={(event) => this.validation(event)} placeholder="Your phone" className="phone" type="text" />
            <input onInput={(event) => this.validation(event)} placeholder="Password" className="password" type="password" />
            {/* <button className="form-btn"></button> */}
        </form>
      </div>
    );
  }
}

export default Form;