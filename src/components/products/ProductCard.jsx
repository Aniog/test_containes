import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import ProductImage from './ProductImage.jsx'
import { formatPrice } from '../../data/products.js'

export default function ProductCard({ product, onAddToCart, compact = false }) {
  return (
    <article className="group relative text-stone-950">
      <Link
        to={`/product/${product.id}`}
        className="block overflow-hidden border border-amber-200 bg-amber-50 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl"
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-amber-200/40">
          <ProductImage
            product={product}
            mode="primary"
            instance="card-primary"
            className="absolute inset-0"
            imgClassName="h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
          />
          <ProductImage
            product={product}
            mode="secondary"
            instance="card-secondary"
            className="absolute inset-0"
            imgClassName="h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute left-3 top-3 bg-amber-50/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-stone-700">
            {product.badge}
          </div>
        </div>
        <div className={compact ? 'p-4' : 'p-5'}>
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-stone-500">
            {product.category}
          </p>
          <h3 className="mt-2 font-serif text-lg uppercase leading-tight tracking-[0.18em] text-stone-950 md:text-xl">
            {product.name}
          </h3>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="font-sans text-sm text-stone-700">
              {product.material}
            </p>
            <p className="font-serif text-xl text-stone-950">
              {formatPrice(product.price)}
            </p>
          </div>
        </div>
      </Link>
      <button
        type="button"
        onClick={() => onAddToCart(product)}
        className="absolute bottom-24 left-4 right-4 flex translate-y-3 items-center justify-center gap-2 bg-stone-950 px-4 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-50 opacity-0 shadow-xl transition duration-300 hover:bg-amber-700 focus:translate-y-0 focus:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <ShoppingBag className="h-4 w-4" />
        Add to Cart
      </button>
    </article>
  )
}
