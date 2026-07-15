export default function ProductGallery({ product, activeIndex, onChange }) {
  const activeImage = product.gallery[activeIndex]
  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`

  return (
    <div className="grid gap-4 lg:grid-cols-[6rem,1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.gallery.map((image, index) => (
          <button
            className={`overflow-hidden rounded-3xl border transition ${
              index === activeIndex ? 'border-velmora-gold' : 'border-velmora-mist'
            }`}
            key={image.id}
            onClick={() => onChange(index)}
            type="button"
          >
            <img
              alt={`${product.shortName} thumbnail ${index + 1}`}
              className="h-24 w-24 object-cover"
              data-strk-img-id={`${image.id}-thumb`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio={image.ratio}
              data-strk-img-width="240"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-luxe-xl bg-velmora-porcelain shadow-velmora lg:order-2">
        <img
          alt={product.shortName}
          className="h-full min-h-120 w-full object-cover"
          data-strk-img-id={activeImage.id}
          data-strk-img={`[${descId}] [${titleId}]`}
          data-strk-img-ratio={activeImage.ratio}
          data-strk-img-width="1200"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
    </div>
  )
}
