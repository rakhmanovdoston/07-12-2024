import axios from "axios";

export const api =axios.create({
    baseURL: "https://posts-server-xwk3.onrender.com",
})