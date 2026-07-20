import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, compact = false }) {
  const { addItem } = useCart()

  return (
    <article className="group relative text-velmora-espresso">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-velmora-cream">
        <div className="relative aspect-[4/5] overflow-hidden border border-velmora-linen">
          <ProductImage product={product} imgId={product.imgId} className="transition duration-700 group-hover:scale-105 group-hover:opacity-0" />
          <ProductImage product={product} imgId={product.hoverImgId} className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              addItem(product)
            }}
            className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cream opacity-0 shadow-soft transition duration-300 hover:bg-velmora-bronze group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ShoppingBag className="h-4 w-4" /> Add to Cart
          </button>
        </div>
      </Link>
      <div className="pt-5">
        <div className="mb-2 flex items-center gap-1 text-velmora-champagne" aria-label="5 star rating">
          {[0, 1, 2, 3, 4].map((star) => (
            <Star key={star} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
        <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-[0.22em] text-velmora-espresso md:text-base">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        {!compact && <p id={product.descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-mocha">{product.description}</p>}
        <p className="mt-3 text-sm font-semibold tracking-[0.14em] text-velmora-espresso">${product.price}</p>
      </div>
    </article>
  )
}
