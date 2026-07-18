function ProductGallery({ product, activeImage, setActiveImage }) {
  const images = [
    product.imgIds.primary,
    product.imgIds.secondary,
    product.imgIds.detailOne,
    product.imgIds.detailTwo,
  ]

  return (
    <div className="grid gap-4 md:grid-cols-[7rem_1fr] md:items-start">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
        {images.map((imageId, index) => (
          <button
            key={imageId}
            type="button"
            onClick={() => setActiveImage(index)}
            className={`overflow-hidden rounded-[1.25rem] border bg-stone-100 ${
              activeImage === index ? 'border-stone-950' : 'border-stone-200'
            }`}
          >
            <div className="h-24 w-20">
              <img
                alt={`${product.name} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
                data-strk-img-id={imageId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] bg-stone-100 md:order-2">
        <div className="aspect-[4/5]">
          <img
            alt={product.name}
            className="h-full w-full object-cover"
            data-strk-img-id={images[activeImage]}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1100"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
