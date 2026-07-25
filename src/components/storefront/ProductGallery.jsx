import StrkImage from './StrkImage'

function ProductGallery({ product, activeIndex, onSelect, titleId, descriptionId }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[84px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.gallery.map((image, index) => (
          <button
            key={image.thumbSlotId}
            type="button"
            onClick={() => onSelect(index)}
            className={`relative overflow-hidden rounded-[1.5rem] border bg-shell ${
              activeIndex === index ? 'border-champagne shadow-whisper' : 'border-mist'
            }`}
          >
            <span id={image.cueId} className="sr-only">
              {image.cueText}
            </span>
            <StrkImage
              alt={image.alt}
              className="aspect-product w-20 object-cover"
              slotId={image.thumbSlotId}
              query={`[${image.cueId}] [${descriptionId}] [${titleId}]`}
              ratio="3x4"
              width="240"
            />
          </button>
        ))}
      </div>
      <div className="order-1 rounded-[2rem] bg-shell p-4 shadow-velvet lg:order-2 lg:p-5">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-glow">
          {product.gallery.map((image, index) => (
            <StrkImage
              key={image.mainSlotId}
              alt={image.alt}
              className={`aspect-product w-full object-cover transition-all duration-500 ease-editorial ${
                activeIndex === index ? 'relative opacity-100' : 'absolute inset-0 opacity-0'
              }`}
              slotId={image.mainSlotId}
              query={`[${image.cueId}] [${descriptionId}] [${titleId}]`}
              ratio="3x4"
              width="1200"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
