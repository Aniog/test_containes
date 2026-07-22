import { useState } from 'react'

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
              selected === i
                ? 'border-velvet-gold opacity-100'
                : 'border-transparent opacity-60 hover:opacity-80'
            }`}
          >
            <img
              src={img}
              alt={`${name} ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velvet-surface rounded-sm overflow-hidden">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}