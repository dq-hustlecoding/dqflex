import axios from "axios";

//THIS IS THE BASE OF THE URL
const instance = axios.create({
    // baseURL : "https://api.themoviedb.org/3"
    baseURL : "https://hustlecoding.link/",
});

export default instance;