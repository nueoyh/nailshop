import React from 'react';
import {login} from '../redux/userReducer'
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const dispatch = useDispatch();
    const btnLogin = ()=> {
        dispatch(login({name: '효은'}))
    }
  return (
    <div className='login'>
        <h2>로그인</h2>
        <button onClick={btnLogin}>로그인</button>

    </div>
  )
}

export default LoginPage