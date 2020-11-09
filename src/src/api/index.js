import client from './client'

export const getCountries = () => {
    return client.get('countries')
}

export const login = (data) => {
    return client.post('login', data)
}

export const register = (data) => {
    return client.post('register', data)
}