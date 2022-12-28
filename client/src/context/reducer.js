import { DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return { ...state, showAlert: true, alterType: 'danger', alterText: 'Please provide all values!' }
    }
    throw new Error(`no such action : ${action.type}`)
}

export default reducer;