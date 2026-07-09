import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

const bestsellers = products.slice(0, 5)

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-3">Editor&apos;s Pick</p>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-900">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-wider text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-cream-100 overflow-hidden mb-3">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className={cn(
            'absolute inset-0 bg-black/0 transition-all duration-300',
            hovered && 'bg-black/5'
          )} />
        </div>
      </Link>

      {/* Quick add to cart */}
      <button
        onClick={() => addItem(product, 'gold', 1)}
        className={cn(
          'absolute bottom-16 left-2 right-2 bg-white/95 backdrop-blur-sm border border-cream-200 py-2.5 text-xs uppercase tracking-wider text-cream-800 font-medium transition-all duration-300 hover:bg-gold hover:text-white hover:border-gold shadow-sm',
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        )}
      >
        <span className="flex items-center justify-center gap-2">
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </span>
      </button>

      <Link to={`/product/${product.id}`} className="block">
        <h3 className="font-serif text-xs uppercase tracking-wider text-cream-800">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-[11px] text-cream-500">{product.rating}</span>
        </div>
        <p className="text-sm font-medium text-cream-900 mt-1">${product.price}</p>
      </Link>
    </div>
  )
}