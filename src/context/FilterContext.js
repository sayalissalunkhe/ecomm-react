import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    // grid_view: true,
    // sorting_value: "lowest",
    filters: {
        shape: "all",
    },
};

const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    // console.log('Fcontext.JS',products);

    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(initialState);

    // to set the grid view
    // const setGridView = () => {
    //     return dispatch({ type: "SET_GRID_VIEW" });
    // };

    // update Value
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    };

    // to sort the product
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" });
    }, [products, state.filters]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
        //  console.log('dispatch.JS',products);
    }, [products]);

    return (
        <FilterContext.Provider
            value={{ ...state, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
        // <FilterContext.Provider
        //     value={{ ...state, setGridView, setListView, sorting }}>
        //     {children}
        // </FilterContext.Provider>
    );
};

const useFilterContext = () => {
    return useContext(FilterContext);
};

export { FilterContext, FilterContextProvider, useFilterContext };