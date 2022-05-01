import {  establishmentsAPI, uploadAPI } from '../constants/api';
import axios from 'axios';

export const uploadImage = async (image, title, rating, price) => {
  const url = uploadAPI;


    const formData = new FormData()

    formData.append('files', image[0])

   

  axios.post(url, formData).then(response => {
    console.log(response);
    createPost(title, rating, price, response);
    
  }).catch(error => {
    console.log(error.response);
  });
}

export const createPost = (title, rating, price, response) => {
  const url = establishmentsAPI;
  
  const body = {
    data: {
      name: title, 
      rating: rating,
      price: price,
      image: response.data[0].id
    }
  }
console.log('body is', body);
  axios.post(url, body).then(response => {
    console.log(response);
    
  }).catch(error => {
    console.log(error.response);
  });
}
