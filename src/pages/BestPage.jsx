import React from 'react'
import '../App.css'
import CategoryProductList from '../components/CategoryProductList'

const BestPage = () => {
    return (
        <div className='container'>
            <CategoryProductList category='best' label='베스트' />
        </div>
    )
}

export default BestPage