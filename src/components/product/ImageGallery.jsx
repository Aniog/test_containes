import React, { useState } from 'react';

const ImageGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Use consistent placeholder images for jewelry
  const getImageUrl = (index) => {
    const urls = [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=85',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    ];
    return urls[index % urls.length];
  };

  return (
    <div>
      <div className="gallery-main">
        <img
          src={getImageUrl(selectedIndex)}
          alt={`${productName} - View ${selectedIndex + 1}`}
        />
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((img, index) => (
            <button
              key={img.id}
              onClick={() => setSelectedIndex(index)}
              className={`gallery-thumb ${selectedIndex === index ? 'active' : ''}`}
              aria-label={`View image ${index + 1}`}
            >
              <img src={getImageUrl(index)} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
