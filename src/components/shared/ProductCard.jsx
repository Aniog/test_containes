import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/utils'

function ProductImage({ product, variant }) {
  const imageId = variant === 'primary' ? product.imgIds.primary : product.imgIds.secondary

  return (
    <img
      alt={product.name}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      data-strk-img-id={imageId}
      data-strk-img={`[${product.descId}] [${product.titleId}]`}
      data-strk-img-ratio="4x3"
      data-strk-img-width="900"
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  )
}

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="group rounded-[2rem] border border-stone-200/80 bg-white/90 p-4 shadow-[0_20px_60px_rgba(28,25,23,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(28,25,23,0.12)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-[1.5rem] bg-stone-100">
        <Link to={`/product/${product.id}`}>
          <div className="aspect-[4/5]">
            <ProductImage product={product} variant={hovered ? 'secondary' : 'primary'} />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => addToCart(product, 1, 'Gold')}
          className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-4 py-3 text-xs uppercase tracking-[0.28em] text-stone-100 opacity-100 transition md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      <div className="space-y-3 px-2 pb-2 pt-5 text-stone-900">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
            {product.badge}
          </span>
          <span className="text-sm text-stone-500">{product.rating.toFixed(1)} ★</span>
        </div>
        <div className="space-y-2">
          <Link to={`/product/${product.id}`}>
            <h3
              id={product.titleId}
              className="font-display text-2xl uppercase tracking-[0.22em] text-stone-900 transition group-hover:text-stone-700"
            >
              {product.name}
            </h3>
          </Link>
          <p id={product.descId} className="text-sm leading-7 text-stone-600">
            {product.shortDescription}
          </p>
        </div>
        <div className="flex items-center justify-between border-t border-stone-200 pt-4">
          <span className="text-sm uppercase tracking-[0.22em] text-stone-500">
            {product.material}
          </span>
          <span className="text-base font-medium text-stone-900">{formatPrice(product.price)}</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
