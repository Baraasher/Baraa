import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  useEffect(() => {
    const bodyElement = document.body;
    if (isLoading) {
      bodyElement.style.overflow = 'hidden';
    } else {
      bodyElement.style.overflow = 'auto';
    }
  }, [isLoading]);

  return isLoading ? (

    <div id='preloader'>
    <div className="preloader-container">
      <div className="spinner"></div>
    </div>
    </div>
  ) : null;
};

export default Preloader;
