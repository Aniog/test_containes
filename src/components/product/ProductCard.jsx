import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, contextId = 'bestsellers-title', compact = false }) {
  const { addToCart } = useCart()

  return (
    <article className="group flex h-full flex-col bg-velmora-cream text-velmora-ink">
      <Link to={`/product/${product.id}`} className="relative block overflow-hidden bg-velmora-linen" aria-label={`View ${product.name}`}>
        <ProductImage
          product={product}
          contextId={contextId}
          slotId={`card-${contextId}`}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
        />
        <ProductImage
          product={product}
          variant="hover"
          contextId={contextId}
          slotId={`card-${contextId}`}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault()
            addToCart(product)
          }}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 bg-velmora-ink px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-cream opacity-0 shadow-soft transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-ink group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </Link>
      <div className={`flex flex-1 flex-col border-x border-b border-velmora-ink/10 ${compact ? 'p-4' : 'p-5'}`}>
        <Link to={`/product/${product.id}`} className="font-serif text-lg uppercase leading-tight tracking-[0.18em] text-velmora-ink transition hover:text-velmora-clay">
          {product.name}
        </Link>
        <p className="mt-2 text-sm text-velmora-ink/65">{product.category}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-sm font-medium text-velmora-ink">${product.price}</span>
          <span className="text-[0.65rem] uppercase tracking-[0.18em] text-velmora-clay">{product.material}</span>
        </div>
      </div>
    </article>
  )
}
