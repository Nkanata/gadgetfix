import Axios from "axios";
import {CREATE_ORDER} from "../types/type";

export const createOrder = (order) => dispatch =>{
   dispatch({
       type: CREATE_ORDER,
       payload: order
   })
}