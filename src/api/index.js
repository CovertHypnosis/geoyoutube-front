import client from './client'

export const getCountries = () => {
    return client.get('country')
}

export const login = (data) => {
    return client.post('login', data)
}

export const register = (data) => {
    return client.post('register', data)
}

export const logOut = (id) => {
    const token = localStorage.getItem('token') || null
    const authorization = token ? `Bearer ${token}` : ''
    return client.get(`left/${id}`, {
        headers: {
            'Authorization': authorization
        }
    })
}

export const isActiveToken = () => {
    const token = localStorage.getItem('token') || null

    return client.get('', {
        params: {
            token
        }
    })
}

export const getYoutube = (id) => {
    const token = localStorage.getItem('token') || null
    const authorization = token ? `Bearer ${token}` : ''
    return client.get(`/youtube`, {
        headers: {
            'Authorization': authorization
        }
    })
}