const ProductGallery = ({ product, activeImage, onImageChange }) => {
  const images = [
    product.imageIds.primary,
    product.imageIds.secondary,
    product.imageIds.editorial,
  ]

  return (
    <div className="grid gap-4 lg:grid-cols-[6rem,1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {images.map((imageId, index) => (
          <button
            key={imageId}
            type="button"
            className={`overflow-hidden rounded-[1.3rem] border bg-white ${activeImage === imageId ? 'border-velmora-gold' : 'border-velmora-line hover:border-velmora-gold'}`}
            onClick={() => onImageChange(imageId)}
          >
            <img
              alt={`${product.name} thumbnail ${index + 1}`}
              className="h-20 w-20 object-cover"
              data-strk-img-id={imageId}
              data-strk-img={`[pdp-${product.slug}-desc] [pdp-${product.slug}-title]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="240"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] border border-velmora-line/80 bg-white shadow-velmora lg:order-2">
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={activeImage}
          data-strk-img={`[pdp-${product.slug}-desc] [pdp-${product.slug}-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
    </div>
  )
}

export default ProductGallery
