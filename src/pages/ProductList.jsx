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
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then((res) => res.json())
      .then((data) => {
        //console.log('가져온데이터' , data);
        setProducts(data)  //가져온 상품 배열을 화면에 보여줄 수 있도록 상태를 업데이트해서 저장
      })
  }, []) //의존성배열

  //검색어에 따라서 필터링된 목록
  const filteredProduct = products.filter((product) => {
    return product.title.toLowerCase().includes(query.toLowerCase())
  })
  return (
    <div className='container'>
      <div className={styles.titleArea}>
        <h2>전체 상품</h2>
        <input 
        type="text" 
        placeholder='상품검색...'  
        className={styles.searchInput}
        onChange={(e) => setQuery(e.target.value)}
        value={query} />
      </div>
      <ul className={styles.productList}>
        {
          filteredProduct.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
              <figure><img src={product.img} alt={product.title} /></figure>
              <div className={styles.text}>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.content}>{product.content}</p>
                <p className={styles.price}>{product.price}</p>
              </div>
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