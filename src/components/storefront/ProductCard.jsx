import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProductVisual from './ProductVisual'

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="group text-velmora-cocoa">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-velmora-porcelain shadow-soft">
        <Link to={`/product/${product.id}`} className="block" aria-label={`View ${product.name}`}>
          <div className="relative aspect-product overflow-hidden bg-velmora-espresso/5">
            <ProductVisual product={product} className="transition duration-700 group-hover:scale-105 group-hover:opacity-0" />
            <ProductVisual product={product} variant="alternate" className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => onAdd(product)}
          className="product-card-cta absolute bottom-4 left-4 right-4 flex translate-y-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] opacity-100 shadow-glow transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-velmora-champagne focus:ring-offset-2 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" /> Add to Cart
        </button>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 border-t border-velmora-champagne/20 pt-4">
        <div>
          <h3 id={product.titleId} className="font-serif text-lg font-semibold uppercase leading-tight tracking-[0.18em] text-velmora-cocoa">
            {product.name}
          </h3>
          <p id={product.descId} className="mt-2 text-sm leading-6 text-velmora-taupe">
            {product.category} · {product.material}
          </p>
        </div>
        <p className="shrink-0 text-sm font-semibold text-velmora-cocoa">${product.price}</p>
      </div>
    </article>
  )
}
