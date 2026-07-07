import React, { useState } from 'react'

const ProductGallery = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-[var(--color-cream)] flex items-center justify-center">
        <span className="text-[var(--color-taupe)] text-sm">No image available</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all ${
              selectedIndex === idx 
                ? 'border-[var(--color-gold)]' 
                : 'border-transparent hover:border-[var(--color-border)]'
            }`}
          >
            <img src={img} alt={`${productName} view ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div 
        className="flex-1 order-1 md:order-2 relative overflow-hidden bg-[var(--color-cream)] aspect-square cursor-zoom-in"
        onClick={() => setIsZoomed(true)}
      >
        <img 
          src={images[selectedIndex]} 
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
        <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.1em] bg-white/90 px-3 py-1 text-[var(--color-text-muted)]">
          CLICK TO ZOOM
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div className="modal" onClick={() => setIsZoomed(false)}>
          <div className="modal-backdrop" />
          <div className="modal-content">
            <img src={images[selectedIndex]} alt={productName} />
          </div>
          <button 
            className="absolute top-6 right-6 text-white text-sm tracking-[0.1em] z-10"
            onClick={() => setIsZoomed(false)}
          >
            CLOSE
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductGallery
