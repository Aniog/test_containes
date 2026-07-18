import { useState } from 'react';

export default function ImageGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 order-2 md:order-1">
        {product.images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 rounded-sm overflow-hidden transition-all duration-300 bg-velvet-100 ${
              i === selectedIndex
                ? 'ring-1 ring-velvet-900 ring-offset-2 ring-offset-velvet-50'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img
              alt={`${product.name} view ${i + 1}`}
              className="w-full h-full object-cover"
              data-strk-img-id={`${product.id}-gal-${i}`}
              data-strk-img={`[pdp-name] gold jewelry detail`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 order-1 md:order-2 aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden">
        <img
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500"
          data-strk-img-id={`${product.id}-main`}
          data-strk-img={`[pdp-name] gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
        />
      </div>
    </div>
  );
}