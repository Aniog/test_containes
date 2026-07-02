import StockImage from './StockImage.jsx'

const ProductCard = ({ product, onAdd, onSelect, compact = false, imageContext = 'product-card' }) => {
  const handleSelect = () => onSelect?.(product)
  const titleId = `${imageContext}-${product.id}-title`
  const descId = `${imageContext}-${product.id}-desc`

  return (
    <article className="group flex h-full flex-col border border-velmora-line/80 bg-velmora-cream text-velmora-ink shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-glow">
      <button
        type="button"
        onClick={handleSelect}
        className="relative block overflow-hidden bg-velmora-champagne/25 text-left"
        aria-label={`View ${product.name}`}
      >
        <StockImage
          id={`${imageContext}-${product.imageId}`}
          query={`[${descId}] [${titleId}]`}
          ratio="3x4"
          width="700"
          alt={product.name}
          className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
        />
        <StockImage
          id={`${imageContext}-${product.hoverImageId}`}
          query={`[${descId}] [${titleId}]`}
          ratio="3x4"
          width="700"
          alt={`${product.name} styled`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex w-full items-center justify-center rounded-full bg-velmora-cream/95 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-soft">
            Quick view
          </span>
        </div>
      </button>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-velmora-clay">
          {product.category}
        </p>
        <button type="button" onClick={handleSelect} className="mt-3 text-left">
          <h3 id={titleId} className="font-serif text-xl font-semibold uppercase leading-tight tracking-[0.2em] text-velmora-ink sm:text-2xl">
            {product.name}
          </h3>
        </button>
        <p id={descId} className={`${compact ? 'sr-only' : 'mt-3 line-clamp-2 text-sm leading-6 text-velmora-forest/80'}`}>
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <span className="font-sans text-base font-semibold text-velmora-ink">${product.price}</span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="rounded-full border border-velmora-gold px-4 py-2 text-[0.67rem] font-extrabold uppercase tracking-[0.22em] text-velmora-ink transition duration-300 hover:bg-velmora-gold hover:text-velmora-ink"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
