import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { formatPrice, placeholderImage } from '@/data/storeData'

function StarRating({ rating, reviewCount, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1 text-champagne">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className="text-sm leading-none">★</span>
        ))}
      </div>
      <p className={`text-sm ${light ? 'text-ivory/78' : 'text-ink/70'}`}>
        {rating.toFixed(1)} <span className="opacity-70">({reviewCount})</span>
      </p>
    </div>
  )
}

function ProductCard({ product, sectionId, titleId, descriptionId }) {
  const { addItem } = useCart()
  const baseId = `${sectionId}-${product.slug}`

  return (
    <article className="group rounded-[2rem] border border-mist/70 bg-ivory p-3 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:p-4">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-sand">
        <Link to={`/product/${product.slug}`} className="block">
          <img
            src={placeholderImage}
            alt={product.shortName}
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:opacity-0"
            data-strk-img-id={`${baseId}-primary-3bc52d`}
            data-strk-img={`[${baseId}-primary-prompt] [${baseId}-desc] [${baseId}-title] [${descriptionId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
          />
          <img
            src={placeholderImage}
            alt={`${product.shortName} alternate view`}
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
            data-strk-img-id={`${baseId}-secondary-7ea14f`}
            data-strk-img={`[${baseId}-secondary-prompt] [${baseId}-desc] [${baseId}-title] [${descriptionId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
          />
        </Link>

        <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-100 transition duration-300 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <button
            type="button"
            onClick={() => addItem(product, product.tones[0], 1)}
            className="w-full rounded-full bg-ink px-4 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ivory transition hover:bg-obsidian"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="space-y-3 px-2 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-champagne">{product.category}</p>
            <Link to={`/product/${product.slug}`}>
              <h3 id={`${baseId}-title`} className="mt-2 text-xl uppercase tracking-[0.16em] text-ink sm:text-2xl">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="font-serif text-2xl text-ink">{formatPrice(product.price)}</p>
        </div>

        <p id={`${baseId}-desc`} className="text-sm leading-7 text-ink/70">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between gap-4">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          <p className="text-xs uppercase tracking-[0.22em] text-ink/50">{product.type}</p>
        </div>
      </div>

      <p id={`${baseId}-primary-prompt`} className="sr-only">
        {product.primaryPrompt}
      </p>
      <p id={`${baseId}-secondary-prompt`} className="sr-only">
        {product.secondaryPrompt}
      </p>
    </article>
  )
}

function ProductGrid({ products, sectionId, titleId, descriptionId }) {
  if (products.length === 0) {
    return (
      <div className="rounded-[2rem] border border-dashed border-mist bg-ivory p-8 text-center shadow-card">
        <p className="text-xs uppercase tracking-luxe text-champagne">No matches</p>
        <h3 className="mt-4 text-3xl">No pieces match your current filters</h3>
        <p className="mt-3 text-sm leading-7 text-ink/70">
          Try clearing one or two filters to see more of the collection.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
          sectionId={sectionId}
          titleId={titleId}
          descriptionId={descriptionId}
        />
      ))}
    </div>
  )
}

export { StarRating }
export default ProductGrid
