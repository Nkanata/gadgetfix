import {CREATE_RECIPIENT} from "../types/type";

const initState = {
    recipient: [],

}

const recipientReducer = (state=initState, action) => {
    switch (action.type) {
        case CREATE_RECIPIENT:
            console.log("recipient persisted", action.payload)
            return {
                ...state,
                recipient: action.payload
            };

        default:
            return state
    }
}

export default recipientReducer