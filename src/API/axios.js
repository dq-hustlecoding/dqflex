import axios from "axios";
import { baseUrl } from "./constants";

//THIS IS THE BASE OF THE URL
const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
