import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/userReducer'
import IonIcon from '@reacticons/ionicons';
import styles from './Header.module.css'
import logoImg from '../img/logo1.png'
import Navbar from './Navbar'
import SearchModal from './SearchModal';
import { openModal } from '../redux/modalSlice';


const Header = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false); //검색어모달

  //console.log('로그인상태확인', user.isLoggedIn, user.name)

  return (
    <header>
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link to='/'>
            <img src={logoImg} alt="로고" />
          </Link>
        </h1>
        <Navbar />
        {/* 로그인됐을때만보임 */}
        {user.isLoggedIn ? (
          <>
            <Link to='/mypage'><IonIcon name="person-outline" /></Link>
            <button onClick={() => dispatch(openModal())}><IonIcon name="bag-outline" /></button>
            <button onClick={() => dispatch(logout())}>로그아웃</button>
            <button onClick={()=>setShowModal(true)}>
            <IonIcon name="search-outline" />
            </button>
            {showModal && <SearchModal onClose={() => setShowModal(false)} />}
          </>
        ) : (
          <>
            <Link to='/login'>로그인</Link>
            <button onClick={() => dispatch(openModal())}><IonIcon name="bag-outline" /></button>
            <button onClick={()=> setShowModal(true)}>
            <IonIcon name="search-outline" />
            </button>
            {showModal && <SearchModal onClose={() => setShowModal(false)} />}
          </>
        )}

      </div>
    </header>
  )
}

export default Header