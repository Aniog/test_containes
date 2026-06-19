import { useState } from 'react'

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-14 h-14 md:w-16 md:h-16 flex-shrink-0 overflow-hidden border transition-colors duration-300 ${
              selected === i ? 'border-brand-gold' : 'border-transparent'
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
      <div className="flex-1 aspect-[4/5] bg-brand-warm overflow-hidden">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}