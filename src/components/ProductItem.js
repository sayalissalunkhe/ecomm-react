import React, { useState, useEffect } from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {

    const [data, setData] = useState([]);

    const getData = () => {
        fetch('ProductData.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                // console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className='product-item-block'>
                {
                    data && data.length > 0 && data.map((item, index) =>
                        <div className='cards__item' key={index}>
                            <Link className='cards__item__link' to={props.path}>
                                <figure className='cards__item__pic-wrap' data-category={item.shape}>
                                    <img
                                        className='cards__item__img'
                                        alt='Diamond'
                                        src={require(`../assets/${item.product_image}`)}
                                    />
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>{item.shape} Shaped {item.carat} Carat {item.cut} Cut Lab Grown Diamond</h5>
                                    <span className='product-price'><b>Price : </b>{item.price}</span>

                                    <div className="product-variations">
                                        <div>
                                            <span className='variation-title'><b>Shape</b> : </span>
                                            <span className='variation-value'> {item.shape} </span>
                                        </div>
                                        <div>
                                            <span className='variation-title'><b>Carat</b> : </span>
                                            <span className='variation-value'> {item.carat} </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        // <div className='product-item cards__item' key={index}>
                        //     <div className='product-img'>
                        //         <img src={require(`../assets/${item.product_image}`)} alt="" />
                        //     </div>

                        //     <h4 className='product-title'>{item.shape} Shaped {item.carat} Carat {item.cut} Cut Lab Grown Diamond</h4>
                        //     <span className='product-price'><b>Price : </b>{item.price}</span>

                        //     <div className="product-variations">
                        //         <div>
                        //             <span className='variation-title'><b>Shape</b> : </span>
                        //             <span className='variation-value'>{item.shape}</span>
                        //         </div>
                        //         <div>
                        //             <span className='variation-title'><b>Carat</b> : </span>
                        //             <span className='variation-value'>{item.carat}</span>
                        //         </div>
                        //     </div>
                        // </div>
                    )
                }
            </div>
        </>
    )
}

export default ProductItem
