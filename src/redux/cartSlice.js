import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,action) => {
      
        const existingCategoryIndex = state.products.findIndex((item) => item.category === action.payload.category);

        if (existingCategoryIndex !== -1) {
          // Category exists, replace the existing object with the new one
          const updatedCategories = [...state.products];
          updatedCategories[existingCategoryIndex] = action.payload;
          state.products =updatedCategories;
        } else {
          // Category doesn't exist, push the new object to the array
          state.products.push(action.payload)

        }
      
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { add} = cartSlice.actions

export default cartSlice.reducer