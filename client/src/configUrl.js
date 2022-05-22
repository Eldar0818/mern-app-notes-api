import Axios from 'axios'

export const axiosInstance = Axios.create({ 
    baseUrl: "https://edr-notes-app.herokuapp.com"
 })