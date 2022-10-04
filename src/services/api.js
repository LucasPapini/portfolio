import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://my-portfolio-apirest.local/wp-json/api/'
});