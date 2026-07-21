import React, { useState } from 'react'
import { Star } from 'lucide-react'

export default function ProductGallery({ images, name }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={images[activeImage]}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`aspect-square overflow-hidden border-2 transition-colors ${
                activeImage === index ? 'border-primary' : 'border-transparent hover:border-foreground/20'
              }`}
            >
              <img
                src={image}
                alt={`${name} - View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
