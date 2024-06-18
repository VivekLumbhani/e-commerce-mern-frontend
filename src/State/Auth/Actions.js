import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const token=localStorage.getItem("jwt")
const registerRequest=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user});
const registerFailure=(error)=>({type:REGISTER_FAILURE,payload:error});


const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error});


const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure=(error)=>({type:GET_USER_FAILURE,payload:error});


export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
      const user = response.data;
  
      if (user.token) {
        localStorage.setItem('jwt', user.token);
      }
      console.log("user "+JSON.stringify(user));
  
      dispatch(registerSuccess(user.token));
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
  


export const login=(userData)=>async(dispatch)=>{
    dispatch(loginRequest())
    try {
        const response=await axios.post(`${API_BASE_URL}/auth/login`,userData);

        const user=response.data;
        if(user.token){
            localStorage.setItem("jwt",user.token);
        }
        console.log("user  ",user);

        dispatch(loginSuccess(user.jwt))

    } catch (error) {
        dispatch(loginFailure(error))
    }
}


export const getUser = (token) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/user/profile`, // Ensure this is the correct endpoint
      {}, // Pass an empty object if there's no body
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getUserSuccess(response.data));
    console.log("success getting user data");
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};




export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
}