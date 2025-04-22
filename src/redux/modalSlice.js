import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice ({
    name: 'modal', //state 이름
    initialState: {    //state 초기화
        isOpen: false  //닫힘
    },
    reducers: {
        openModal(state) {
            state.isOpen = true  
        },
        closeModal(state) {
            state.isOpen = false
        }
    }
})
 
export const { openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer