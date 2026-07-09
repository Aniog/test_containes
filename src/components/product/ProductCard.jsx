import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { PLACEHOLDER } from '@/hooks/useStrkImages'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  const handleQuickAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, { variant: product.variants[0], quantity: 1 })
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative img-swap overflow-hidden bg-cream aspect-[4/5]">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt={product.name}
          className="img-primary absolute inset-0 w-full h-full object-cover"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.hoverImgId}
          data-strk-img={`[${product.descId}] ${product.name} worn on model`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          src={PLACEHOLDER}
          alt=""
          aria-hidden="true"
          className="img-secondary absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
        />

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-ivory/95 backdrop-blur-sm text-ink text-xs uppercase tracking-[0.15em] py-3 hover:bg-gold hover:text-ivory transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h3
          id={product.titleId}
          className="font-serif text-base md:text-lg uppercase tracking-[0.12em] text-ink"
        >
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.short}
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-1.5">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-xs text-stone">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <p className="text-sm text-ink mt-1.5 tracking-wide">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  )
}
