import React, { useReducer, useContext } from "react";
import reducer from './reducer';
import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";



const initialState = {
    isLoading: false,
    showAlert: false,
    alterText: '',
    alterType: '',
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
    return (<AppContext.Provider value={{ ...state, displayAlert }}>{children}</AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}
export { AppProvider, initialState, useAppContext }