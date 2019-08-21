document.addEventListener('DOMContentLoaded', function(event){
  let name = document.querySelector('.name');
  let surName = document.querySelector('.surname');
  let email = document.querySelector('.email');
  let phone = document.querySelector('.phone');
  let password = document.querySelector('.password');

  console.log(name);

  let Data = {
    newName: '',
    newSurName: '',
    newEmail: '',
    newPhone: '',
    newPassword: ''
  }

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      email.style.borderColor = "#b9ea43";
      return true;
    }
    email.style.borderColor = "#ea4343";
    return false
  }

  function ValidatePhone(phoneNum) {
    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phoneNum)) {
      phone.style.borderColor = "#b9ea43";
      return true;
    }
    phone.style.borderColor = "#ea4343";
    return false;
  }

  function ValidatePassword(passwordVal) {
    if (passwordVal.length >= 8) {
      password.style.borderColor = "#b9ea43";
      return true;
    }
    password.style.borderColor = "#ea4343";
    return false;
  }

  function eventHandleToData(commingEvent) {
    let data = { value: commingEvent.target.value, class: commingEvent.target.className }
    switch (data.class) {
      case 'name':
        Data.newName = data.value.toLowerCase();
        break;
      case 'surname':
        Data.newSurName = data.value.toLowerCase();
        break;
      case 'email':
        if (ValidateEmail(data.value.toLowerCase())) {
          Data.newEmail = data.value.toLowerCase();
        } else {
          Data.newEmail = '';
        }
        break;
      case 'phone':
        if (ValidatePhone(data.value)) {
          Data.newPhone = data.value;
        } else {
          Data.newPhone = '';
        }
        break;
      case 'password':
        if (ValidatePassword(data.value)) {
          Data.newPassword = data.value
        } else {
          Data.newPassword = '';
        }
        break;
      default:
        console.log('Error', data)
        break;
    }
    console.log(Data);
  }

  name.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-Z@]+/, '');
    eventHandleToData(event);
  });
  surName.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[^a-zA-Z@]+/, '');
    eventHandleToData(event)
  });
  email.addEventListener('input', (event) => {
    eventHandleToData(event)
  });
  phone.addEventListener('input', (event) => eventHandleToData(event));
  password.addEventListener('input', (event) => eventHandleToData(event));
});