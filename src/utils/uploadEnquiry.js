import { enquiryAPI, contactAPI } from '../constants/api';
import axios from 'axios';

const uploadEnquiry = (name, subject, message, lastName = false, email = false) => {
  let body = {
    data: {
      name: name,
      subject: subject,
      message: message
    }
  }
  
  let url = enquiryAPI;

  if(lastName && email) {
    body.data.firstName = name;
    body.data.lastName = lastName;
    body.data.email = email;

    url = contactAPI;
  }

  console.log(body);

  axios.post(url, body).then( response => {
    console.log(response);
  }).catch( error => {
    console.log(error);
  }); 
}

export default uploadEnquiry