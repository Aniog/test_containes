import { useEffect, useMemo, useRef, useState } from 'react'

import useLoadImages from '@/hooks/useLoadImages'

const getToneLabel = (tone) => (tone === 'Silver Tone' ? 'silver' : 'gold')

const getGalleryImages = (product, tone) => {
  const toneLabel = getToneLabel(tone)

  return product.galleryScenes.map((scene, index) => ({
    id: `${product.id}-${toneLabel}-${scene.key}-${index + 1}`,
    titleId: `${product.id}-gallery-title-${toneLabel}-${scene.key}`,
    descId: `${product.id}-gallery-desc-${toneLabel}-${scene.key}`,
    alt: `${product.name} ${scene.altLabel}`,
    description: scene.prompt.replace('{tone}', toneLabel),
  }))
}

const GalleryThumb = ({ image, isActive, onClick }) => (
  <button
    type="button"
    className={`overflow-hidden rounded-[1.5rem] border bg-velmora-sand transition ${
      isActive ? 'border-velmora-bronze shadow-soft' : 'border-velmora-mist/20'
    }`}
    onClick={onClick}
    aria-label={`Show ${image.alt}`}
  >
    <img
      alt={image.alt}
      className="aspect-square w-24 object-cover"
      data-strk-img-id={image.id}
      data-strk-img={`[${image.descId}] [${image.titleId}]`}
      data-strk-img-ratio="1x1"
      data-strk-img-width="320"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
    <span id={image.titleId} className="sr-only">
      {image.alt}
    </span>
    <span id={image.descId} className="sr-only">
      {image.description}
    </span>
  </button>
)

const GalleryStage = ({ image }) => (
  <img
    key={image.id}
    alt={image.alt}
    className="aspect-[4/5] w-full object-cover"
    data-strk-img-id={image.id}
    data-strk-img={`[${image.descId}] [${image.titleId}]`}
    data-strk-img-ratio="3x4"
    data-strk-img-width="1200"
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
  />
)

const ProductGallery = ({ product, tone }) => {
  const containerRef = useRef(null)
  const galleryImages = useMemo(() => getGalleryImages(product, tone), [product, tone])
  const [activeIndex, setActiveIndex] = useState(0)

  useLoadImages(containerRef, [product.id, tone, activeIndex])

  useEffect(() => {
    setActiveIndex(0)
  }, [tone, product.id])

  const activeImage = galleryImages[activeIndex] || galleryImages[0]

  return (
    <div ref={containerRef} className="grid gap-4 lg:grid-cols-[110px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {galleryImages.map((image, index) => (
          <GalleryThumb
            key={image.titleId}
            image={image}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-sand shadow-card lg:order-2">
        <GalleryStage image={activeImage} />
      </div>
    </div>
  )
}

export default ProductGallery
