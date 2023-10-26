import { createSlice } from "@reduxjs/toolkit";

const initialState = {userData : null};

const userSlice = createSlice({
    name:"userData",
    initialState,    
})


export default userSlice.reducer;