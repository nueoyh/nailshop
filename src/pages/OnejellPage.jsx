import React from 'react'
import '../App.css'
import CategoryProductList from '../components/CategoryProductList'

const OnejellPage = () => {
    return (
        <div className='container'>
            <CategoryProductList category='soup' label='국'/>
        </div>
    )
}

export default OnejellPage