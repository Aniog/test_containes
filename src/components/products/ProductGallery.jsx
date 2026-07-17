import { cn } from '@/lib/utils'

function ProductGallery({ product, activeIndex, onSelect }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:w-24 lg:flex-col">
        {product.gallery.map((image, index) => {
          const thumbTitleId = `pdp-${product.slug}-thumb-${index}-title`
          const thumbDescId = `pdp-${product.slug}-thumb-${index}-desc`

          return (
            <button
              key={image.id}
              type="button"
              onClick={() => onSelect(index)}
              className={cn('overflow-hidden rounded-2xl border bg-pearl/50 transition', activeIndex === index ? 'border-champagne shadow-card' : 'border-pearl')}
            >
              <img
                alt={image.title}
                className="h-24 w-20 object-cover"
                data-strk-img-id={`pdp-${product.slug}-thumb-${index}`}
                data-strk-img={`[${thumbDescId}] [${thumbTitleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="320"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <span id={thumbTitleId} className="sr-only">{image.title}</span>
              <span id={thumbDescId} className="sr-only">{image.description}</span>
            </button>
          )
        })}
      </div>

      <div className="order-1 relative flex-1 overflow-hidden rounded-luxe border border-pearl bg-white/60 shadow-card">
        {product.gallery.map((image, index) => {
          const mainTitleId = `pdp-${product.slug}-main-${image.id}-title`
          const mainDescId = `pdp-${product.slug}-main-${image.id}-desc`

          return (
            <div
              key={image.id}
              className={cn(
                'absolute inset-0 transition-opacity duration-300 ease-premium',
                activeIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              <img
                alt={image.title}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`pdp-${product.slug}-main-${image.id}`}
                data-strk-img={`[${mainDescId}] [${mainTitleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <span id={mainTitleId} className="sr-only">{product.name}</span>
              <span id={mainDescId} className="sr-only">{image.description}</span>
            </div>
          )
        })}
        <div className="aspect-[4/5] w-full" aria-hidden="true" />
      </div>
    </div>
  )
}

export default ProductGallery
