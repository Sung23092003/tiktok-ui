import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {path}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
