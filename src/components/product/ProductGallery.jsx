const ProductGallery = ({ product, galleryImages, activeImage, onSelectImage }) => {

  return (
    <div className="grid gap-4 lg:grid-cols-[110px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {galleryImages.map((image) => (
          <button
            key={image.id}
            type="button"
            onClick={() => onSelectImage(image)}
            className={`overflow-hidden rounded-[1.5rem] border bg-velmora-pearl ${
              activeImage.id === image.id ? 'border-velmora-bronze' : 'border-velmora-line'
            }`}
          >
            <img
              src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
              alt={image.alt}
              data-strk-img-id={`${image.id}-thumb`}
              data-strk-img={`[product-${product.id}-description] [product-${product.id}-name] [product-${product.id}-material] [product-${product.id}-category] [product-${product.id}-${image.id}-variant]`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="300"
              className="h-24 w-24 object-cover lg:h-28 lg:w-full"
            />
          </button>
        ))}
      </div>
      <div className="order-1 relative overflow-hidden rounded-[2rem] border border-velmora-line bg-velmora-pearl lg:order-2">
        {galleryImages.map((image) => (
          <img
            key={`${image.id}-active`}
            src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="
            alt={image.alt}
            data-strk-img-id={`${image.id}-active`}
            data-strk-img={`[product-${product.id}-description] [product-${product.id}-name] [product-${product.id}-material] [product-${product.id}-category] [product-${product.id}-${image.id}-variant]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1400"
            className={`absolute inset-0 h-full min-h-[420px] w-full object-cover transition duration-300 ${
              activeImage.id === image.id ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />
        ))}
        <div className="min-h-[420px]" />
      </div>
    </div>
  )
}

export default ProductGallery
