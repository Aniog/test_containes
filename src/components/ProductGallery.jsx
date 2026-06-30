import React, { useState } from "react";

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-3 md:flex-row-reverse">
      {/* Main */}
      <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-muted">
        <img
          src={images[selected]}
          alt={name}
          className="h-full w-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 md:flex-col md:gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`h-16 w-16 flex-shrink-0 overflow-hidden border-2 transition-all md:h-20 md:w-20 ${
              selected === i
                ? "border-primary"
                : "border-border hover:border-foreground/30"
            }`}
          >
            <img
              src={img}
              alt={`${name} view ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}