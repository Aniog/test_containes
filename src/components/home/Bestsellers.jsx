import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-cream-200/50 mb-4 aspect-[3/4]">
        {/* Main image */}
        <img
          data-strk-img-id={`bestseller-${product.id}-main`}
          data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] jewelry on dark background`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover overlay image */}
        <img
          data-strk-img-id={`bestseller-${product.id}-hover`}
          data-strk-img={`${product.imageQueryAlt} closeup detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-stone-950/80 text-cream-100 text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 font-medium backdrop-blur-sm">
            {product.badge}
          </span>
        )}

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            addItem(product)
          }}
          className="absolute bottom-3 left-3 right-3 bg-stone-950/90 text-cream-100 text-xs tracking-[0.12em] uppercase py-3 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm hover:bg-stone-950"
        >
          <ShoppingBag size={14} strokeWidth={1.5} />
          Add to Cart
        </button>
      </div>

      {/* Text content */}
      <div>
        <span id={`product-name-${product.id}`} className="text-product-name text-sm md:text-base text-warm-900 block mb-1">
          {product.name}
        </span>
        <span id={`product-desc-${product.id}`} className="sr-only">{product.description}</span>
        <div className="flex items-center justify-between">
          <span className="text-sm text-warm-800 font-medium">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-1">
            <Star size={12} fill="currentColor" className="text-gold-500" />
            <span className="text-xs text-warm-800/60">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function Bestsellers() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-warm-900 mb-3">
            Bestsellers
          </h2>
          <p className="text-sm text-warm-800/60 tracking-wide">
            Our most-loved pieces, chosen by women like you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
