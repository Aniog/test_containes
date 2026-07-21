import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function BestsellersGrid() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-velvet-500 mb-3 font-sans">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ink">
            Bestsellers
          </h2>
          <div className="w-12 h-[1px] bg-velvet-300 mx-auto mt-4" />
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
                <div className="aspect-square bg-velvet-100 overflow-hidden relative">
                  <img
                    src={
                      hoveredId === product.id && product.images[1]
                        ? product.images[1]
                        : product.images[0]
                    }
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </Link>

              <div className="mt-3 px-1">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating)
                          ? 'text-gold-500 fill-gold-500'
                          : 'text-velvet-300'
                      }`}
                    />
                  ))}
                  <span className="text-[10px] text-velvet-500 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-serif text-xs md:text-sm font-medium uppercase tracking-[0.12em] text-ink group-hover:text-velvet-700 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-serif text-sm italic text-velvet-600 mt-0.5">
                  ${product.price}
                </p>
              </div>

              <button
                onClick={() => addItem(product, 'Gold', 1)}
                className="mt-3 w-full flex items-center justify-center gap-2 bg-ink text-cream text-[11px] uppercase tracking-[0.12em] py-2.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}