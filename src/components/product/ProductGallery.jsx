function ProductGallery({ product, activeIndex, onChange }) {
  const galleryImages = product.shotLabels.map((label, index) => {
    const base = `gallery-${product.slug}-${index}`

    return {
      id: base,
      label,
      mainTitleId: `${base}-main-title`,
      mainDescId: `${base}-main-desc`,
      thumbTitleId: `${base}-thumb-title`,
      thumbDescId: `${base}-thumb-desc`,
    }
  })

  const activeImage = galleryImages[activeIndex]

  return (
    <div>
      <div className="overflow-hidden rounded-panel bg-velmora-mist shadow-soft">
        <div className="aspect-[4/5]">
          <span id={activeImage.mainDescId} className="sr-only">{activeImage.label}</span>
          <span id={activeImage.mainTitleId} className="sr-only">{product.name}</span>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="h-full w-full object-cover"
            data-strk-img-id={`${activeImage.id}-main-image`}
            data-strk-img={`[${activeImage.mainDescId}] [${activeImage.mainTitleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => onChange(index)}
            className={`overflow-hidden rounded-2xl border bg-velmora-mist ${activeIndex === index ? 'border-velmora-gold shadow-card' : 'border-velmora-line'}`}
            aria-label={`View image ${index + 1}`}
          >
            <div className="aspect-square">
              <span id={image.thumbDescId} className="sr-only">{image.label}</span>
              <span id={image.thumbTitleId} className="sr-only">{product.name}</span>
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
                data-strk-img-id={`${image.id}-thumbnail-image`}
                data-strk-img={`[${image.thumbDescId}] [${image.thumbTitleId}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
