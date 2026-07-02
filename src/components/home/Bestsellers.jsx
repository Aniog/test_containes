import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { bestsellers } from '@/data/products'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product, 'Gold')
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-4">
        <div
          className={`absolute inset-0 bg-velvet-200 transition-all duration-700 flex items-center justify-center ${
            hovered ? 'opacity-100 scale-105' : 'opacity-100'
          }`}
        >
          <span className="text-xs text-velvet-400 font-serif italic">
            {hovered ? 'Hover Image' : 'Product Image'}
          </span>
        </div>

        {/* Quick Add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 py-2.5 text-[10px] tracking-widest-plus uppercase font-medium transition-all duration-300 ${
            hovered
              ? 'translate-y-0 opacity-100'
              : 'translate-y-2 opacity-0'
          } ${
            added
              ? 'bg-green-600 text-white'
              : 'bg-deep text-cream hover:bg-velvet-800'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingBag size={12} />
            {added ? 'Added!' : 'Quick Add'}
          </span>
        </button>
      </div>

      {/* Info */}
      <h3 className="font-product text-xs tracking-widest text-deep mb-1">
        {product.name}
      </h3>
      <div className="flex items-center gap-1.5 mb-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.round(product.rating) ? 'fill-gold-500 text-gold-500' : 'text-velvet-300'}
            />
          ))}
        </div>
        <span className="text-[10px] text-velvet-400">({product.reviewCount})</span>
      </div>
      <p className="text-sm font-medium text-deep">${product.price}</p>
    </Link>
  )
}

export default function Bestsellers() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-[11px] tracking-widest-plus uppercase text-gold-600 mb-4 font-medium">
          Most Loved
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-deep font-medium">
          Bestsellers
        </h2>
        <div className="mt-6 w-16 h-[1px] bg-velvet-300 mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {bestsellers.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          to="/shop"
          className="inline-block text-xs tracking-widest-plus uppercase text-deep/70 hover:text-gold-600 transition-colors border-b border-velvet-300 pb-1 hover:border-gold-400"
        >
          View All Pieces
        </Link>
      </div>
    </section>
  )
}