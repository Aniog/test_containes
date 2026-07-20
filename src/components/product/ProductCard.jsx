import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import ProductImage from './ProductImage.jsx'

export default function ProductCard({ product, onAdd, context = 'bestsellers' }) {
  const titleId = `${context}-${product.id}-title`
  const descId = `${context}-${product.id}-desc`
  const styleId = `${context}-${product.id}-style`

  return (
    <article className="group relative overflow-hidden border border-velmora-linen bg-velmora-ivory text-velmora-ink shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-jewel">
      <div className="relative aspect-product overflow-hidden bg-velmora-linen">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`} className="block h-full">
          <ProductImage
            id={`${context}-${product.id}-front-img`}
            query={`[${descId}] [${titleId}]`}
            alt={product.name}
          />
          <ProductImage
            id={`${context}-${product.id}-worn-img`}
            query={`[${styleId}] [${descId}] [${titleId}]`}
            alt={`${product.name} worn`}
            className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <span id={styleId} className="sr-only">warm editorial jewelry worn on ear neck close up</span>
          <div className="absolute left-3 top-3 rounded-full bg-velmora-ivory/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-velmora-espresso backdrop-blur">
            {product.badge}
          </div>
        </Link>
        <button
          type="button"
          onClick={() => onAdd(product)}
          className="absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-velmora-espresso px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ivory opacity-0 shadow-soft transition duration-300 hover:bg-velmora-champagne hover:text-velmora-espresso group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
      <div className="space-y-2 p-4 sm:p-5">
        <p id={descId} className="text-sm leading-6 text-velmora-ink/75">{product.category} · {product.material}</p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={titleId} className="font-serif text-lg font-semibold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-champagne sm:text-xl">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between text-sm text-velmora-ink">
          <span className="font-semibold">${product.price}</span>
          <span className="text-velmora-champagne" aria-label={`${product.rating} out of 5 stars`}>★★★★★</span>
        </div>
      </div>
    </article>
  )
}
