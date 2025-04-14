import React from 'react'
import '../App.css'
import CategoryProductList from '../components/CategoryProductList'

const MagicPress = () => {
    return (
        <div className='container'>
            <CategoryProductList category='salad' label='샐러드'/>
        </div>
    )
}

export default MagicPress