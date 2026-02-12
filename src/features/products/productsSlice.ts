import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { productsAPI } from './productsAPI'
import type { ProductInterface } from './Types';


export const fetchByProducts = createAsyncThunk('products/fetechByProducts', async () =>{
        const response = await productsAPI();
        return response;
})


interface IinitialState{
    list: ProductInterface[],
    loading:boolean,
    error:string | null
}
const initialState:IinitialState = {
    list: [],
    loading:false,
    error:""
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{

    },


    extraReducers:((builder) =>{
        builder.addCase(fetchByProducts.pending, (state) =>{
            state.loading = true
        }),
       builder.addCase(fetchByProducts.fulfilled, (state, action) => {
                 state.loading = false
        state.list = action.payload
    }),
    builder.addCase(fetchByProducts.rejected,(state) =>{
        state.loading = false;
        state.error = "Error fetching products"
    })
    })  
})



export default productSlice.reducer