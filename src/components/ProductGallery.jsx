import { useState } from "react";

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [product.image, product.imageAlt].filter(Boolean);

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-cream-100">
        <img
          src={images[activeIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-400"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                activeIndex === i
                  ? "border-gold shadow-soft"
                  : "border-cream-200 hover:border-cream-300"
              }`}
            >
              <img
                src={img}
                alt={`${product.name} view ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
