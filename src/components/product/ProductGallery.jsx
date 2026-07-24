import { useState } from 'react';

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // For now, we'll show the same image in different "views"
  const images = [
    { id: product.imgId, label: 'Front' },
    { id: product.imgIdHover, label: 'Detail' },
    { id: product.imgId, label: 'Styled' },
    { id: product.imgId, label: 'Package' },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible scrollbar-hide">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 border-2 transition-all duration-200 ${
              activeIndex === index
                ? 'border-gold'
                : 'border-stone-200 hover:border-stone-400'
            }`}
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`${product.name} - ${img.label}`}
              className="w-full h-full object-cover"
              data-strk-img-id={`product-detail-${product.id}-thumb-${index}`}
              data-strk-img={`[product-detail-name] ${img.label} view`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-[4/5] bg-stone-100 overflow-hidden">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover"
          data-strk-img-id={`${product.imgId}-main-view`}
          data-strk-img="[product-detail-name] main product image"
          data-strk-img-ratio="4x5"
          data-strk-img-width="800"
        />
      </div>
    </div>
  );
}
