import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/components/layout/CartContext.jsx'

export default function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart()

  return (
    <article className="group relative bg-velmora-porcelain text-velmora-ink shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-mist">
          <div
            className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            data-strk-bg-id={product.imageId}
            data-strk-bg={`[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width={priority ? '900' : '700'}
            role="img"
            aria-label={`${product.name} gold jewelry`}
          />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            data-strk-bg-id={product.hoverImageId}
            data-strk-bg={`[${product.id}-wear-context] [${product.titleId}]`}
            data-strk-bg-ratio="4x3"
            data-strk-bg-width={priority ? '900' : '700'}
            role="img"
            aria-label={`${product.name} worn close-up`}
          />
          <span id={`${product.id}-wear-context`} className="sr-only">
            Worn on model warm gold jewelry editorial close up
          </span>
          <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 bg-velmora-ink px-4 py-3 text-xs font-semibold uppercase tracking-luxe text-velmora-porcelain transition hover:bg-velmora-gold hover:text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold"
              onClick={(event) => {
                event.preventDefault()
                addToCart(product)
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="border-t border-velmora-mist p-5">
        <div className="mb-2 flex items-center justify-between gap-4 text-[0.68rem] uppercase tracking-luxe text-velmora-gold-dark">
          <span>{product.category}</span>
          <span>${product.price}</span>
        </div>
        <Link to={`/product/${product.id}`} className="text-velmora-ink transition hover:text-velmora-gold-dark">
          <h3 id={product.titleId} className="font-serif text-xl uppercase leading-tight tracking-luxe">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="mt-3 line-clamp-2 text-sm leading-6 text-velmora-espresso">
          {product.description}
        </p>
      </div>
    </article>
  )
}
