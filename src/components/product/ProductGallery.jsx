import { useEffect, useState } from 'react'

function ProductGallery({ product }) {
  const galleryItems = [
    { id: 'hero', imageId: product.imageIds.hero, ratio: '4x3' },
    { id: 'alt', imageId: product.imageIds.alt, ratio: '4x3' },
    { id: 'detail', imageId: product.imageIds.detail, ratio: '1x1' },
  ]

  const [activeImage, setActiveImage] = useState(galleryItems[0])

  useEffect(() => {
    setActiveImage(galleryItems[0])
  }, [product.slug])

  return (
    <div className="grid gap-4 md:grid-cols-[92px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
        {galleryItems.map((item) => (
          <button
            key={item.id}
            className={`min-w-[84px] overflow-hidden rounded-2xl border bg-white shadow-soft transition ${
              activeImage.id === item.id
                ? 'border-velmora-ink ring-1 ring-velmora-ink'
                : 'border-velmora-sand/35 hover:border-velmora-champagne'
            }`}
            onClick={() => setActiveImage(item)}
            type="button"
          >
            <img
              alt={`${product.shortName} thumbnail ${item.id}`}
              className="aspect-square w-full object-cover"
              data-strk-img-id={`${item.imageId}-thumb`}
              data-strk-img={`[product-${product.slug}-desc] [product-${product.slug}-title]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      <div className="order-1 grid gap-4 md:order-2 md:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-velmora-sand/35 bg-white shadow-soft md:col-span-2">
          <img
            alt={product.shortName}
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id={activeImage.imageId}
            data-strk-img={`[product-${product.slug}-caption] [product-${product.slug}-desc] [product-${product.slug}-title]`}
            data-strk-img-ratio={activeImage.ratio === '1x1' ? '3x4' : activeImage.ratio}
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-velmora-sand/35 bg-white shadow-soft">
          <img
            alt={`${product.shortName} alternate angle`}
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id={product.imageIds.alt}
            data-strk-img={`[product-${product.slug}-desc] [product-${product.slug}-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-velmora-sand/35 bg-white shadow-soft">
          <img
            alt={`${product.shortName} close detail`}
            className="aspect-[4/5] w-full object-cover"
            data-strk-img-id={product.imageIds.detail}
            data-strk-img={`[product-${product.slug}-caption] [product-${product.slug}-title]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
