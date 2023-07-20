import axios from "axios";

export const baseURL = 'https://swiggy-backend.vercel.app';

export const dbObject = axios.create({
    withCredentials: true,
    baseURL
});