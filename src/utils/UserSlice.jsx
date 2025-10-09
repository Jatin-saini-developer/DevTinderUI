import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name : "User",
    initialState: null,
    reducers:{
        addUser : (state, action)=>{
            return action.payload
        },

        deleteUser:(state, action)=>{
            return null
        }

    }
})

export const {addUser,deleteUser}= UserSlice.actions;
export default UserSlice.reducer;