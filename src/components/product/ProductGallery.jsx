import { useState } from 'react'

export default function ProductGallery({ product }) {
  const [selected, setSelected] = useState(0)
  const images = [0, 1, 2, 3] // placeholder indices

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-sand transition-all duration-300 ${
              selected === i ? 'ring-1 ring-gold ring-offset-2 ring-offset-cream' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-taupe-light/30" />
            </div>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-square bg-sand overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-taupe-light/40 text-xs tracking-widest uppercase font-sans">
            {product.name}
          </span>
        </div>
      </div>
    </div>
  )
}
