import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '@/lib/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1A1A1A]">
            Bestsellers
          </h2>
          <p className="text-muted-text text-sm md:text-base mt-3 max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate quiet luxury.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] bg-warm rounded overflow-hidden">
                  <img
                    src={hoveredId === product.id ? product.images.hover : product.images.front}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </Link>

              {/* Quick add to cart button */}
              <button
                onClick={() => addItem({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.images.front,
                })}
                className="absolute bottom-16 left-2 right-2 md:bottom-14 md:left-3 md:right-3 py-2.5 bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-xs uppercase tracking-[0.15em] font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Cart
              </button>

              <div className="mt-3 px-1">
                <h3 className="font-serif text-sm md:text-base tracking-[0.15em] uppercase text-[#1A1A1A]">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <span className="text-xs text-muted-text">{product.rating}</span>
                </div>
                <p className="text-sm text-muted-text mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 border border-gold text-gold text-sm uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-white transition-all duration-300"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}