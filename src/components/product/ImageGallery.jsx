import { useState } from 'react'
import { cn } from '@/lib/utils'
import { StockImage } from '@/components/ui/StockImage'

export function ImageGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedImage = product.images[selectedIndex]

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible hide-scrollbar md:w-20 lg:w-24 flex-shrink-0">
        {product.images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={cn(
              'relative flex-shrink-0 w-16 h-20 md:w-full md:h-24 bg-velmora-warm border-2 transition-colors overflow-hidden',
              selectedIndex === index
                ? 'border-velmora-dark'
                : 'border-transparent hover:border-velmora-sand'
            )}
            aria-label={`View image ${index + 1}`}
            aria-current={selectedIndex === index}
          >
            <StockImage
              id={`gallery-thumb-${image.id}`}
              query={image.query}
              ratio="3x4"
              width={150}
              alt={`${product.name} thumbnail ${index + 1}`}
              containerClassName="bg-transparent"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 bg-velmora-warm overflow-hidden">
        <StockImage
          id={`gallery-main-${selectedImage.id}`}
          query={selectedImage.query}
          ratio="3x4"
          width={900}
          alt={product.name}
          containerClassName="bg-transparent"
        />
      </div>
    </div>
  )
}
