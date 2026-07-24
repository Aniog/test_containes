import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatCurrency } from '../../data/store'
import { useCart } from '../../context/CartContext'
import Stars from './Stars'

const ProductCard = ({ product, scope = 'default' }) => {
  const { addToCart } = useCart()

  const handleQuickAdd = (event) => {
    event.preventDefault()
    event.stopPropagation()
    addToCart(product, { tone: 'Gold', quantity: 1 })
  }

  return (
    <Link to={`/product/${product.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-stone-200/10 bg-stone-900/70 shadow-[0_25px_80px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(0,0,0,0.38)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-950">
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.shortDescription}</span>
        <span id={product.primaryCueId} className="sr-only">{product.primaryCue}</span>
        <span id={product.secondaryCueId} className="sr-only">{product.secondaryCue}</span>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={product.name} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-0" data-strk-img-id={`${scope}-${product.slug}-primary-2f1a`} data-strk-img={`[${product.primaryCueId}] [${product.descId}] [${product.titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="900" />
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt={`${product.name} alternate view`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-100" data-strk-img-id={`${scope}-${product.slug}-secondary-7b8e`} data-strk-img={`[${product.secondaryCueId}] [${product.descId}] [${product.titleId}]`} data-strk-img-ratio="4x3" data-strk-img-width="900" />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="rounded-full border border-stone-50/20 bg-stone-950/60 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-stone-100 backdrop-blur">{product.badge}</span>
          <span className="rounded-full bg-stone-50/95 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-stone-950">{formatCurrency(product.price)}</span>
        </div>
        <button type="button" onClick={handleQuickAdd} className="absolute inset-x-4 bottom-4 inline-flex translate-y-2 items-center justify-center gap-2 rounded-full bg-amber-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-stone-950 opacity-100 transition duration-300 hover:bg-amber-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-stone-400">{product.category}</p>
          <h3 className="font-display text-2xl uppercase leading-tight tracking-product text-stone-50">{product.name}</h3>
          <p className="text-sm leading-6 text-stone-300">{product.shortDescription}</p>
        </div>
        <div className="mt-auto flex items-center justify-between gap-4">
          <Stars value={product.rating} reviews={product.reviews} light />
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
