import React from 'react'
import '../App.css'
import CategoryProductList from '../components/CategoryProductList'

const NewPage = () => {
    return (
        <div className='container'>
            <CategoryProductList category='new' label='신상품'/>
        </div>
    )
}

export default NewPage