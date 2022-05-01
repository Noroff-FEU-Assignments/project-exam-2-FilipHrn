import axios from 'axios';
import { registerAPI, loginAPI } from '../constants/api';
import { localSet } from './localStorage';

const registerUser = (user, emailAddress, pass) => {
  const url = registerAPI;
  
  const body = {
    username: user, 
    email: emailAddress, 
    password: pass
  }

  axios.post(url, body).then(response => {
    console.log(response.data.user);
    console.log(response.data.jwt);

    if(response.status === 200) {
      localSet(response.data);

      proceed();
    }else{
      console.log('Error with the response');
    }

  }).catch(error => {
    console.log(error.response);
  });
}

const loginUser = (user, pass) => {
  const url = loginAPI;

  const body = {
    identifier: user,
    password: pass
  }

  axios.post(url, body).then(response => {
    console.log(response.data.user);
    console.log(response.data.jwt);

    if(response.status === 200) {
      localSet(response.data);

      proceed();
    }else{
      console.log('Error with the response');
    }

  }).catch(error => {
    console.log(error.response);
  });
}

export const validate = () => {
  const check = document.getElementById('email');
  const user = document.getElementById('userName').value;
  const pass = document.getElementById('password').value;

  if(check) {
    const email = check.value; 

    registerUser(user, email, pass);
  }else {
    loginUser(user, pass);
  }
}

export const proceed = () => {
  const parent = document.querySelector('main');

  if(parent.hasChildNodes()) {
    while(parent.hasChildNodes()) {
      parent.removeChild(parent.firstChild);
    }
  }

  window.location.href = '/redirect';
}