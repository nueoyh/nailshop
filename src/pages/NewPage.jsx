import React from 'react'
import '../App.css'
import CategoryProductList from '../components/CategoryProductList'

const NewPage = () => {
    return (
        <div className='container'>
            <CategoryProductList category='side' label='밑반찬'/>
        </div>
    )
}

export default NewPage