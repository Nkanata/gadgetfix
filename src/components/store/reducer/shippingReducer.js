import {GET_SHIPPING} from "../types/type";


const initState = {
    shipping: [
        {
            destination: 'Meru',
            price: 500,
            courier: "Posta Kenya"
        },
        {
            destination: 'Nairobi',
            price: 300,
            courier: 'Posta Kenya'
        },
        {
            destination: 'Nanyuki',
            price: 450,
            courier: 'Posta Kenya'
        }
    ]
}

const shippingReducer = (state=initState, action) => {
    switch (action.type){
        case GET_SHIPPING:
            return {
                ...state,
                shipping: action.payload
            }
        default:
            return state

    }
}

export default shippingReducer