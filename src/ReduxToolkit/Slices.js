
import {  createSlice } from '@reduxjs/toolkit';


export const LoginSlice = createSlice({
  name: 'login',
  initialState:{
    login:false,
    
  },
  reducers: {
    logining: (state) => {
    
      state.login= true;
    },
    nologing:(state)=>{
        state.login=false;
    }
   
  },
 
});

export const { logining,nologing  } = LoginSlice.actions;

export const selectlogin = (state) => state.data.login;




export default LoginSlice.reducer;
