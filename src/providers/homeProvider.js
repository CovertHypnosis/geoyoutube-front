import React, { createContext, useContext, useReducer } from 'react'
import * as api from 'api'

export const GET_YOUTUBE = 'modal/GET_YOUTUBE'

const initialState = {
        youtube: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case GET_YOUTUBE: {
            return {
                ...state,
                youtube: action.payload
            }
        }
        default:
            return state
    }
}


export const HomeContext = createContext(initialState)

export const useHome = () => useContext(HomeContext)

export const getYoutube = async (id, dispatch) => {
    try {
        const response = await api.getYoutube(id)

        dispatch({
            type: GET_YOUTUBE,
            payload: response.data
        })
    } catch (err) {
        console.error(err)
    }
    
}

const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <HomeContext.Provider value={[state, dispatch]}>
            {props.children}
        </HomeContext.Provider>
    )
}

export default Provider