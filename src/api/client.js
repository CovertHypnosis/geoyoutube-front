import axios from 'axios'

const instance = () => {
    const token = localStorage.getItem('token') || null
    const authorization = token ? `Bearer ${token}` : ''
    return axios.create({
      baseURL: 'https://geoyoutube.herokuapp.com/'
    })
}

export default instance()