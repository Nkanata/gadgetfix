import {CREATE_ORDER} from "../types/type";

const initState ={
    order: []
}

const orderReducer = (state=initState, action) =>{
    switch (action.type) {
        case CREATE_ORDER:
            console.log("order persisted", action.payload)
            return {
                ...state,
                order: action.payload
            }

        default:
            return state
    }
}
export default orderReducer