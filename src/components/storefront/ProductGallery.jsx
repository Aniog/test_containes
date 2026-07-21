import { useState } from 'react'

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState('main')

  const selectedAlt = selectedImage === 'hover'
    ? `${product.name} styled`
    : selectedImage === 'detail'
      ? `${product.name} detail`
      : product.name

  return (
    <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
        <GalleryThumb product={product} imageKey="main" active={selectedImage === 'main'} onSelect={setSelectedImage} />
        <GalleryThumb product={product} imageKey="hover" active={selectedImage === 'hover'} onSelect={setSelectedImage} />
        <GalleryThumb product={product} imageKey="detail" active={selectedImage === 'detail'} onSelect={setSelectedImage} />
      </div>
      <div className="order-1 overflow-hidden rounded-t-full bg-velmora-blush lg:order-2">
        {selectedImage === 'main' && <LargeImage product={product} imageKey="main" alt={selectedAlt} />}
        {selectedImage === 'hover' && <LargeImage product={product} imageKey="hover" alt={selectedAlt} />}
        {selectedImage === 'detail' && <LargeImage product={product} imageKey="detail" alt={selectedAlt} />}
      </div>
    </div>
  )
}

function GalleryThumb({ product, imageKey, active, onSelect }) {
  const label = imageKey === 'hover'
    ? `${product.name} styled`
    : imageKey === 'detail'
      ? `${product.name} detail`
      : product.name

  return (
    <button
      type="button"
      onClick={() => onSelect(imageKey)}
      className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-blush transition ${
        active ? 'border-velmora-gold' : 'border-velmora-line'
      }`}
      aria-label={`Show ${label}`}
    >
      {imageKey === 'main' && (
        <img
          data-strk-img-id="product-detail-thumb-main-d8c21a"
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="240"
          src={placeholder}
          alt={label}
          className="h-full w-full object-cover"
        />
      )}
      {imageKey === 'hover' && (
        <img
          data-strk-img-id="product-detail-thumb-styled-2b4e71"
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="240"
          src={placeholder}
          alt={label}
          className="h-full w-full object-cover"
        />
      )}
      {imageKey === 'detail' && (
        <img
          data-strk-img-id="product-detail-thumb-closeup-62a0fd"
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="1x1"
          data-strk-img-width="240"
          src={placeholder}
          alt={label}
          className="h-full w-full object-cover"
        />
      )}
    </button>
  )
}

function LargeImage({ product, imageKey, alt }) {
  return (
    <>
      {imageKey === 'main' && (
        <img
          data-strk-img-id="product-detail-large-main-f74a02"
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1100"
          src={placeholder}
          alt={alt}
          className="aspect-[3/4] h-full w-full object-cover"
        />
      )}
      {imageKey === 'hover' && (
        <img
          data-strk-img-id="product-detail-large-styled-41c0bb"
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1100"
          src={placeholder}
          alt={alt}
          className="aspect-[3/4] h-full w-full object-cover"
        />
      )}
      {imageKey === 'detail' && (
        <img
          data-strk-img-id="product-detail-large-closeup-c306e5"
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1100"
          src={placeholder}
          alt={alt}
          className="aspect-[3/4] h-full w-full object-cover"
        />
      )}
    </>
  )
}
