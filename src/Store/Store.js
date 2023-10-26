import { configureStore } from "@reduxjs/toolkit";
import userSlice from './UserDataSlice';


export const store =  configureStore(
    {
        reducer:{
            user:userSlice
        }
    }   
)