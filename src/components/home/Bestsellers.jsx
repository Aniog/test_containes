import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

export default function Bestsellers() {
  const { addItem } = useCart()

  return (
    <section className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-3">Most Loved</p>
          <h2 className="section-title">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addItem} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAdd }) {
  return (
    <div className="group">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-velmora-blush aspect-[3/4] mb-4">
        <div className="absolute inset-0 bg-velmora-blush flex items-center justify-center">
          <span className="text-velmora-stone/40 text-xs text-center px-2 font-serif">
            {product.name}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick add */}
        <button
          onClick={(e) => {
            e.preventDefault()
            onAdd(product)
          }}
          className="absolute bottom-0 left-0 right-0 bg-velmora-ink text-white text-xs tracking-wider uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-sans"
        >
          Add to Bag
        </button>

        {/* Tags */}
        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] px-2 py-0.5 tracking-wider uppercase">
            New
          </span>
        )}
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="block">
        <h3 className="font-serif text-sm md:text-base tracking-wider uppercase text-velmora-ink group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`} />
          ))}
          <span className="text-[10px] text-velmora-stone ml-1">({product.reviews})</span>
        </div>
        <p className="text-sm text-velmora-gold font-medium mt-1">${product.price}</p>
      </Link>
    </div>
  )
}