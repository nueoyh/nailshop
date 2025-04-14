import './css/reset.css'
import './css/fonts.css'
import './index.css'
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetailPage from './pages/ProductDetailPage';
import NewPage from './pages/NewPage'
import OnejellPage from './pages/OnejellPage'
import MainPage from './pages/MainPage'
import MagicPress from './pages/MagicPress'

function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          {/* 상품상세 */}
          <Route path='/product/:id' element={<ProductDetailPage/>}/>

          {/* 서브페이지 */}
          <Route path='/side-1' element={<NewPage/>}/>
          <Route path='/main-1' element={<OnejellPage/>}/>
          <Route path='/soup-1' element={<MainPage/>}/>
          <Route path='/salad' element={<MagicPress/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
