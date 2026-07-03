import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ivory">
        <Link to={`/product/${product.id}`} className="block absolute inset-0 z-0">
          <img
            data-strk-img-id={`bestseller-${product.id}-1`}
            data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`bestseller-${product.id}-2`}
            data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}] gold jewelry detail`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </Link>

        {/* Quick add overlay */}
        <div className={`absolute bottom-0 left-0 right-0 p-3 z-20 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product) }}
            className="w-full bg-white/95 text-charcoal text-xs tracking-[0.1em] uppercase font-medium py-2.5 flex items-center justify-center gap-2 hover:bg-white"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3">
        <h3
          id={`product-name-${product.id}`}
          className="font-serif text-sm tracking-[0.15em] uppercase text-charcoal"
        >
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p id={`product-desc-${product.id}`} className="text-xs text-warm-gray mt-0.5">{product.shortDescription}</p>
        <p className="text-sm font-medium mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-content mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl tracking-[0.05em] text-charcoal">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
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
