import { useState } from 'react'

export default function ProductGallery() {
  const [active, setActive] = useState(0)
  const images = [0, 1, 2, 3]

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2.5">
        {images.map((i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-16 h-16 bg-velvet-100 border transition-colors ${
              i === active ? 'border-deep' : 'border-transparent hover:border-velvet-300'
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[9px] text-velvet-400">Img {i + 1}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-velvet-100 flex items-center justify-center">
        <span className="text-sm text-velvet-400 font-serif italic">
          Product Image {active + 1}
        </span>
      </div>
    </div>
  )
}