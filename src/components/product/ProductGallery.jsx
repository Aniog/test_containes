const placeholderSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const ProductGallery = ({ product, activeImage, onSelectImage }) => {
  const images = [
    { id: product.imageId, ratio: '3x4' },
    { id: product.altImageId, ratio: '3x4' },
    { id: product.detailImageId, ratio: '3x4' },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-[88px_minmax(0,1fr)]">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
        {images.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => onSelectImage(image.id)}
            className={`overflow-hidden rounded-2xl border bg-sand ${
              activeImage === image.id ? 'border-ink' : 'border-line'
            }`}
          >
            <img
              alt={product.name}
              src={placeholderSrc}
              data-strk-img-id={image.id}
              data-strk-img={`[${product.detailDescriptionId}] [${product.detailTitleId}]`}
              data-strk-img-ratio={image.ratio}
              data-strk-img-width="260"
              className="h-24 w-20 object-cover md:h-28 md:w-[88px]"
            />
          </button>
        ))}
      </div>
      <div className="order-1 relative overflow-hidden rounded-[2rem] bg-sand md:order-2">
        {images.map((image) => (
          <img
            key={`${image.id}-main`}
            alt={product.name}
            src={placeholderSrc}
            data-strk-img-id={image.id}
            data-strk-img={`[${product.detailDescriptionId}] [${product.detailTitleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            className={`aspect-[4/5] h-full w-full object-cover ${
              activeImage === image.id ? 'block' : 'hidden'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
