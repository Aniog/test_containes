import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { IMAGE_PLACEHOLDER } from '@/data/site'
import { formatPrice } from '@/lib/utils'

export default function ProductCard({ product, scopeId }) {
  const { addItem } = useCart()
  const baseId = `${scopeId}-${product.slug}`

  return (
    <article className="group flex h-full flex-col gap-5">
      <div className="relative overflow-hidden rounded-3xl border border-champagne bg-surface shadow-card transition-transform duration-500 group-hover:-translate-y-1">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-product overflow-hidden">
            <img
              src={IMAGE_PLACEHOLDER}
              alt={product.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
              data-strk-img-id={`${baseId}-primary-img`}
              data-strk-img={`[${baseId}-detail] [${baseId}-title]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
            />
            <img
              src={IMAGE_PLACEHOLDER}
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              data-strk-img-id={`${baseId}-secondary-img`}
              data-strk-img={`[${baseId}-alternate] [${baseId}-title]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="700"
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="absolute inset-x-4 bottom-4 flex items-center justify-center gap-2 rounded-full bg-truffle px-4 py-3 text-sm font-medium text-pearl opacity-100 transition duration-300 hover:bg-espresso md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.22em] text-mocha">{product.category}</p>
        <Link to={`/product/${product.slug}`} className="space-y-2">
          <h3 id={`${baseId}-title`} className="font-serif text-2xl uppercase tracking-luxe text-espresso">
            {product.name}
          </h3>
          <p id={`${baseId}-detail`} className="text-sm leading-7 text-mocha">
            {product.shortDescription}
          </p>
          <p id={`${baseId}-alternate`} className="sr-only">
            {product.description}
          </p>
        </Link>
        <div className="flex items-center justify-between border-t border-champagne pt-4 text-sm text-espresso">
          <span>{product.material}</span>
          <span className="font-medium">{formatPrice(product.price)}</span>
        </div>
      </div>
    </article>
  )
}
