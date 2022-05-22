import Axios from 'axios'

export const axiosInstance = Axios.create({ 
    baseUrl: "https://eldar-notes.herokuapp.com"
 })