import { Button, Grid, TextField } from '@mui/material';
import {React,useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, login } from '../../State/Auth/Actions';

const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const data=new FormData(event.currentTarget);
    
        const userData={
            
            email:data.get("email"),
            password:data.get("password")
    
        }
        dispatch(login(userData))
    
        console.log("users data "+JSON.stringify(userData));
      };
      
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoComplete="email"
                  id="email"
                  name="email"
                  label="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="bg-[#9155FD] w-full"
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ padding: ".8rem 0" }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
            <p>Don't have an account?</p>
            <Button onClick={()=>navigate("/register")}>Register</Button>
        </div>
      </div>

        </div>
      );
    

}

export default Login
