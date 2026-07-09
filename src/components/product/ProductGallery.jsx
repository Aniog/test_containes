import { useState } from 'react'

export default function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border transition-all duration-300 ${
              i === activeIndex ? 'border-gold-500' : 'border-velvet-800 hover:border-velvet-600'
            }`}
          >
            <div className="w-full h-full bg-velvet-800 flex items-center justify-center">
              <span className="text-velvet-600 text-[8px]">{i + 1}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-velvet-800 rounded-sm overflow-hidden">
        <div className="w-full h-full bg-gradient-to-b from-velvet-700 to-velvet-800 flex items-center justify-center">
          <span className="text-velvet-500 text-sm tracking-wider">{productName} IMAGE</span>
        </div>
      </div>
    </div>
  )
}