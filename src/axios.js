import axios from "axios";
import { baseUrl } from "./Constants/constants";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
