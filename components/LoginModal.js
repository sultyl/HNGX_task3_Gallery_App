import React from 'react';
import Modal from 'react-modal';
import Link from 'next/link';

Modal.setAppElement('#__next'); // Setting the root element for the modal

const LoginModal = ({ isOpen, onRequestClose }) => {

  return (
    <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-content">
        <h2>Only Authenticated Users can use drag and drop function</h2>
        <Link href="https://kinggallery.vercel.app/Login" className='bg-black text-white rounded-lg py-1 px-2 mt-3'>Login</Link>
        </div>
    </div>
  );
};

export default LoginModal;
