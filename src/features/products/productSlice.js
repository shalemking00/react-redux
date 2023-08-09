import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import productService from '../products/productService'

const initialState={
    products:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
}

export const getAllProducts=createAsyncThunk('/products/all',async(thunkAPI)=>{
    try {
        return await productService.getAllProducts();
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const productSlice=createSlice({
    name:'product',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError=false;
            state.isLoading=false;
            state.isSuccess=false;
            state.message='';
            state.products=[];
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.products=action.payload
        })
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.products=[];
            state.message=action.payload;
        })
    }
    
})

export const {reset}=productSlice.actions
export default productSlice.reducer