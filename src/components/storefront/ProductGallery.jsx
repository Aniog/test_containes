import { useState } from 'react'
import { placeholderImage } from '../../data/storefrontContent'

function ProductGallery({ product }) {
  const images = product.galleryNotes.map((note, index) => ({
    id: `${product.slug}-gallery-${index}`,
    note,
    titleId: `${product.slug}-gallery-title-${index}`,
    noteId: `${product.slug}-gallery-note-${index}`,
    imgId: `${product.slug}-gallery-img-${index}-x${index + 2}m`,
  }))

  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = images[activeIndex]

  return (
    <div className="grid gap-4 lg:grid-cols-[6rem_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`overflow-hidden rounded-[1.3rem] border bg-champagne transition ${
              index === activeIndex
                ? 'border-gold shadow-soft'
                : 'border-hairline hover:border-gold/60'
            }`}
          >
            <img
              alt={`${product.name} thumbnail ${index + 1}`}
              className="h-24 w-20 object-cover sm:h-28 sm:w-24"
              data-strk-img-id={`${image.imgId}-thumb`}
              data-strk-img={`[${image.noteId}] [${image.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="320"
              src={placeholderImage}
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] border border-hairline bg-champagne shadow-soft">
        <div className="aspect-[4/5]">
          <img
            alt={product.name}
            className="h-full w-full object-cover transition duration-500"
            data-strk-img-id={activeImage.imgId}
            data-strk-img={`[${activeImage.noteId}] [${activeImage.titleId}] ${product.category} jewelry product close-up`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src={placeholderImage}
          />
        </div>
        <div className="border-t border-hairline bg-pearl px-6 py-5">
          <p id={activeImage.titleId} className="text-xs uppercase tracking-[0.24em] text-gold">
            Gallery View {activeIndex + 1}
          </p>
          <p id={activeImage.noteId} className="mt-2 text-sm leading-7 text-taupe">
            {activeImage.note}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
