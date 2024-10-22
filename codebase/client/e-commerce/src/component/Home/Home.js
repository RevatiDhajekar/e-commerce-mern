import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import './Home.css';
import Product from './product.js';
import MetaData from "../layout/MetaData.js";
import { getProducts } from "../../actions/productAction.js";
import { useSelector , useDispatch } from "react-redux";
import Loader from "../layout/Loader/loader.js";
import {useAlert} from "react-alert";
;
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading,products,productsCount,error} = useSelector((state) => state.products);

  useEffect(()=>{
    if(error){
      return alert.error(error);
    }
    dispatch(getProducts());
  },[alert, dispatch, error]);

  return (
   <>
   {loading ? <Loader/> :  <Fragment>
      <MetaData title={"E-Commerce"}/>
      <div className='banner'>
        <p>Welcome to ECommerce</p>
        <h1>FIND AMAZAING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        
       {products && products.map(product => 
         <Product key={product._id} product={product}/>
       )}
      

      </div>
    </Fragment>}
   </>
  );
};

export default Home;
