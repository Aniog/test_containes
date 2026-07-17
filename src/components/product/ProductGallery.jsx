import { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-2 order-2 md:order-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-14 h-14 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-sm border transition-all duration-300 ${
              selected === i
                ? "border-clay-500"
                : "border-cream-200 hover:border-cream-400"
            }`}
          >
            <img
              src={img}
              alt={`${name} view ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] overflow-hidden rounded-sm bg-cream-100 order-1 md:order-2">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}