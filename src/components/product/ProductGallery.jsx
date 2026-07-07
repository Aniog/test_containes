import { useState } from 'react'
import { useStockImages } from '@/hooks/useStockImages'

export default function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = useState(product.gallery[0])
  const containerRef = useStockImages([product.slug, activeImage.id])

  const activeTitleId = `gallery-${product.slug}-${activeImage.id}-title`
  const activeCueId = `gallery-${product.slug}-${activeImage.id}-cue`

  return (
    <div className="grid gap-4 lg:grid-cols-[6rem_1fr]" ref={containerRef}>
      <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
        {product.gallery.map((image) => {
          const thumbTitleId = `gallery-${product.slug}-${image.id}-thumb-title`
          const thumbCueId = `gallery-${product.slug}-${image.id}-thumb-cue`
          const isActive = activeImage.id === image.id

          return (
            <button
              key={image.id}
              type="button"
              className={`overflow-hidden rounded-[1.4rem] border transition duration-300 ${
                isActive ? 'border-champagne bg-sand' : 'border-mist/70 bg-porcelain hover:border-champagne/60'
              }`}
              onClick={() => setActiveImage(image)}
              aria-label={image.label}
            >
              <div
                className="aspect-square h-20 w-20 bg-cover bg-center"
                role="img"
                aria-label={image.label}
                data-strk-bg-id={`gallery-thumb-${product.slug}-${image.id}`}
                data-strk-bg={`[${thumbCueId}] [${thumbTitleId}]`}
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="240"
              />
              <span id={thumbTitleId} className="sr-only">
                {image.label}
              </span>
              <span id={thumbCueId} className="sr-only">
                {image.cue}
              </span>
            </button>
          )
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] bg-sand shadow-xl shadow-obsidian/5 lg:order-2">
        <div
          className="aspect-[4/5] w-full bg-cover bg-center"
          role="img"
          aria-label={product.name}
          data-strk-bg-id={`gallery-active-${product.slug}-${activeImage.id}`}
          data-strk-bg={`[${activeCueId}] [${activeTitleId}]`}
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1200"
        />
        <div className="border-t border-mist/60 bg-porcelain/80 px-5 py-4 backdrop-blur">
          <p id={activeTitleId} className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
            {activeImage.label}
          </p>
          <p className="mt-2 text-sm text-espresso/70">A closer look at the craftsmanship, finish, and styling of {product.name}.</p>
        </div>
        <p id={activeCueId} className="sr-only">
          {activeImage.cue}
        </p>
      </div>
    </div>
  )
}
