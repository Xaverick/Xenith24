// Back.js
import React, { useState } from 'react';
import './Back.css';
import WoodenBoard from '../Wood/WoodenBoard';

function Back() {
  const [isWoodenBoardVisible, setWoodenBoardVisible] = useState(false);
  const [isBlurred, setBlurred] = useState(false);

  const handlePhotoClick = () => {
    setWoodenBoardVisible(true);
    setBlurred(true);
    document.body.classList.add('freeze-scroll'); // Freeze scrolling
  };

  const closeWoodenBoard = () => {
    setWoodenBoardVisible(false);
    setBlurred(false);
    document.body.classList.remove('freeze-scroll'); // Unfreeze scrolling
  };

  return (
    <div className={`back-container ${isBlurred ? 'blurred' : ''}`}>
      <img id='img'
        src="./src/assets/bg.jpeg"
        alt=""
        onClick={handlePhotoClick}
      />
    

      {isWoodenBoardVisible && <WoodenBoard onClose={closeWoodenBoard} />}
    </div>
  );
}

export default Back;
