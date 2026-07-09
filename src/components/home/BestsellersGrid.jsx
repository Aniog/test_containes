import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { StarRating } from '@/components/ui/Shared'
import { useCart } from '@/context/CartContext'

export default function BestsellersGrid() {
  const { addItem } = useCart()
  const [hoveredIndex, setHoveredIndex] = React.useState(null)

  return (
    <section className="py-16 md:py-24 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest-xl uppercase text-velmora-muted mb-3">Curated for You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-base">Bestsellers</h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-velmora-warm mb-3">
                  <img
                    src={hoveredIndex === index ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Quick add overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        addItem(product, product.variants[0])
                      }}
                      className="w-full py-2.5 bg-velmora-base/90 text-white text-[10px] tracking-widest uppercase hover:bg-velmora-gold transition-colors backdrop-blur-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <Link to={`/product/${product.id}`} className="block">
                <h3 className="font-serif text-sm tracking-wide uppercase text-velmora-base group-hover:text-velmora-gold transition-colors">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} count={product.reviews} />
                <p className="text-sm font-medium mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <button className="px-8 py-3 border border-velmora-base text-velmora-base text-xs tracking-widest uppercase hover:bg-velmora-base hover:text-white transition-all duration-300">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
