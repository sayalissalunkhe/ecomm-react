import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from "axios";
import ProductReducer from "../reducer/productReducer";

const AppContext = createContext();

const API = 'http://ec2-34-197-250-249.compute-1.amazonaws.com/api/get_products';
// const API = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    singleProduct: {},
    isSingleLoading: false,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: 'SET_SINGLE_LOADING' });

        try {
            const res = await axios.get(url);
            const products = await res.data.products;
            // console.log(res);
            dispatch({ type: "SET_API_DATA", payload: products });
            
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    };
    useEffect(() => {
        getProducts(API);
    }, []);

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data.products[0];
            // console.log(singleProduct);
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" }); 
        }
    };

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
    );
};

// custom hook
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };