import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser : (state,action)=>{
          return action.payload     // state will update
        },
        removeUser:(state,action)=>{
           return null               // state will become null
        }
    }
})

export const {addUser,removeUser} = userSlice.actions
export default userSlice.reducer