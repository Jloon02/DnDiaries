import React, { useState } from 'react';
// import HomeScreen from './HomeScreen/HomeScreen.jsx';
import './Modal.css';
import dice from '../../Assets/d20.png'
export default function Modal({ isOpen, toggleModal, contentType }) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            {contentType === 'bookmark' && (
              <>
                <button className="addPC">
                  <img src={dice} alt="Dice Image" />
                  <span className="overlay-text">NEW</span>
                </button>
                <h2>Bookmark Modal</h2>
                <p>This is the content for the bookmark modal.</p>
              </>
            )}
            <button className="close-modal" onClick={toggleModal}> CLOSE </button>
          </div>
        </div>
      )}
    </>
  );
}