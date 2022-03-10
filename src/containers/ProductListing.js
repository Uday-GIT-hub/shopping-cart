import React,{useEffect} from 'react' ;
import {useSelector,useDispatch} from "react-redux";
import ProductComponent from './ProductComponent';
import {fetchProducts} from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) => state);
    console.log(products);
    const axios = require('axios');
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios.get("https://fakestoreapi.com/products")
    //     .catch((err) => {
    //         console.log("ERROR",err);
    //     });
    //     dispatch(setProducts(response.data));
    // };

    useEffect(() => {
        dispatch(fetchProducts());
    },[]);



    return (
        <div className="ui grid" style={{marginTop:"40px" ,marginLeft:"40px"}}>
            <ProductComponent />
        </div>
    )
};

export default ProductListing ;
