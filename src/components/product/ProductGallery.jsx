import { useState } from 'react'

export default function ProductGallery({ images, name }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="flex gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-2 order-2 md:order-1 overflow-x-auto md:overflow-y-auto hide-scrollbar">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
              i === selectedIndex
                ? 'border-brand-600 opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100'
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
      <div className="flex-1 aspect-[4/5] bg-midnight-100 rounded-sm overflow-hidden order-1 md:order-2">
        <img
          src={images[selectedIndex]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}