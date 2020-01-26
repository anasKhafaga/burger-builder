import axios from 'axios';

const instance = axios.create({
  baseURL: 'My API'
});

export default instance;