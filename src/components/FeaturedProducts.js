import { useProductContext } from '../context/productContext';
import Product from "./Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {

    const { isLoading, featureProducts } = useProductContext();
    // console.log(
    //     "file: FeaturedProducts.js ~ line 30 ~ featureProducts", featureProducts
    // );

    if (isLoading) {
        return <div> ......Loading </div>;
    }


    return (
        <>
            <section className="light-section">
                <div className="container">
                    <div className="section-subtitle">Check Now</div>
                    <div className="section-title">Our Feature Products</div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={10}
                        pagination={true}
                        modules={[Pagination]}
                        className="mySwiper mt-3rem"
                    >
                        {featureProducts.map((curElem, index) => {
                            return (index < 7) ? <SwiperSlide className="swiper-slide" key={index}>
                                <Product key={index} {...curElem} />
                            </SwiperSlide> : null
                        })}
                    </Swiper>
                </div >
            </section >
        </>
    )
}

export default FeaturedProducts
