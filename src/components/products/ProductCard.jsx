import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getStrkImageUrl } from '@/lib/strkImages'

const ProductCard = ({ product, onAddToCart, priority = false }) => {
  const titleId = `product-card-${product.slug}-title`
  const descId = `product-card-${product.slug}-desc`
  const sectionId = `product-card-${product.slug}-section`
  const primaryImageId = `product-primary-${product.slug}-f2a8`
  const secondaryImageId = `product-secondary-${product.slug}-e6c1`

  return (
    <article className="group rounded-[2rem] border border-stone-200/80 bg-white/80 p-3 shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-velvet">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-brand-surface/40">
        <Link to={`/products/${product.slug}`} className="block">
          <span id={sectionId} className="sr-only">
            Velmora demi-fine jewelry product card
          </span>
          <img
            src={getStrkImageUrl(primaryImageId)}
            alt={product.name}
            loading={priority ? 'eager' : 'lazy'}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            data-strk-img-id={primaryImageId}
            data-strk-img={`[${descId}] [${titleId}] [${sectionId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
          />
          <img
            src={getStrkImageUrl(secondaryImageId)}
            alt={`${product.name} alternate view`}
            loading="lazy"
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-700 group-hover:opacity-100"
            data-strk-img-id={secondaryImageId}
            data-strk-img={`[${descId}] [${titleId}] [${sectionId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
          />
        </Link>
        <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-md:pointer-events-auto max-md:translate-y-0 max-md:opacity-100">
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="pointer-events-auto flex w-full items-center justify-center gap-2 rounded-full bg-brand-ink px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-stone-50 transition hover:bg-brand-gold hover:text-brand-ink"
          >
            <ShoppingBag className="h-4 w-4" />
            Quick add
          </button>
        </div>
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.32em] text-brand-gold">
              {product.category}
            </p>
            <Link to={`/products/${product.slug}`}>
              <h3 id={titleId} className="font-serif text-2xl uppercase tracking-luxe text-brand-text">
                {product.name}
              </h3>
            </Link>
          </div>
          <span className="text-sm font-medium text-brand-text">${product.price}</span>
        </div>
        <p id={descId} className="mt-3 text-sm leading-7 text-stone-600">
          {product.shortDescription}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
