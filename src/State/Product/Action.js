import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_FAILRUE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";


export const findProducts = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCTS_REQUEST });

    const {
        category,
        sort,
        pageNumber,
        pageSize,
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        stock
    } = reqData;

    // Debug log the input data
    console.log('Input request data:', reqData);

    try {
        const params = new URLSearchParams();

        // Function to sanitize and trim input values
        const sanitizeInput = (input) => input ? input.trim().replace(/[{}]/g, '') : '';

        // Add required parameters
        if (category) {
            params.append('category', sanitizeInput(category));
        }
        if (sort) {
            params.append('sort', sanitizeInput(sort));
        }
        params.append('pageNumber', pageNumber.toString());
        params.append('pageSize', pageSize.toString());

        // Add optional parameters if they exist
        if (colors && colors.length > 0) {
            params.append('color', sanitizeInput(colors.join(',')));
        }
        if (sizes && sizes.length > 0) {
            params.append('size', sanitizeInput(sizes.join(',')));
        }
        if (minPrice !== null && minPrice !== undefined && minPrice !== 0) {
            params.append('minPrice', minPrice.toString());
        }
        if (maxPrice !== null && maxPrice !== undefined && maxPrice !== 0) {
            params.append('maxPrice', maxPrice.toString());
        }
        if (minDiscount !== null && minDiscount !== undefined && minDiscount !== 0) {
            params.append('minDiscount', minDiscount.toString());
        }
        if (stock) {
            params.append('stock', sanitizeInput(stock));
        }

        // Debug log the constructed URL
        console.log(`Request is: ${api}/api/products?${params.toString()}`);
        
        const { data } = await api.get(`/api/products?${params.toString()}`);
        
        console.log("Data of console: " + JSON.stringify(data));

        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({ type: FIND_PRODUCTS_FAILRUE, payload: error });
    }
};





export const findProductsById=(reqData)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})

    const {productId}=reqData;

    try {
        const {data}=await api.get(`/api/products/id/${productId}`)


            dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error})
        
    }
}