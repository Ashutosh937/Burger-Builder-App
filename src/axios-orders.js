import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f4e60.firebaseio.com/'
});

export default instance;
