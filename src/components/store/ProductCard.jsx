import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import RatingStars from './RatingStars'

const ProductCard = ({ product, quickAdd = true }) => {
  const { addItem } = useCart()

  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-brand-border bg-brand-pearl shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-elevated">
      <div className="relative overflow-hidden rounded-[2rem] rounded-b-none bg-brand-sand">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt={product.shortName}
              className="pointer-events-none h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              data-strk-img-id={product.imageIds.primary}
              data-strk-img={`[product-${product.slug}-desc] [product-${product.slug}-title] [product-${product.slug}-category]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.shortName} alternate view`}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
              data-strk-img-id={product.imageIds.secondary}
              data-strk-img={`[product-${product.slug}-title] [product-${product.slug}-desc] editorial jewelry alternate view`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>
        {quickAdd ? (
          <div className="absolute inset-x-4 bottom-4 z-10 translate-y-0 opacity-100 transition duration-300 md:pointer-events-none md:translate-y-3 md:opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <button
              type="button"
              onClick={() => addItem(product, product.colors[0], 1)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-ink px-5 py-3 text-sm uppercase tracking-[0.22em] text-brand-ivory shadow-soft transition hover:bg-brand-ink/90"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        ) : null}
      </div>

      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <p
            id={`product-${product.slug}-category`}
            className="text-xs uppercase tracking-[0.32em] text-brand-muted"
          >
            {product.category}
          </p>
          <Link to={`/product/${product.slug}`}>
            <h3
              id={`product-${product.slug}-title`}
              className="font-display text-2xl uppercase tracking-[0.28em] text-brand-ink transition hover:text-brand-gold-deep"
            >
              {product.name}
            </h3>
          </Link>
          <p
            id={`product-${product.slug}-desc`}
            className="text-sm leading-6 text-brand-muted"
          >
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="space-y-2">
            <RatingStars rating={product.rating} reviews={product.reviews} />
            <p className="text-lg font-medium text-brand-ink">${product.price}</p>
          </div>
          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-brand-gold-deep transition hover:gap-3"
          >
            View
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
