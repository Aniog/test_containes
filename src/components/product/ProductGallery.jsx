import { useState } from 'react'

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all duration-200 ${
              i === selected
                ? 'border-gold-500/60 opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`${name} view ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-brand-100 rounded-sm overflow-hidden">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>
    </div>
  )
}