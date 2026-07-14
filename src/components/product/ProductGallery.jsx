const ProductGallery = ({ product, selectedImage, setSelectedImage }) => {
  const titleId = `${product.id}-gallery-title`
  const descId = `${product.id}-gallery-desc`

  return (
    <div>
      <div className="overflow-hidden rounded-[2rem] border border-mist bg-white shadow-soft">
        <div className="relative aspect-[4/5] w-full">
          {product.gallery.map((image) => (
            <img
              key={image.id}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full object-cover transition duration-300 ${selectedImage.id === image.id ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
              data-strk-img-id={`${image.id}-card`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          ))}
        </div>
      </div>
      <h1 id={titleId} className="sr-only">
        {product.name}
      </h1>
      <p id={descId} className="sr-only">
        {product.shortDescription}
      </p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {product.gallery.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-[1.35rem] border bg-white ${selectedImage.id === image.id ? 'border-bronze' : 'border-mist'}`}
          >
            <img
              alt={image.alt}
              className="aspect-square w-full object-cover"
              data-strk-img-id={`${image.id}-thumb`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
