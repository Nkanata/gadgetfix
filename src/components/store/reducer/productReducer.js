import {GET_PRODUCTS, GET_REPAIR_PRODUCTS, GET_PRODUCTS_CATEGORIES} from "../types/type";

const initState = {
    products: [],
    categories: [],
    cart: [],
    product: []
}

const productReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, ...state.cart.push(action.product)}
        case GET_PRODUCTS_CATEGORIES:
            return {
                ...state, ...state.categories.push(action.payload)
            }
        case GET_PRODUCTS:
            return {
                ...state, products: action.payload
            }
        default:
            return state
    }
}

export default productReducer