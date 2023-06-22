
import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helper/FormatPrice";


const Product = (curElem) => {
    const { product_id, carat, product_image, price, cut, shape } = curElem;
    return (

        <>
            <div className='cards__item'>
                <NavLink to={`/singleproduct/${product_id}`} className="cards__item__link">
                    <figure className='cards__item__pic-wrap' data-category={shape}>
                        <img
                            className='cards__item__img'
                            alt='Diamond'
                            src={product_image}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{shape} Shaped {carat} Carat {cut} Cut Lab Grown Diamond</h5>
                        <span className='product-price'><b>Price : </b>{<FormatPrice price={price} />}</span>

                        <div className="product-variations">
                            <div>
                                <span className='variation-title'><b>Shape</b> : </span>
                                <span className='variation-value'> {shape} </span>
                            </div>
                            <div>
                                <span className='variation-title'><b>Carat</b> : </span>
                                <span className='variation-value'> {carat} </span>
                            </div>
                        </div> 
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default Product;