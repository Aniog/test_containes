import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatCurrency } from '@/lib/formatters'
import { useCart } from '@/context/CartContext.jsx'
import { useState } from 'react'

export default function ProductCard({ product, priority = false }) {
  const { addItem } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const primaryTitleId = `product-${product.id}-title`
  const primaryDescId = `product-${product.id}-desc`
  const secondaryDescId = `product-${product.id}-hover-desc`
  const activeImage = isHovered ? product.gallery[1] || product.gallery[0] : product.gallery[0]

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-velmora-mist bg-velmora-porcelain shadow-velmora transition duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link className="relative overflow-hidden" to={`/product/${product.id}`}>
        <img
          alt={product.shortName}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          data-strk-img-id={activeImage.id}
          data-strk-img={`[${secondaryDescId}] [${primaryDescId}] [${primaryTitleId}]`}
          data-strk-img-ratio={activeImage.ratio}
          data-strk-img-width={priority ? '900' : '700'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 opacity-100 transition sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
          <span className="rounded-full bg-velmora-obsidian/85 px-4 py-2 text-xs uppercase tracking-eyebrow text-velmora-gold backdrop-blur-sm">
            {product.badge}
          </span>
          <button
            className="inline-flex items-center gap-2 rounded-full bg-velmora-gold px-4 py-2 text-xs font-semibold uppercase tracking-eyebrow text-velmora-obsidian shadow-velmora"
            onClick={(event) => {
              event.preventDefault()
              addItem(product)
            }}
            type="button"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 text-velmora-ink">
        <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">
          {product.category}
        </p>
        <Link className="mt-3" to={`/product/${product.id}`}>
          <h3
            id={primaryTitleId}
            className="font-serif text-[1.35rem] uppercase leading-tight tracking-product text-velmora-ink sm:text-[1.5rem]"
          >
            {product.name}
          </h3>
        </Link>
        <p id={primaryDescId} className="mt-3 text-sm leading-7 text-velmora-taupe">
          {product.description}
        </p>
        <span aria-hidden="true" className="hidden" id={secondaryDescId}>
          warm editorial product detail on model wearing {product.shortName}
        </span>
        <div className="mt-5 flex items-center justify-between border-t border-velmora-mist pt-5">
          <span className="text-sm uppercase tracking-product text-velmora-taupe">
            {formatCurrency(product.price)}
          </span>
          <span className="text-xs uppercase tracking-eyebrow text-velmora-gold">
            {product.material}
          </span>
        </div>
      </div>
    </article>
  )
}
