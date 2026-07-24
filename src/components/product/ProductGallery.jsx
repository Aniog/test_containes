import React, { useState } from 'react'

const ProductGallery = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 md:w-20">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border-2 transition-colors ${
              activeIndex === index ? 'border-primary' : 'border-transparent'
            }`}
          >
            <img src={img} alt={`${name} view ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={images[activeIndex]}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default ProductGallery
