import React, { createContext, useContext, useReducer } from 'react'
import * as api from 'api'

export const AUTH_SUCCESS = 'modal/AUTH_SUCCESS'

const initialState = {
    user: null
}

const saveToken = (token) => {
    localStorage.setItem('token', token)
}

const reducer = (state, action) => {
    switch(action.type) {
        case AUTH_SUCCESS: {
            const { token } = action.payload
            saveToken(token)
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state
    }
}


export const AuthContext = createContext(initialState)

export const useAuth = () => useContext(AuthContext)

export const registerAction = async (data, dispatch) => {
    try {
        const response = await api.register(data)
        dispatch({
            type: AUTH_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        console.error(err)
    }
}

export const loginAction = async (data, dispatch) => {
    try {
        const response = await api.login(data)
        dispatch({
            type: AUTH_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        console.error(err)
    }
}

const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default Provider