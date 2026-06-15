import axios from "axios";

const api = axios.create({
  baseURL:
    "https://movie-backend-ld0f.onrender.com/"
});

export default api;



