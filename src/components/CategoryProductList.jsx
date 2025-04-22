import React, { useState, useEffect } from 'react'
import '../App.css'
import styles from '../pages/Product.module.css'
import { Link } from 'react-router-dom'

const CategoryProductList = ({ category, label }) => {
    const [products, setProducts] = useState([]);

    //전체상품 불러오기
    useEffect(() => {
        //useEffect는 페이지가 처음 로드될 때 한번만 실행
        fetch(`${process.env.PUBLIC_URL}/db.json`)
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(product => product.category === category)
                //console.log('가져온데이터' , data);
                setProducts(filtered)  //가져온 상품 배열을 화면에 보여줄 수 있도록 상태를 업데이트해서 저장
            })
    }, [category])
    return (
        <div>
            <h2>{label}</h2>
            <ul className={styles.productList}>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <figure><img src={product.img} alt={product.title} /></figure>
                            <div className={styles.text}>
                                <h3>{product.title}</h3>
                                <p className={styles.content}>{product.content}</p>
                                <p className={styles.price}>{product.price}</p>
                            </div>
                            {product.choice && <span className={styles.choice}>추천</span>}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoryProductList