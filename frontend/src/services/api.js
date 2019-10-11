import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.1.103.183:3000',
})

export default api