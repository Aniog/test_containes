import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductCard({
  product,
  scope = 'product-card',
  sectionTitleId,
  sectionDescriptionId,
}) {
  const { addItem } = useCart()
  const titleId = `${scope}-${product.id}-title`
  const descriptionId = `${scope}-${product.id}-description`
  const alternateId = `${scope}-${product.id}-alternate`
  const imageQuery = [descriptionId, titleId, sectionDescriptionId, sectionTitleId]
    .filter(Boolean)
    .map((id) => `[${id}]`)
    .join(' ')
  const altQuery = [alternateId, titleId, sectionDescriptionId, sectionTitleId]
    .filter(Boolean)
    .map((id) => `[${id}]`)
    .join(' ')

  return (
    <article className="group flex h-full flex-col gap-4 text-ink">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-sand shadow-card">
        <Link
          to={`/product/${product.id}`}
          className="block"
          aria-label={`View ${product.name}`}
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-0"
              data-strk-img-id={`${scope}-${product.id}-primary`}
              data-strk-img={imageQuery}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
              data-strk-img-id={`${scope}-${product.id}-secondary`}
              data-strk-img={altQuery}
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>

        <button
          type="button"
          onClick={() => addItem(product, product.variants[0], 1)}
          className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-medium text-ivory opacity-100 shadow-soft transition duration-300 hover:bg-gold hover:text-ink md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-1">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-mocha">
            {product.category}
          </span>
          <span className="text-sm text-mocha">${product.price}</span>
        </div>

        <div className="space-y-2">
          <Link to={`/product/${product.id}`}>
            <h3
              id={titleId}
              className="font-display text-xl uppercase tracking-product text-ink transition duration-300 group-hover:text-gold"
            >
              {product.name}
            </h3>
          </Link>
          <p id={descriptionId} className="text-sm leading-6 text-mocha">
            {product.shortDescription}
          </p>
          <p id={alternateId} className="sr-only">
            Warm editorial close-up of {product.name} on skin with natural glow.
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-mocha/20 bg-ivory px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-mocha"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
