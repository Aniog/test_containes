export function ProductGallery({ product, activeIndex, onSelect }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[96px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.gallery.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => onSelect(index)}
            className={`overflow-hidden rounded-[1.4rem] border bg-velmora-parchment transition ${
              activeIndex === index
                ? 'border-velmora-gold shadow-soft'
                : 'border-velmora-line hover:border-velmora-taupe'
            }`}
          >
            <img
              alt={`${product.shortName} thumbnail ${index + 1}`}
              className="h-24 w-20 object-cover"
              data-strk-img-id={`thumb-${product.id}-${image.id}`}
              data-strk-img={`[${image.descId}] [${image.titleId}]`}
              data-strk-img-ratio={image.ratio}
              data-strk-img-width="240"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] border border-velmora-line bg-white/70 shadow-soft lg:order-2">
        {product.gallery.map((image, index) => (
          <div key={image.id} className={activeIndex === index ? 'block' : 'hidden'}>
            <img
              alt={image.alt}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={`main-${product.id}-${image.id}`}
              data-strk-img={`[${image.descId}] [${image.titleId}]`}
              data-strk-img-ratio={image.ratio}
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
