import React from 'react'
import '../App.css'
import CategoryProductList from '../components/CategoryProductList'

const NailPage = () => {
    return (
        <div className='container'>
            <CategoryProductList category='nail' label='네일' />
        </div>
    )
}

export default NailPage