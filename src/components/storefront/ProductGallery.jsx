import { EditorialImage } from './EditorialImage.jsx'

export function ProductGallery({ product, selectedImageId, onSelectImage }) {
  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`
  const selectedImage = product.gallery.find((image) => image.id === selectedImageId) ?? product.gallery[0]
  const selectedCaptionId = `gallery-${product.id}-${selectedImage.id}-caption`

  return (
    <div className="grid gap-4 lg:grid-cols-[96px,1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
        {product.gallery.map((image) => {
          const captionId = `gallery-${product.id}-${image.id}-caption`
          return (
            <button
              type="button"
              key={image.id}
              onClick={() => onSelectImage(image.id)}
              className={`min-w-[84px] overflow-hidden rounded-2xl border bg-white ${selectedImageId === image.id ? 'border-stone-900' : 'border-stone-200'}`}
            >
              <EditorialImage
                alt={`${product.name} thumbnail`}
                imageId={`thumb-${product.id}-${image.id}`}
                query={`[${captionId}] [${titleId}] [${descId}]`}
                ratio="1x1"
                width="300"
                className="aspect-square w-20 object-cover sm:w-24"
              />
              <span id={captionId} className="sr-only">
                {image.caption}
              </span>
            </button>
          )
        })}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm lg:order-2">
        <EditorialImage
          alt={product.name}
          imageId={`main-${product.id}-${selectedImage.id}`}
          query={`[${selectedCaptionId}] [${titleId}] [${descId}]`}
          ratio={selectedImage.ratio}
          width={selectedImage.width}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
    </div>
  )
}
