import React from 'react'
import '../App.css'
import CategoryProductList from '../components/CategoryProductList'

const PediPage = () => {
    return (
        <div className='container'>
            <CategoryProductList category='pedi' label='페디' />
        </div>
    )
}

export default PediPage