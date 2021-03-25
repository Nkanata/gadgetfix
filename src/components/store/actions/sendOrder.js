import {SEND_ORDER} from "../types/type";
import Axios from "axios";

export const sendOrder = (order, recipient) => dispatch => {
    console.log("order and recipient", order, recipient)
    const {first_name, surname, last_name, phone, email, address, zipcode, city, county} = recipient
    Axios.post('http://localhost:8000/createorder',
        {
            first_name,
            last_name,
            surname,
            email,
            phone,
            address,
            zipcode,
            city,
            county,
            order: {order: order},

        }).then(res => {
        console.log('response', res)
    }).catch(err => {
        console.log("err", err)
    })
    dispatch({
        type: SEND_ORDER,
        order: order,
        recipient: recipient
    })
}