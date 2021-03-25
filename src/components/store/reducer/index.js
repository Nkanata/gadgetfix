import productReducer from "./productReducer";

import {combineReducers} from "redux";
import recipientReducer from "./recipientReducer";
import orderReducer from "./orderReucer";
import shippingReducer from "./shippingReducer";

const rootReducer = combineReducers({
    products: productReducer,
    recipient: recipientReducer,
    order: orderReducer,
    shipping: shippingReducer
})

export default rootReducer