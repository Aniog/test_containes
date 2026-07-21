const ProductGallery = ({ product, activeIndex, onSelect }) => {
  return (
    <div className="grid gap-4 lg:grid-cols-[100px_minmax(0,1fr)] lg:items-start">
      <div className="order-2 flex gap-3 overflow-x-auto pb-2 lg:order-1 lg:flex-col">
        {product.gallery.map((image, index) => {
          const titleId = `pdp-${product.id}-${image.key}-title`
          const descId = `pdp-${product.id}-${image.key}-desc`

          return (
            <button
              key={image.key}
              type="button"
              onClick={() => onSelect(index)}
              className={`relative aspect-square min-w-[78px] overflow-hidden rounded-[1.25rem] border bg-mist transition ${
                activeIndex === index ? 'border-gold shadow-soft' : 'border-noir/10'
              }`}
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} ${image.label}`}
                data-strk-img-id={`pdp-thumb-${product.id}-${image.key}-3f7a`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="260"
                className="h-full w-full object-cover"
              />
              <span id={titleId} className="sr-only">
                {product.name} {image.label}
              </span>
              <span id={descId} className="sr-only">
                {image.scene}
              </span>
            </button>
          )
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] bg-mist shadow-card lg:order-2">
        {product.gallery.map((image, index) => {
          const titleId = `pdp-feature-${product.id}-${image.key}-title`
          const descId = `pdp-feature-${product.id}-${image.key}-desc`

          return (
            <div key={image.key} className={activeIndex === index ? 'block' : 'hidden'}>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} ${image.label}`}
                data-strk-img-id={`pdp-image-${product.id}-${image.key}-7ae1`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                className="aspect-[4/5] h-full w-full object-cover"
              />
              <span id={titleId} className="sr-only">
                {product.name} {image.label}
              </span>
              <span id={descId} className="sr-only">
                {image.scene}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductGallery
