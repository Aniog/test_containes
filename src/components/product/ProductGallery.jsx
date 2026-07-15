const ProductGallery = ({ product, activeImageIndex, setActiveImageIndex }) => (
  <div className="space-y-4">
    <div className="overflow-hidden rounded-[2rem] bg-stone-200">
      {product.gallery.map((image, index) => {
        const captionId = `product-gallery-${product.id}-${index}-caption`
        return (
          <img
            key={image.id}
            alt={`${product.name} view ${index + 1}`}
            className={`aspect-[4/5] w-full object-cover ${
              activeImageIndex === index ? 'block' : 'hidden'
            }`}
            data-strk-img-id={image.id}
            data-strk-img={`[${captionId}] [product-title] [product-short-description]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        )
      })}
    </div>

    <div className="grid grid-cols-3 gap-3">
      {product.gallery.map((image, index) => {
        const captionId = `product-gallery-${product.id}-${index}-caption`

        return (
          <button
            key={image.id}
            className={`overflow-hidden rounded-[1.5rem] border ${
              activeImageIndex === index
                ? 'border-stone-950'
                : 'border-stone-200 hover:border-stone-400'
            }`}
            type="button"
            onClick={() => setActiveImageIndex(index)}
          >
            <span className="sr-only" id={captionId}>
              {image.caption}
            </span>
            <img
              alt={`${product.name} thumbnail ${index + 1}`}
              className="aspect-square w-full object-cover"
              data-strk-img-id={`${image.id}-thumb`}
              data-strk-img={`[${captionId}] [product-title]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        )
      })}
    </div>
  </div>
)

export default ProductGallery
