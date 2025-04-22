import './css/reset.css'
import './css/fonts.css'
import './index.css'
import './App.css';
import Header from './components/Header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetailPage from './pages/ProductDetailPage';
import NewPage from './pages/NewPage'
import BestPage from './pages/BestPage'
import NailPage from './pages/NailPage'
import PediPage from './pages/PediPage'
import LoginPage from './pages/LoginPage'
import MyPage from './pages/MyPage'
import ModalCart from './components/ModalCart';
import MainVisual from './components/MainVisual';

function App() {
  return (
    <HashRouter>
      <div className="wrap">
        <Header />
        <Routes>
          <Route path='/' element={
            <>
            <MainVisual/>
            <ProductList />
            </>
            } />
          {/* 상품상세 */}
          <Route path='/product/:id' element={<ProductDetailPage />} />

          {/* 서브페이지 */}
          <Route path='/new-1' element={<NewPage />} />
          <Route path='/best-1' element={<BestPage/>} />
          <Route path='/nail-1' element={<NailPage />} />
          <Route path='/pedi-1' element={<PediPage />} />

          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
        </Routes>
        <ModalCart/>
      </div>
    </HashRouter>
  );
}

export default App;
