import React from "react";
import Product from "../components/Products";

const ProductView = ({ products }) => {
    return (

        <div className='cards__container'>
            <div className='cards__items'>
                {products.map((curElem, index) => {
                    return <Product key={index} {...curElem} />;
                })}
            </div>
        </div>
    );
};

export default ProductView;