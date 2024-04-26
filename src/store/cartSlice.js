import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products :[],
    productsNumber : 0
}


const cartSlice = createSlice({
name : "cart",
initialState,

reducers :{
addToCart : (state,action) =>{
state.productsNumber = state.productsNumber+1
},

removeFormCart :(state ,action) =>{

} 


}


})

export const {addToCart,removeFormCart} = cartSlice.actions

export default createSlice.reducer