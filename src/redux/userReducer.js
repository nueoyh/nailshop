import { createSlice } from "@reduxjs/toolkit";

//userState 초기화
const initialState = {
    isLoggedIn: false,
    name: 'guest'
}

const userSlice = createSlice({
/* 
Slice -> Redux/toolkit에서 createSlice()로 만든 state+reducer를 하나로 묶은 그룹

 userSlice 슬라이스 객체
 - name
 - reducers
 - initailState
 - action
 - reducer
*/
    name: 'user',
    initialState,
    reducers: {
        login(state, action){
            state.isLoggedIn = true;
            state.name = action.payload.name;
        },
        logout(state){
            state.isLoggedIn = false;
            state.name = 'guest'   
        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;