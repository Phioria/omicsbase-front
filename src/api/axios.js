import axios from 'axios';
//const BASE_URL = 'http://127.0.0.1:5001';
//const BASE_URL = 'https://ec2-3-144-196-242.us-east-2.compute.amazonaws.com:5001';
const BASE_URL = 'https://api.flailab.com:5001';

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
});

export const newAbortSignal = (timeoutMs) => {
    const abortController = new AbortController();
    setTimeout(() => abortController.abort(), timeoutMs || 0);

    return abortController.signal;
};
