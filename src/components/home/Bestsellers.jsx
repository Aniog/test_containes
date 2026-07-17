import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-16 md:py-24 bg-velmora-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-velmora-gold font-sans mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => {
            const isHovered = hoveredId === product.id
            const img = product.images[0]
            const hoverImg = product.images[1]

            return (
              <div
                key={product.id}
                className="group"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-3">
                  <img
                    src={`https://images.unsplash.com/${img.query}?w=${img.width}&h=${Math.round(img.width * 4 / 3)}&fit=crop&q=80`}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <img
                    src={`https://images.unsplash.com/${hoverImg.query}?w=${hoverImg.width}&h=${Math.round(hoverImg.width * 4 / 3)}&fit=crop&q=80`}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addItem(product, 1, 'gold')
                    }}
                    className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-velmora-charcoal py-2.5 text-[10px] tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Quick Add
                  </button>
                </Link>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-xs md:text-sm tracking-widest uppercase text-velmora-charcoal mb-1 truncate">
                    {product.name}
                  </h3>
                  <p className="text-xs text-velmora-warm-gray font-sans">${product.price}</p>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 md:mt-14">
          <Link
            to="/shop"
            className="inline-block border border-velmora-charcoal text-velmora-charcoal px-10 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-charcoal hover:text-white transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
