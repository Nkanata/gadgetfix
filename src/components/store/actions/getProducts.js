import axios from 'axios'

import {GET_PRODUCTS, GET_REPAIR_PRODUCTS, GET_PRODUCTS_CATEGORIES} from "../types/type";

export const get_product_categories = () => dispatch => {
    axios({
        url: 'http://localhost:8000/shopapi/categories/',
        method: 'get'
    }).then(res => {
        dispatch({
            type: GET_PRODUCTS_CATEGORIES,
            payload: res.data
        })
    }).catch(err => console.log(err))
    /*fetch('http://localhost:8000/shopapi/categories/',
        {
            method: 'GET',
            mode: "cors",
            credentials: "same-origin",
            cache: "no-cache",
            referrerPolicy: "no-referrer",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r =>{
        dispatch({
            type: GET_PRODUCTS_CATEGORIES,
            payload: r.data
        })
    }).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });**/
}

export const getProducts = () => (dispatch) =>{
    axios({
        method: 'get',
        url: 'http://localhost:8000/shopapi/product/'
    }).then(res =>{
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    }).catch(error =>
            console.log(('There has been a problem with your fetch operation:'), error)
        );

}