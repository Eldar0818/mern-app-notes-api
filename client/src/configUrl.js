import Axios from 'axios'

export const axiosInstance = Axios.create({ 
    baseUrl: "http://localhost:5000/api/"
 })