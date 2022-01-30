import axios from "axios";

//THIS IS THE BASE OF THE URL
const instance = axios.create({
    // baseURL : "https://api.themoviedb.org/3"
    baseURL : "http://api.dqflex.kro.kr:8080",
});

export default instance;