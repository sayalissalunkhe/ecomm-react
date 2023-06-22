const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
            };

        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };

        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];
            // const { filter_products } = state;
            // let tempFilterProduct = [...filter_products];

            const { shape } = state.filters;


            if (shape) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.shape === shape;
                });
            }
            return {
                ...state,
                filter_products: tempFilterProduct,
            };

        default:
            return state;
    }

};

export default filterReducer;