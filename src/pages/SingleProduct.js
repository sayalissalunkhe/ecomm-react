import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productContext";
import FormatPrice from "../helper/FormatPrice";
import { Button } from '../components/Button';
import './SingleProduct.css';

const API = "http://ec2-34-197-250-249.compute-1.amazonaws.com/api/get_products";

const SingleProduct = () => {
    const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();

    const { id } = useParams();

    // console.log(`${API}?product_id=${id}`);

    useEffect(() => {
        getSingleProduct(`${API}?product_id=${id}`);
    }, []);

    const { carat, product_image, price, cut, shape } = singleProduct;

    //  console.log(singleProduct);

    if (isSingleLoading) {
        return <div className="page_loading">Loading.....</div>;
    }


    return (
        <>
            <section>
                <div className='page-banner hero-container'>
                    <div className='banner-content'>
                        <h1>Product Page</h1>
                    </div>
                </div>
            </section>

            <section className="light-section single-product-section">
                <div className="container">
                    <div className="row">
                        <div className="w-50">
                            <figure className='cards__item__pic-wrap'>
                                <img
                                    className='cards__item__img'
                                    alt='Diamond'
                                    src={product_image}
                                />
                            </figure>
                        </div>
                        <div className="w-50">
                            <div className="product-data">
                                <div className="product-title">{shape} Shaped {carat} Carat {cut} Cut Lab Grown Diamond</div>
                                <div className="product-detail">
                                    <span> {carat} carat</span> | <span>{cut} cut</span> | <span>{shape} shape</span>
                                </div>

                                <div className="product-price">  <FormatPrice price={price + 250000} /></div>

                                <div className='hero-btn mr-4 mt-2'>
                                    <Button className="btns" buttonStyle="btn__primary" buttonSize="btn__mediun">
                                        Add To Cart
                                    </Button>
                                    <Button className="btns" buttonStyle="btn__primary" buttonSize="btn__mediun">
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-content mt-2">
                        <h2 className="text-center">Description</h2>
                        <p className="text-center my-1">This 0.55 carat Round shaped lab grown diamond has E color, SI1 clarity, Fair cut and is certified by IGI</p>

                        <div className="text-center">
                            <h3>SHIPPING</h3>
                            <p className="text-center my-1"> <b>Free FedEx 2Day® Shipping</b></p>
                            <p>We offer free FedEx 2Day® shipping for all items. Each item is either In-Stock or Made-to-Order. Check the product detail page once you've configured your jewelry to determine the shipping date. Once your order is completed and ready for shipment, your jewelry will ship via FedEx 2Day® for free. Expedited shipping options are available for all items at checkout. Please note: all orders require a signature for delivery.</p>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
};

export default SingleProduct;