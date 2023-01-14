import React, { useReducer, useContext } from "react";
import reducer from './reducer';
import {
    DISPLAY_ALERT, CLEAR_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS
} from "./actions";



const initialState = {
    isLoading: false,
    showAlert: false,
    alterText: '',
    alterType: '',
    user: null,
    token: null,
    userLocation: '',
}

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        console.log("test")
        dispatch({ type: DISPLAY_ALERT })
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 3000)
    }

    const registerUser = async (currentUser) => {
        console.log("in registerUser")
        console.log(currentUser)
    }

    return (<AppContext.Provider value={{ ...state, displayAlert, registerUser }}>{children}</AppContext.Provider>
    )
}



const useAppContext = () => {
    return useContext(AppContext)
}
export {
    AppProvider, initialState, useAppContext
}