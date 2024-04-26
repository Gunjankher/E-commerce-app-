import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products :[],
    productsNumber : 0
}


const slice = createSlice({

initialState,

reducers :{
addToCart : (state,action) =>{
state.productsNumber = state.productsNumber+1
},

removeFormCart :(state ,action) =>{

} 


}


})