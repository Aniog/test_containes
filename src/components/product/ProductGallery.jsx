import { useMemo, useState } from 'react'
import { placeholderSrc } from '@/data/storefront'

const ProductGallery = ({ product }) => {
  const gallery = useMemo(
    () => [product.imageIds.primary, product.imageIds.secondary, ...product.imageIds.gallery],
    [product.imageIds.gallery, product.imageIds.primary, product.imageIds.secondary],
  )
  const [activeImage, setActiveImage] = useState(gallery[0])

  return (
    <div>
      <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white">
        <img
          src={placeholderSrc}
          alt={product.name}
          data-strk-img-id={activeImage}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div className="mt-4 grid grid-cols-5 gap-3">
        {gallery.map((imageId, index) => (
          <button
            key={imageId}
            type="button"
            onClick={() => setActiveImage(imageId)}
            className={`overflow-hidden rounded-[1.25rem] border bg-white ${
              activeImage === imageId ? 'border-stone-900' : 'border-stone-200'
            }`}
          >
            <img
              src={placeholderSrc}
              alt={`${product.name} thumbnail ${index + 1}`}
              data-strk-img-id={imageId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="240"
              className="aspect-square w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
