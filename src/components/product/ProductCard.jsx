import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

export default function ProductCard({ product, context = 'product-card', extraQueryIds = [] }) {
  const { addToCart } = useCart()
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`
  const query = [`[${descId}]`, `[${titleId}]`, ...extraQueryIds.map((id) => `[${id}]`)].join(' ')
  return (
    <article className="group text-velmora-ink">
      <Link to={`/products/${product.slug}`} className="block overflow-hidden bg-velmora-cream transition duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-velvet">
        <div className="relative aspect-product overflow-hidden border border-velmora-sand/70 bg-velmora-sand/40">
          <img alt={product.name} className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:opacity-0 group-hover:scale-105" data-strk-img-id={`${context}-${product.id}-primary-vm`} data-strk-img={query} data-strk-img-ratio="4x3" data-strk-img-width="700" src={product.images.primary} />
          <img alt={`${product.name} styled`} className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 ease-out group-hover:opacity-100 group-hover:scale-105" data-strk-img-id={`${context}-${product.id}-hover-vm`} data-strk-img={query} data-strk-img-ratio="4x3" data-strk-img-width="700" src={product.images.hover} />
          <span className="absolute left-4 top-4 rounded-full bg-velmora-cream/90 px-3 py-1 text-xs font-bold uppercase tracking-nav text-velmora-ink">Bestseller</span>
        </div>
      </Link>
      <div className="border-x border-b border-velmora-sand/70 bg-velmora-cream p-4 sm:p-5">
        <Link to={`/products/${product.slug}`}><h3 id={titleId} className="font-display text-lg font-semibold uppercase tracking-product text-velmora-ink sm:text-xl">{product.name}</h3></Link>
        <p id={descId} className="mt-2 line-clamp-2 text-sm leading-6 text-velmora-taupe">{product.short}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-body text-sm font-bold text-velmora-ink">${product.price}</span>
          <button type="button" onClick={() => addToCart(product)} className="inline-flex items-center gap-2 rounded-full border border-velmora-gold/70 px-4 py-2 text-xs font-extrabold uppercase tracking-nav text-velmora-gold transition duration-300 hover:bg-velmora-gold hover:text-velmora-ink">
            <ShoppingBag className="h-4 w-4" aria-hidden="true" /> Add
          </button>
        </div>
      </div>
    </article>
  )
}
