import React from 'react'
import '../App.css'
import CategoryProductList from '../components/CategoryProductList'

const MainPage = () => {
    return (
        <div className='container'>
            <CategoryProductList category='main' label='메인'/>
        </div>
    )
}

export default MainPage