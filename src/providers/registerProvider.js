import React, { createContext, useContext, useReducer } from 'react'
import * as api from 'api'

export const GET_COUNTRIES = 'modal/GET_COUNTRIES'

const initialState = {
    countries: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case GET_COUNTRIES: {
            return {
                ...state,
                countries: action.payload
            }
        }
        default:
            return state
    }
}


export const RegisterContext = createContext(initialState)

export const useRegister = () => useContext(RegisterContext)

export const getCountries = async (dispatch) => {
    try {
        const response = await api.getCountries()

        dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        })
    } catch (err) {
        console.error(err)
    }
    
}

const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <RegisterContext.Provider value={[state, dispatch]}>
            {props.children}
        </RegisterContext.Provider>
    )
}

export default Provider