import { useState } from "react";

export default function ProductImages({ images, name }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-3 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-sm border-2 transition-all duration-200 ${
              selected === i
                ? "border-gold"
                : "border-transparent hover:border-border"
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
      <div className="flex-1 aspect-[3/4] overflow-hidden rounded-sm bg-surface">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}