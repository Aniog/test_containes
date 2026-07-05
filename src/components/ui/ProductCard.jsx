import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatCurrency } from '@/data/store'
import { useCart } from '@/context/CartContext'
import RatingStars from './RatingStars'

function ProductCard({ product, instanceKey = 'default' }) {
  const { addItem } = useCart()
  const titleId = `product-card-title-${instanceKey}-${product.slug}`
  const descId = `product-card-desc-${instanceKey}-${product.slug}`
  const altId = `product-card-alt-${instanceKey}-${product.slug}`

  return (
    <article className="group rounded-[28px] border border-line bg-pearl p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-luxe md:p-5">
      <div className="relative overflow-hidden rounded-[24px] bg-ivory">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-0"
              data-strk-img-id={`product-primary-${instanceKey}-${product.slug}`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <img
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
              data-strk-img-id={`product-secondary-${instanceKey}-${product.slug}`}
              data-strk-img={`[${altId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </Link>

        <button
          type="button"
          className="absolute inset-x-4 bottom-4 inline-flex items-center justify-center gap-2 rounded-full bg-velvet px-4 py-3 text-sm uppercase tracking-[0.16em] text-ivory opacity-100 transition duration-300 hover:bg-velvet-soft md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          onClick={() => addItem(product, product.tones[0], 1)}
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="mt-5 space-y-3">
        <div className="space-y-2">
          <RatingStars rating={product.rating} reviews={product.reviews} />
          <Link to={`/product/${product.slug}`} className="block space-y-2">
            <h3 id={titleId} className="font-serif text-2xl uppercase tracking-luxe text-ink">
              {product.name}
            </h3>
            <p id={descId} className="text-sm text-truffle">
              {product.shortDescription}
            </p>
          </Link>
          <span id={altId} className="sr-only">
            Alternate editorial styling view with warm gold highlights.
          </span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-sm uppercase tracking-[0.22em] text-truffle">
            {product.category}
          </span>
          <span className="text-lg font-medium text-ink">{formatCurrency(product.price)}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
