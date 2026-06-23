import { useEffect, useState } from 'react'

function ProductGallery({ product }) {
  const galleryImages = [
    {
      id: product.imageId,
      label: 'Front view',
      queryId: `${product.id}-gallery-front`,
      query: `[${product.id}-type] [${product.id}-name] [product-gallery-title]`,
    },
    {
      id: product.secondaryImageId,
      label: 'Detail view',
      queryId: `${product.id}-gallery-detail`,
      query: `[${product.id}-desc] [${product.id}-name] [product-gallery-title]`,
    },
    {
      id: product.lifestyleImageId,
      label: 'On-model view',
      queryId: `${product.id}-gallery-lifestyle`,
      query: `[${product.id}-story] [${product.id}-name] [product-gallery-title]`,
    },
  ]

  const [activeImageId, setActiveImageId] = useState(galleryImages[0].queryId)

  useEffect(() => {
    setActiveImageId(galleryImages[0].queryId)
  }, [product.id])

  const activeImage = galleryImages.find((image) => image.queryId === activeImageId) ?? galleryImages[0]

  return (
    <section className="grid gap-4 lg:grid-cols-[100px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {galleryImages.map((image) => (
          <button
            className={`overflow-hidden rounded-[1.4rem] border bg-stone-900 transition ${
              activeImageId === image.queryId
                ? 'border-amber-200 shadow-[0_12px_35px_rgba(231,198,134,0.12)]'
                : 'border-stone-800 hover:border-stone-600'
            }`}
            key={image.queryId}
            onClick={() => setActiveImageId(image.queryId)}
            type="button"
          >
            <img
              alt={`${product.name} ${image.label}`}
              className="h-24 w-20 object-cover"
              data-strk-img={image.query}
              data-strk-img-id={`thumb-${image.id}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="260"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2.4rem] border border-stone-800/80 bg-stone-900 lg:order-2">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            alt={product.name}
            className="h-full w-full object-cover"
            data-strk-img={activeImage.query}
            data-strk-img-id={`primary-${activeImage.id}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>

      <span className="sr-only" id="product-gallery-title">
        Velmora product gallery
      </span>
      <span className="sr-only" id={`${product.id}-type`}>
        {product.category}
      </span>
      <span className="sr-only" id={`${product.id}-name`}>
        {product.name}
      </span>
      <span className="sr-only" id={`${product.id}-desc`}>
        {product.shortDescription}
      </span>
      <span className="sr-only" id={`${product.id}-story`}>
        {product.description}
      </span>
    </section>
  )
}

export default ProductGallery
