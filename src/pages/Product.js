import ProductList from "../components/ProductList";
import FilterSection from "../components/FilterSection";
// import { useFilterContext } from "../context/FilterContext";

const Products = () => {

    // const { filter_products } = useFilterContext();
    // console.log('PRODUCT.JS dvsdv',filter_products);

    return (
        <>
            <div className='page-banner hero-container'>
                <div className='banner-content'>
                    <h1>All products</h1>
                </div>
            </div>

            <section className="light-section">
                <div className="container">
                    {/* <div className="section-title">Products</div> */}

                    <div className="row">
                        <div className="w-30">
                            <FilterSection />
                        </div>
                        <div className="w-70">
                            <ProductList />
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
};

export default Products;