import { useState } from 'react'
import { placeholderImage } from '@/data/storeData'

function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const gallery = product.galleryPrompts.map((prompt, index) => ({
    id: `${product.slug}-${index + 1}`,
    prompt,
  }))
  const baseId = `gallery-${product.slug}`

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-[2rem] border border-mist/70 bg-sand shadow-soft">
        <img
          src={placeholderImage}
          alt={product.shortName}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={`${baseId}-main-cd9181`}
          data-strk-img={`[${baseId}-prompt-${activeIndex}] [${baseId}-title] [${baseId}-desc]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="1200"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {gallery.map((image, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`overflow-hidden rounded-[1.4rem] border bg-sand transition ${isActive ? 'border-champagne shadow-card' : 'border-mist/70 hover:border-champagne'}`}
            >
              <img
                src={placeholderImage}
                alt={`${product.shortName} view ${index + 1}`}
                className="aspect-square w-full object-cover"
                data-strk-img-id={`${baseId}-thumb-${image.id}`}
                data-strk-img={`[${baseId}-prompt-${index}] [${baseId}-title] [${baseId}-desc]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="500"
              />
            </button>
          )
        })}
      </div>

      <h2 id={`${baseId}-title`} className="sr-only">
        {product.name}
      </h2>
      <p id={`${baseId}-desc`} className="sr-only">
        {product.description}
      </p>
      {gallery.map((image, index) => (
        <p key={image.id} id={`${baseId}-prompt-${index}`} className="sr-only">
          {image.prompt}
        </p>
      ))}
    </div>
  )
}

export default ProductGallery
