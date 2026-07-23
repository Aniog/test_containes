import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatCurrency } from '@/lib/format'
import ProductImage from './ProductImage'
import Rating from './Rating'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative overflow-hidden border border-velmora-sand/70 bg-velmora-pearl text-velmora-ink shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-soft">
      <Link to={`/products/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-mist">
          <ProductImage
            product={product}
            variant="card-a"
            ratio="3x4"
            width="700"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            product={product}
            variant="card-b"
            ratio="3x4"
            width="700"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute left-4 top-4 rounded-full bg-velmora-pearl/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-velmora-clay backdrop-blur">
            {product.category}
          </div>
        </div>
      </Link>
      <div className="space-y-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link to={`/products/${product.slug}`}>
              <h3 id={`product-${product.id}-title`} className="product-title transition group-hover:text-velmora-gold">
                {product.name}
              </h3>
            </Link>
            <p id={`product-${product.id}-material`} className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-velmora-taupe">
              {product.material}
            </p>
          </div>
          <p className="font-serif text-xl font-semibold text-velmora-ink">{formatCurrency(product.price)}</p>
        </div>
        <p id={`product-${product.id}-desc`} className={`${compact ? 'hidden' : 'line-clamp-2'} text-sm leading-6 text-velmora-clay`}>
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between gap-3">
          <Rating rating={product.rating} compact />
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 rounded-full border border-velmora-gold/60 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-velmora-ink opacity-100 transition duration-300 hover:bg-velmora-gold hover:text-velmora-espresso sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
