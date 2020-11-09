import axios from 'axios'

const instance = () => {
    const token = localStorage.getItem('token') || null
    const authorization = token ? `Bearer ${token}` : ''
    return axios.create({
      baseURL: 'http://localhost:8080/',
      headers: {
        'Authorization': authorization
      }
    })
}

export default instance()