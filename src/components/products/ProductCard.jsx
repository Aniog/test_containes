import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/utils.js'
import RatingStars from './RatingStars.jsx'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900/70 shadow-xl shadow-stone-950/20 transition hover:-translate-y-1 hover:border-amber-200/30">
      <div className="relative overflow-hidden">
        <Link to={`/products/${product.slug}`} className="block aspect-[4/5] bg-stone-950">
          <img alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-0" data-strk-img-id={`product-${product.id}-image-0`} src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
          <img alt={product.name} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100" data-strk-img-id={`product-${product.id}-image-1`} src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" />
        </Link>
        <button type="button" className="absolute bottom-4 left-4 right-4 rounded-full bg-stone-950/90 px-4 py-3 text-xs font-medium uppercase tracking-[0.26em] text-stone-50 opacity-100 shadow-lg shadow-black/30 transition hover:bg-amber-200 hover:text-stone-950 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100" onClick={() => addItem(product, 'Gold Tone', 1)}>
          Add to Cart
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-amber-200">{product.category}</p>
          <div className="space-y-2">
            <Link to={`/products/${product.slug}`} className="block font-display text-2xl leading-none tracking-luxe text-stone-100">
              {product.name}
            </Link>
            <p className="text-sm leading-6 text-stone-300">{product.shortDescription}</p>
          </div>
        </div>
        <div className="mt-auto space-y-3">
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-stone-100">{formatPrice(product.price)}</p>
        </div>
      </div>
    </article>
  )
}
