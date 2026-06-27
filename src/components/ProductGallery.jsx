import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

// Receives `product` as a prop. When rendered from a static PRODUCTS.map(),
// the strk image plugin can resolve every gallery image ID.
export default function ProductGallery({ product, activeImg, setActiveImg }) {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 md:w-20">
        {product.gallery.map((slot, i) => (
          <button
            key={slot.id}
            type="button"
            onClick={() => setActiveImg(i)}
            className={cn(
              'relative w-16 md:w-20 aspect-[4/5] overflow-hidden bg-cream transition-all',
              activeImg === i
                ? 'ring-1 ring-gold ring-offset-2 ring-offset-ivory'
                : 'opacity-70 hover:opacity-100'
            )}
            aria-label={`View image ${i + 1}`}
          >
            <img
              data-strk-img-id={slot.id}
              data-strk-img={`[${slot.descId}] [${slot.titleId}] ${slot.label} gold jewelry`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="200"
              src={PLACEHOLDER}
              alt=""
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-cream">
        {product.gallery.map((slot, i) => (
          <img
            key={slot.id}
            data-strk-img-id={slot.largeId}
            data-strk-img={`[${slot.descId}] [${slot.titleId}] ${slot.label} gold jewelry editorial`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src={PLACEHOLDER}
            alt={`${product.name} ${slot.label}`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              activeImg === i ? 'opacity-100' : 'opacity-0'
            )}
          />
        ))}
      </div>
    </div>
  )
}
