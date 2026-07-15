import { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="aspect-[4/5] bg-cream-dark overflow-hidden">
        <img
          src={images[selectedIndex]}
          alt={`${name} - view ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={`w-16 h-20 flex-shrink-0 overflow-hidden border transition-all duration-300 ${
                i === selectedIndex
                  ? "border-accent-gold"
                  : "border-border-light/60 hover:border-border-medium"
              }`}
            >
              <img
                src={img}
                alt={`${name} thumbnail ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}