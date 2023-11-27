
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  useEffect(() => {
    
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="image-slider">
      <div className="arrow left" onClick={prevImage}>
        &lt;
      </div>
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      <div className="arrow right" onClick={nextImage}>
        &gt;
      </div>
      <div className="slide-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
