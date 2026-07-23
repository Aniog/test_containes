import { imagePlaceholder } from '@/data/storefront'
import { cn } from '@/lib/utils'

export default function ProductGallery({ product, selectedIndex, onSelect, scope = 'pdp' }) {
  const activeImage = product.gallery[selectedIndex] || product.gallery[0]
  const activeDescId = `${scope}-${product.slug}-main-desc`

  return (
    <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
        {product.gallery.map((image, index) => {
          const thumbId = `${image.imageId}-${scope}-thumb-${index}`
          return (
            <button
              key={thumbId}
              type="button"
              onClick={() => onSelect(index)}
              className={cn(
                'relative overflow-hidden rounded-2xl border bg-surface transition',
                selectedIndex === index ? 'border-gold shadow-soft' : 'border-line/70 hover:border-gold',
              )}
            >
              <img
                src={imagePlaceholder}
                alt={image.alt}
                className="h-24 w-20 object-cover sm:h-28 sm:w-24"
                data-strk-img-id={thumbId}
                data-strk-img={`[${image.descId}] [${image.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="300"
              />
            </button>
          )
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] bg-surface lg:order-2">
        <img
          src={imagePlaceholder}
          alt={activeImage.alt}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={`${activeImage.imageId}-${scope}-main`}
          data-strk-img={`[${activeDescId}] [${activeImage.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1200"
        />
        <p id={activeDescId} className="border-t border-line/60 px-5 py-4 text-sm leading-6 text-muted sm:px-6">
          {activeImage.detailText || product.shortDescription}
        </p>
      </div>
    </div>
  )
}
