import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import styles from './Product.module.css'


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('') //검색어상태

  //전체상품 불러오기
  useEffect(() => {
    //useEffect는 페이지가 처음 로드될 때 한번만 실행
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        //console.log('가져온데이터' , data);
        setProducts(data)  //가져온 상품 배열을 화면에 보여줄 수 있도록 상태를 업데이트해서 저장
      })
  }, [])
  return (
    <div className='container'>
      <div className={styles.titleArea}>
        <h2>전체 상품</h2>
        <input 
        type="text" 
        placeholder='상품검색...'  
        className={styles.searchInput}/>
      </div>
      <ul className={styles.productList}>
        {
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
              <figure><img src={product.img} alt={product.title} /></figure>
              <p className={styles.title}>{product.title}</p>
              <p className={styles.content}>{product.content}</p>
              <p className={styles.price}>{product.price}</p>
              {
                product.choice && (
                  <span className={styles.choice}>추천</span>
                )
              }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductList