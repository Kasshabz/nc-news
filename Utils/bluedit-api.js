import axios from 'axios'

const articlesApi = axios.create({
    baseURL: 'https://bluedit.onrender.com/api'
})



export default articlesApi