import {combineReducers } from "redux";

import {productReducer} from './productReducer'
import { selectedProductReducer } from "./productReducer";
import { addToCartProducts } from "./productReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product :selectedProductReducer,
    cart : addToCartProducts,
})

export default reducers;