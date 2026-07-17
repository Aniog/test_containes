import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'
import ProductImage from './ProductImage'

export default function ProductCard({ product, onAddToCart, priority = false }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-velmora-linen bg-velmora-pearl text-velmora-espresso shadow-velmora-soft transition duration-500 hover:-translate-y-1 hover:shadow-velmora-card">
      <Link to={`/products/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-porcelain">
          <ProductImage
            product={product}
            imageId={`product-${product.id}-primary${priority ? '-featured' : ''}`}
            ratio="4x3"
            width="800"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            product={product}
            imageId={`product-${product.id}-secondary${priority ? '-featured' : ''}`}
            ratio="4x3"
            width="800"
            variant="secondary"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>
      </Link>
      <div className="space-y-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-velmora-cocoa">
              {product.category}
            </p>
            <Link
              to={`/products/${product.slug}`}
              className="font-serif text-lg uppercase leading-tight tracking-[0.2em] text-velmora-espresso transition hover:text-velmora-bronze"
            >
              {product.name}
            </Link>
          </div>
          <p className="font-serif text-xl text-velmora-espresso">{formatPrice(product.price)}</p>
        </div>
        <button
          type="button"
          onClick={() => onAddToCart(product)}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-velmora-champagne bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso opacity-100 transition duration-300 hover:border-velmora-espresso hover:bg-velmora-espresso hover:text-velmora-pearl sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  )
}
