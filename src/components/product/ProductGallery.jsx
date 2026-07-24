const ProductGallery = ({ product, activeImage, onImageSelect }) => (
  <div className="space-y-4">
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-stone-200/10 bg-stone-900/70">
      <span id={`${product.slug}-gallery-title`} className="sr-only">
        {product.name}
      </span>
      {product.gallery.map((image) => (
        <div
          key={image.mainImgId}
          className={[
            'absolute inset-0 transition duration-500',
            activeImage.id === image.id ? 'opacity-100' : 'pointer-events-none opacity-0',
          ].join(' ')}
          aria-hidden={activeImage.id !== image.id}
        >
          <span id={image.cueId} className="sr-only">
            {image.cueText}
          </span>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={image.alt}
            className="h-full w-full object-cover"
            data-strk-img-id={image.mainImgId}
            data-strk-img={`[${image.cueId}] [${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
          />
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-3">
      {product.gallery.map((image) => (
        <button
          key={image.id}
          type="button"
          onClick={() => onImageSelect(image)}
          className={[
            'overflow-hidden rounded-[1.5rem] border bg-stone-900/70 transition duration-300',
            activeImage.id === image.id
              ? 'border-amber-200/60'
              : 'border-stone-200/10 hover:border-stone-200/30',
          ].join(' ')}
        >
          <span id={image.cueId} className="sr-only">
            {image.cueText}
          </span>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={image.alt}
            className="aspect-square h-full w-full object-cover"
            data-strk-img-id={image.thumbImgId}
            data-strk-img={`[${image.cueId}] [${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="1x1"
            data-strk-img-width="400"
          />
        </button>
      ))}
    </div>
  </div>
)

export default ProductGallery
