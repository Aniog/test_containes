import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { Badge } from '@/components/ui/Badge'
import { useInView } from '@/hooks/useInView'

export default function BestsellersGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { addItem } = useCart()
  const [ref, isInView] = useInView({ threshold: 0.05 })

  const bestsellers = products.slice(0, 5)

  const handleQuickAdd = (product) => {
    addItem(product, product.variants[0])
  }

  return (
    <section ref={ref} className={`py-16 md:py-24 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide">Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold/40 mx-auto mt-4" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <Link to={`/product/${product.id}`} className="block aspect-[3/4] overflow-hidden bg-velmora-warm">
                <img
                  src={hoveredIndex === index && product.images[1] ? product.images[1] : product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Quick add overlay */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
              >
                <button
                  onClick={() => handleQuickAdd(product)}
                  className="w-full flex items-center justify-center gap-2 bg-velmora-charcoal/90 text-velmora-cream text-xs tracking-wider uppercase py-2.5 hover:bg-velmora-charcoal transition-colors"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Add to Cart
                </button>
              </div>

              {/* Product info */}
              <div className="mt-3">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-sm tracking-wide group-hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-velmora-gray mt-0.5 line-clamp-1">{product.subtitle}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <StarRating rating={product.rating} size="sm" />
                  <span className="text-xs text-velmora-stone">({product.reviews})</span>
                </div>
                <p className="text-sm font-medium mt-1.5">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velmora-charcoal border-b border-velmora-charcoal/30 pb-0.5 hover:border-velmora-gold hover:text-velmora-gold transition-colors">
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
