import { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible md:w-24">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-16 md:w-full aspect-square rounded overflow-hidden border-2 transition-all ${
              activeIndex === index
                ? 'border-[var(--champagne-gold)]'
                : 'border-transparent hover:border-[var(--light-warm-gray)]'
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-[4/5] rounded-lg overflow-hidden bg-[var(--warm-stone)]">
        <img
          src={images[activeIndex]}
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
