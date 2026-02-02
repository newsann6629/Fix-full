import axios from "axios";

export default defineNuxtPlugin(() => {
    axios.defaults.baseURL = "http://localhost:3000/"
})