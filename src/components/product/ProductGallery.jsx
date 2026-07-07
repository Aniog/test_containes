import { useState } from 'react';

const ProductGallery = ({ product }) => {
  const [selected, setSelected] = useState(0);

  const galleryImages = [
    product.imageUrl,
    product.hoverImageUrl,
  ];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:w-20">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`w-16 h-16 md:w-20 md:h-20 bg-charcoal-100 overflow-hidden border-2 transition-colors ${
              selected === idx ? 'border-gold-500' : 'border-transparent hover:border-charcoal-300'
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-charcoal-100 overflow-hidden">
        <img
          src={galleryImages[selected]}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export default ProductGallery;