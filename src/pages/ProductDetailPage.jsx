import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import styles from './Product.module.css'

const ProductDetailPage = () => {
    const { id } = useParams() //url에서 id를 가져옴
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/db.json`)
          .then(res => {
            if (!res.ok) throw new Error("상품 목록 로딩 실패");
            return res.json();
          })
          .then(data => {
            const found = data.find(item => item.id === parseInt(id));
            if (!found) throw new Error("해당 상품 없음");
            setProduct(found);
          })
          .catch(err => console.error("에러 발생:", err));
      }, [id]);
    if (!product) return <p>상품을 불러오는 중입니다...</p>

    return (
        <div className='container'>
            <h2>상품상세페이지</h2>

            <div className={styles.productDetail}>

            <figure><img src={product.img} alt={product.title} /></figure>
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