import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return isLoading ? (
    <div id='preloader'>
      <div className="preloader-container">
        <div className="spinner"></div>
      </div>
    </div>
  ) : null;
};

export default Preloader;
