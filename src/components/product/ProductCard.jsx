import { Link } from 'react-router-dom'
import { useCart } from '@/components/cart/CartContext.jsx'
import { formatPrice } from '@/data/products.js'
import { imagePlaceholder } from '@/lib/imageHelpers.js'
import Stars from './Stars.jsx'

export default function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart()
  const titleId = `product-${product.id}-title`
  const descId = `product-${product.id}-desc`
  const categoryId = `product-${product.id}-category`

  return (
    <article className="group text-velmora-espresso">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative overflow-hidden bg-velmora-champagne shadow-sm">
          <div className="aspect-[4/5]">
            <img
              alt={product.name}
              loading={priority ? 'eager' : 'lazy'}
              className="h-full w-full object-cover transition duration-700 group-hover:opacity-0 group-hover:scale-105"
              data-strk-img-id={`product-primary-${product.id}-a93f2`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={imagePlaceholder}
            />
            <img
              alt={`${product.name} worn detail`}
              loading="lazy"
              className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
              data-strk-img-id={`product-hover-${product.id}-e71bc`}
              data-strk-img={`[${titleId}] [${categoryId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={imagePlaceholder}
            />
          </div>
          <div className="absolute left-4 top-4 rounded-full bg-velmora-cream/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-velmora-espresso backdrop-blur">
            {product.badge}
          </div>
        </div>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              addToCart(product)
            }}
            className="absolute bottom-4 left-4 right-4 translate-y-3 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cream opacity-0 shadow-soft transition duration-300 hover:bg-velmora-gold group-hover:translate-y-0 group-hover:opacity-100"
          >
            Add to Cart
          </button>
      </Link>
      <div className="pt-5">
        <p id={categoryId} className="mb-2 text-xs uppercase tracking-[0.24em] text-velmora-gold">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3
            id={titleId}
            className="font-serif text-xl uppercase tracking-[0.2em] text-velmora-espresso transition hover:text-velmora-gold"
          >
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-2 min-h-12 text-sm leading-6 text-velmora-mocha">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <Stars rating={product.rating} reviews={product.reviews} />
          <p className="font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
        </div>
      </div>
    </article>
  )
}
