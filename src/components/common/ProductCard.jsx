import { Link } from 'react-router-dom'
import EditorialImage from './EditorialImage.jsx'
import LuxuryButton from './LuxuryButton.jsx'
import Rating from './Rating.jsx'
import { formatPrice } from '@/data/products.js'
import { useCart } from './CartContext.jsx'

export default function ProductCard({ product, priority = '' }) {
  const { addToCart } = useCart()
  const titleId = `product-${product.id}-title${priority}`
  const descId = `product-${product.id}-desc${priority}`

  return (
    <article className="group relative bg-velmora-cream text-velmora-ink">
      <div className="relative aspect-[4/5] overflow-hidden bg-velmora-parchment">
        <Link to={`/product/${product.id}`} className="absolute inset-0 block overflow-hidden">
          <EditorialImage
            id={`product-primary-${product.id}${priority}-a1`}
            query={`[${descId}] [${titleId}]`}
            ratio="4x3"
            width="800"
            alt={product.name}
            className="group-hover:scale-105"
          />
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <EditorialImage
              id={`product-hover-${product.id}${priority}-b2`}
              query={`[${titleId}] [${descId}]`}
              ratio="4x3"
              width="800"
              alt={`${product.name} detail`}
              className="scale-105"
            />
          </div>
        </Link>
        <div className="absolute inset-x-4 bottom-4 z-10 translate-y-0 opacity-100 transition-all duration-300 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <LuxuryButton
            type="button"
            className="w-full bg-velmora-cream/95 backdrop-blur hover:bg-velmora-champagne"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </LuxuryButton>
        </div>
      </div>
      <div className="border-b border-velmora-champagne/30 px-1 py-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-[0.62rem] font-bold uppercase tracking-luxury text-velmora-stone">
            {product.category}
          </p>
          <Rating rating={product.rating} reviews={product.reviews} compact />
        </div>
        <Link to={`/product/${product.id}`}>
          <h3
            id={titleId}
            className="font-serif text-xl font-semibold uppercase tracking-product text-velmora-ink transition-colors duration-300 group-hover:text-velmora-antique"
          >
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-stone">
          {product.description}
        </p>
        <p className="mt-4 font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
      </div>
    </article>
  )
}
