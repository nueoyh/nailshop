import React from 'react'
import Modal from 'react-modal';
import './SearchModal.css';

Modal.setAppElement('#root');


/* const SearchModal = () => {
    const {isOpen} = useSelector((state) =>state.modal);
    const dispatch = useDispatch();
    const [query, setQuery] = useState('') //검색어상태

  return (
    <Modal isOpen = {isOpen} onRequestClose={() => dispatch(closeModal())}>
        <h2>검색어를 입력하세요</h2>
        <input 
        type="text" 
        placeholder='상품검색...'  
        className={styles.searchInput}
        onChange={(e) => setQuery(e.target.value)}
        value={query} />
        <button onClick={ ()=> dispatch(closeModal())}>닫기</button>
    </Modal>
  )
}

export default SearchModal */

function SearchModal({ onClose }) {
    return (
        <div className="modal">
            <button className="closeBtn" onClick={onClose}>X</button>
            <input type="text" placeholder="검색어를 입력하세요" />
            <button>검색</button>
        </div>
    );
}

export default SearchModal;