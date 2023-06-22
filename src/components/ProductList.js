import React from "react";
import ProductView from "./ProductView";
import { useFilterContext } from "../context/FilterContext";

const ProductList = () => {
    const { filter_products } = useFilterContext();

    // const { isLoading, products } = useProductContext();

    // if (isLoading) {
    //     return <div> ......Loading </div>;
    // }
    // console.log('prod list',products);

    return  <ProductView products={filter_products} />;

};

export default ProductList; 