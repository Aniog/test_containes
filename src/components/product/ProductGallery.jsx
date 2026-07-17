import { useState } from 'react'
import ProductImage from '@/components/shared/ProductImage'

const galleryKinds = ['primary', 'detail', 'lifestyle', 'packaging']

const ProductGallery = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {galleryKinds.map((kind, index) => (
          <button
            key={kind}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-[1.5rem] border transition ${
              activeIndex === index
                ? 'border-gold-500 shadow-editorial'
                : 'border-velvet-200/70'
            }`}
          >
            <ProductImage
              product={product}
              kind={kind}
              className="h-24 w-24 object-cover"
              ratio="1x1"
              width="300"
            />
          </button>
        ))}
      </div>
      <div className="order-1 overflow-hidden rounded-[2rem] bg-cream-100 shadow-editorial lg:order-2">
        <ProductImage
          product={product}
          kind={galleryKinds[activeIndex]}
          className="aspect-[4/5] w-full object-cover"
          ratio="4x3"
          width="1200"
        />
      </div>
    </div>
  )
}

export default ProductGallery
