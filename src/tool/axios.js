import axios from "axios";

// import dotenv from 'dotenv';
// dotenv.config({path: '/server/.env'});
// const dotenv = require('dotenv-webpack');

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:8000/',
	headers: {
		accept: "*/*",
		Authorization: ((localStorage.getItem("user__token"))? localStorage.getItem("user__token"): sessionStorage.getItem("user__token")) || '',
	},
});

export default axiosInstance;