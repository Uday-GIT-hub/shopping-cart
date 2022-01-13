import {ActionTypes } from '../constants/action-types'

export const fetchProducts = () => async (dispatch) => {
        const axios = require('axios');
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload : response.data})
    }

export const fetchProduct = (id) => async (dispatch) => {
        const axios = require('axios');
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({type:ActionTypes.SELECTED_PRODUCT,payload : response.data})
    }

export const setProducts = (products) => {
    return {
        type : ActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const selectedProduct = (product) => {
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload : product,
    }
}
export const removeSelectedProduct = () => {
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    }
}

export const AddToCartProducts = (product) => {
    return {
        type : ActionTypes.ADD_TO_CART,
        payload : product,
    }
}