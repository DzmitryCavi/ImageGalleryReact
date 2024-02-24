import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from './slices/gallerySlice.jsx'
import termsOfUseReducer from './slices/termsOfUseSlice.jsx'

export const store = configureStore({
    reducer: {
        gallery: galleryReducer,
        termsOfUse: termsOfUseReducer,
    },
});