import axios from "axios";

export default defineNuxtPlugin(() => {
    axios.defaults.baseURL = "localhost:3000"
})