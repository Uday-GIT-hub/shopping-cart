import { ActionTypes } from "../constants/action-types";

const initialState = {
    products : []
};

const initialCart = {
    products : []
}

export const addToCartProducts = ( state = initialCart ,{type,payload}) => {
    switch(type)
    {
        case ActionTypes.ADD_TO_CART :
            return { products : [...state.products,payload] };
        default :
            return state;
    }
}

export const productReducer = (state = initialState , {type,payload}) => {
    switch(type)
    {
        case ActionTypes.SET_PRODUCTS :
            return {...state,products : payload};
        case ActionTypes.FETCH_PRODUCTS :
            return {...state,products : payload};
        default :
            return state;
    }
};

export const selectedProductReducer = (state={},{type,payload}) =>{
    switch(type)
    {
        case ActionTypes.SELECTED_PRODUCT :
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT :
            return {};
        default :
            return state;
    }
};

