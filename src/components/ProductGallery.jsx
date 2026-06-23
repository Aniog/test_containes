import { getProductGalleryImages } from '@/lib/strkImages'

const ProductGallery = ({ product, activeImage, onSelectImage }) => {
  const galleryImages = getProductGalleryImages(product)

  return (
    <div className="grid gap-4 lg:grid-cols-[100px_1fr]">
      <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
        {galleryImages.map((image, index) => (
          <button
            key={image.key}
            type="button"
            onClick={() => onSelectImage(image.src)}
            className={`overflow-hidden rounded-2xl border ${
              activeImage === image.src ? 'border-brand-bronze' : 'border-brand-line'
            }`}
          >
            <img
              alt={`${product.name} thumbnail ${index + 1}`}
              className="h-24 w-24 object-cover"
              src={image.src}
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] bg-brand-sand/70 lg:order-2">
        <img
          alt={product.name}
          className="h-full min-h-[500px] w-full object-cover"
          src={activeImage}
        />
      </div>
    </div>
  )
}

export default ProductGallery
