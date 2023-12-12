import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

export const themeSlice = createSlice({
   name: 'theme',
   initialState: { value: initialState },
   reducers: {
      changeColor: (state, action) => {
         state.value = action.payload
      },
      resetColor: (state) => {
         state.value = initialState
      },
   },
})
export const { changeColor, resetColor } = themeSlice.actions
export default themeSlice.reducer
