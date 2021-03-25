import {SEND_ORDER} from "../types/type";

const initState = {
    order: [],
    recipient: []
}

export const sendOrderReducer = (state=initState, action)=> {
    switch (action.type) {
        case SEND_ORDER:


        default:
            return state
    }
}