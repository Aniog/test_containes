import { useState } from 'react'

const extraImages = [
  'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format',
]

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0)
  const allImages = [images.front, images.hover, ...extraImages.slice(0, 2)]

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible scrollbar-hide">
        {allImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded overflow-hidden border-2 transition-colors ${
              selected === idx ? 'border-gold' : 'border-transparent'
            }`}
          >
            <img
              src={img}
              alt={`${name} view ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[4/5] bg-warm rounded overflow-hidden">
        <img
          src={allImages[selected]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}