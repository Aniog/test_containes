const ProductGallery = ({ product, activeImage, onImageChange }) => {
  const imageIds = ['gallery-1', 'gallery-2', 'gallery-3']

  return (
    <div className="grid gap-4 lg:grid-cols-[6.5rem_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {imageIds.map((imageKey, index) => {
          const titleId = `${product.slug}-title`
          const descId = `${product.slug}-gallery-desc-${index}`
          const isActive = activeImage === index

          return (
            <button
              className={`overflow-hidden rounded-[1.4rem] border bg-stone-100 ${isActive ? 'border-amber-700' : 'border-stone-200'}`}
              key={imageKey}
              onClick={() => onImageChange(index)}
              type="button"
            >
              <img
                alt={`${product.name} thumbnail ${index + 1}`}
                className="aspect-square w-24 object-cover lg:w-full"
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-id={`${product.slug}-${imageKey}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <span className="sr-only" id={descId}>
                {product.galleryDescriptors[index]}
              </span>
            </button>
          )
        })}
      </div>
      <div className="order-1 overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 lg:order-2">
        {imageIds.map((imageKey, index) => {
          const titleId = `${product.slug}-title`
          const descId = `${product.slug}-hero-desc-${index}`

          return (
            <img
              alt={`${product.name} view ${index + 1}`}
              className={`${activeImage === index ? 'block' : 'hidden'} aspect-[4/5] w-full object-cover`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-id={`${product.slug}-main-${imageKey}`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              key={imageKey}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          )
        })}
        <div className="sr-only">
          {product.galleryDescriptors.map((descriptor, index) => (
            <span id={`${product.slug}-hero-desc-${index}`} key={`hero-${index}`}>
              {descriptor}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
