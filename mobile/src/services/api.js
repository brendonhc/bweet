import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://localhost:3000',  iOS
    baseURL: 'http://10.0.2.2:3000', // IP Emulador Android Studio
})

export default api
