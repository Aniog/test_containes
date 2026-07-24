import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/hooks/useCart'
import { products } from '@/data/products'
import { cn } from '@/lib/utils'

export default function Bestsellers() {
  const { addItem, openCart } = useCart()
  const bestsellers = products.slice(0, 5)

  return (
    <section className="section-padding bg-parchment">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-3">Bestsellers</h2>
          <p className="text-stone-500 text-sm max-w-md mx-auto">
            Our most-loved pieces, chosen by you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} onAdd={addItem} onQuickView={openCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAdd, onQuickView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative bg-white rounded-sm border border-stone-200 overflow-hidden transition-shadow duration-300 hover:shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-sm text-stone-700">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm tracking-wide uppercase text-stone-900 mb-1 group-hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-stone-500 text-xs mb-3 line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-stone-900">${product.price}</span>
          <button
            onClick={() => onAdd(product)}
            className={cn(
              'text-[11px] tracking-widest uppercase px-3 py-2 rounded-sm transition-all duration-300',
              hovered
                ? 'bg-gold text-white opacity-100'
                : 'bg-stone-100 text-stone-600 opacity-0 group-hover:opacity-100'
            )}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
