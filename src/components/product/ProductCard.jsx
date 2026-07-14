import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'
import { imagePlaceholder } from '@/lib/imagePlaceholder'
import Rating from './Rating'

const ProductCard = ({ product, context = 'product-grid' }) => {
  const { addToCart } = useCart()
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`

  return (
    <article className="group relative bg-velmora-pearl text-velmora-ink shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/product/${product.id}`} className="block focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-parchment">
          <img
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            alt={`${product.name} jewelry`}
            data-strk-img-id={`${context}-${product.id}-primary`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={imagePlaceholder}
          />
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            alt={`${product.name} styled on model`}
            data-strk-img-id={`${context}-${product.id}-secondary`}
            data-strk-img={`[${descId}] [${titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src={imagePlaceholder}
          />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              addToCart(product)
            }}
            className="absolute bottom-4 left-4 right-4 translate-y-3 bg-velmora-ink px-5 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-ivory opacity-0 shadow-editorial transition duration-300 hover:bg-velmora-espresso focus:translate-y-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-velmora-champagne group-hover:translate-y-0 group-hover:opacity-100"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </span>
          </button>
        </div>
        <div className="space-y-3 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-widerLuxury text-velmora-bronze">{product.category}</p>
              <h3 id={titleId} className="font-serif text-xl font-semibold uppercase leading-tight tracking-luxe text-velmora-ink">
                {product.name}
              </h3>
            </div>
            <p className="font-serif text-2xl font-semibold text-velmora-espresso">{formatPrice(product.price)}</p>
          </div>
          <p id={descId} className="line-clamp-2 text-sm leading-6 text-velmora-espresso/72">
            {product.description}
          </p>
          <Rating rating={product.rating} reviews={product.reviews} compact />
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
