import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"
import { API_BASE_URL, api } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./Reducer";
import axios from "axios";



export const createOrder=(reqData)=>async(dispatch)=>{
    try {
        dispatch({type:CREATE_ORDER_REQUEST});
        const {data}=await api.post(`/api/orders`,
            reqData.address,
        );
        if(data.id){
            reqData.navigate({search:`step=3&order_id=${data.id}`});
        }
        dispatch({type:CREATE_ORDER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE,payload:error})
        
    }
}

export const getOrderById=(orderId)=>async(dispatch)=>{
    dispatch({type:GET_ORDER_BY_ID_REQUEST});

    try {
        const {data}=await api.get(`api/orders/${orderId}`)

        dispatch({type:GET_ORDER_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        console.log("error in getting order "+error);
        dispatch({type:GET_ORDER_BY_ID_FAILURE,payload:error})        
    }
}