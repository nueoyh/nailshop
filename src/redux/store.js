import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userReducer";
import  modalReducer from './modalSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer,
    }
})

export default store

/* export default configureStore({
    reducer: {
        user : userSlice
    }
}) */