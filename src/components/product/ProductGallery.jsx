const ProductGallery = ({ product, activeImage, onImageSelect }) => (
  <div className="space-y-4">
    <div className="overflow-hidden rounded-[2rem] border border-stone-200/10 bg-stone-900/70">
      <span id={`${product.slug}-gallery-title`} className="sr-only">
        {product.name}
      </span>
      <span id={activeImage.cueId} className="sr-only">
        {activeImage.cueText}
      </span>
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={activeImage.alt}
        className="aspect-[4/5] h-full w-full object-cover"
        data-strk-img-id={`${activeImage.id}-main-e31d`}
        data-strk-img={`[${activeImage.cueId}] [${product.descId}] [${product.titleId}]`}
        data-strk-img-ratio="4x3"
        data-strk-img-width="1200"
      />
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
            data-strk-img-id={`${image.id}-thumb-b91f`}
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
