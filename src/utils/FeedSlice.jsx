import { createSlice } from "@reduxjs/toolkit";


const FeedSlice = createSlice({
    name : "Feed",
    initialState : null,
    redducers :{
        addFeed : (state, action)=>{
            return action.payload
        },
        removeFeed : (state, action)=>{
            return null

        }
    }
});


export const {addFeed, removeFeed} = FeedSlice.actions;
export default FeedSlice.reducer;