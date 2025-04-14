import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import styles from './Product.module.css'

const ProductDetailPage = () => {
    const { id } = useParams() //url에서 id를 가져옴
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error('상품없음')
                return res.json()
            })
            .then((data) => {
                //console.log('받은데이터' , data)
                setProduct(data)
            })
            .catch(err => console.error('에러발생', err))
    }, [id])
    if (!product) return <p>상품을 불러오는 중입니다...</p>

    return (
        <div className='container'>
            <h2>상품상세페이지</h2>

            <div className={styles.productDetail}>

                <img src={product.img} alt={product.title} />
                <div className={styles.productDetail}>
                    <p className={styles.title}>{product.title}</p>
                    <p className={styles.content}>{product.content}</p>
                    <p className={styles.price}>{product.price}</p>
                </div>
                {
                    product.choice && (
                        <span className={styles.choice}>추천</span>
                    )
                }
            </div>
        </div>
    )
}

export default ProductDetailPage