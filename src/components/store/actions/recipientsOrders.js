import {CREATE_RECIPIENT} from "../types/type";


export const CreateRecipient = (recipient) => dispatch =>{
    dispatch({
        type: CREATE_RECIPIENT,
        payload: recipient
    })
}