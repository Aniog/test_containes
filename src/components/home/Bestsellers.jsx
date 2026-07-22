import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-velvet-gold mb-2">
              Editor's Pick
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-text">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-sm text-velvet-gold hover:text-velvet-gold-hover transition-colors tracking-wider uppercase"
          >
            View All
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => {
            const isHovered = hoveredId === product.id
            return (
              <div
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-[3/4] bg-velvet-surface overflow-hidden rounded-sm mb-4">
                    <img
                      src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                </Link>

                {/* Quick add */}
                <button
                  onClick={() => addItem(product)}
                  className="absolute top-3 right-3 w-9 h-9 bg-velvet-bg/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velvet-gold hover:text-velvet-bg"
                  aria-label={`Quick add ${product.name}`}
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>

                {/* Product info */}
                <div className="text-center">
                  <h3 className="product-name text-velvet-text mb-1.5">{product.name}</h3>
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <Star className="w-3 h-3 fill-velvet-gold text-velvet-gold" />
                    <span className="text-xs text-velvet-dim">{product.rating}</span>
                  </div>
                  <p className="font-serif text-base text-velvet-gold">${product.price}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}