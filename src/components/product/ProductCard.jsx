import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductImage from './ProductImage'
import Rating from './Rating'

export default function ProductCard({ product, onAddToCart, compact = false, contextQuery = '' }) {
  return (
    <article className="group relative overflow-hidden bg-velmora-cream text-velmora-espresso shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <Link to={`/products/${product.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 focus:ring-offset-velmora-ivory">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-mist">
          <ProductImage
            product={product}
            variant="primary"
            ratio="4x3"
            width="800"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            querySuffix={contextQuery}
          />
          <ProductImage
            product={product}
            variant="hover"
            ratio="4x3"
            width="800"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition duration-700 group-hover:scale-100 group-hover:opacity-100"
            querySuffix={contextQuery}
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault()
                onAddToCart(product)
              }}
              className="flex w-full items-center justify-center gap-2 bg-velmora-oxblood px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cream shadow-soft transition hover:bg-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            >
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className={`${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
        <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-velmora-umber">
          {product.category}
        </p>
        <h3 id={`product-${product.id}-title`} className="font-serif text-lg uppercase leading-tight tracking-[0.18em] text-velmora-espresso sm:text-xl">
          <Link to={`/products/${product.slug}`} className="text-velmora-espresso transition hover:text-velmora-oxblood">
            {product.name}
          </Link>
        </h3>
        <p id={`product-${product.id}-desc`} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-umber">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-sans text-base font-bold text-velmora-espresso">${product.price}</span>
          {!compact && <Rating rating={product.rating} reviews={product.reviews} />}
        </div>
      </div>
    </article>
  )
}
