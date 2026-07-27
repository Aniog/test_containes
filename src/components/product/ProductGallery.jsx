function ProductGallery({ product }) {
  return (
    <div className="grid gap-4 lg:grid-cols-[100px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
        {product.galleryNotes.map((note, index) => (
          <img
            key={note}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} thumbnail ${index + 1}`}
            className="h-24 w-20 rounded-[1.25rem] border border-stone-200 bg-stone-100 object-cover"
            data-strk-img-id={`thumb-${product.id}-${index}`}
            data-strk-img={`[product-${product.id}-gallery-${index}] [product-${product.id}-title] [product-${product.id}-desc]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="240"
          />
        ))}
      </div>

      <div className="order-1 overflow-hidden rounded-[2rem] bg-stone-100 shadow-xl shadow-stone-900/5 lg:order-2">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="aspect-[4/5] w-full object-cover"
          data-strk-img-id={`pdp-main-${product.id}`}
          data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="1100"
        />
      </div>

      <div className="hidden">
        {product.galleryNotes.map((note, index) => (
          <span key={note} id={`product-${product.id}-gallery-${index}`}>
            {note}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProductGallery
