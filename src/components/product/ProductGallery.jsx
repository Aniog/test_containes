import React, { useState } from 'react'

export default function ProductGallery({ images, productName }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const mainImage = images[selectedIndex] || images[0]

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image */}
      <div className="aspect-[4/3.5] bg-velmora-surface overflow-hidden">
        <img 
          src={mainImage} 
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-20 h-20 bg-velmora-surface overflow-hidden border-2 transition-colors ${
                index === selectedIndex ? 'border-velmora-gold' : 'border-transparent'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <img 
                src={img} 
                alt={`${productName} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
