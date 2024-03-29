import React,{useEffect} from 'react' ;
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import {fetchProduct,removeSelectedProduct} from '../redux/actions/productActions';


const ProductDetials = () => {
    const product = useSelector((state) => state.product);
    const {title,image,price,category,description} = product;
    const { productId } = useParams();
    const dispatch = useDispatch();


    // const fetchProductDetail = async () => {
        
    //     const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    //     .catch((err) => {
    //         console.log("ERROR",err);
    //     });
    //     dispatch(selectedProduct(response.data));
    // };

    useEffect(() =>{
        if(productId && productId !== "")
            dispatch(fetchProduct(productId));
        return () => {
            dispatch(removeSelectedProduct());
        }
    },[productId]);
 

    return (
       <div className="ui grid container" style={{marginTop:"50px"} }> 
        {Object.keys(product).length === 0 ? (
         <div>...Loading</div>
            ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp" style={{height:"80vh",alignItems :"center",display:"flex",justifyContent:"center"}}>
                <img className="ui fluid image" src={image} alt="item-image" style={{width:"60%",marginTop:"10px",marginLeft:"10px",marginRight:"10px"}}/>
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="#" className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <button className="ui button green"><i className="shop icon"></i> Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    )
}

export default ProductDetials ;
