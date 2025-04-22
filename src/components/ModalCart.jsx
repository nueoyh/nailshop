import React from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/modalSlice';

Modal.setAppElement('#root');


const ModalCart = () => {
    const {isOpen} = useSelector((state) =>state.modal);
    const dispatch = useDispatch();
  return (
    <Modal isOpen = {isOpen} onRequestClose={() => dispatch(closeModal())} style={customStyles}>
        <h2>장바구니</h2>
        <p>담긴 상품이 없습니다</p>
        <button onClick={ ()=> dispatch(closeModal())}>닫기</button>
    </Modal>
  )
}
const customStyles = {
  content: {
    width: '200px',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    zIndex: 50
  }
};

export default ModalCart