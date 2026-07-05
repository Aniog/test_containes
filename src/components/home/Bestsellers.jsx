import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Bestsellers() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">
            Editor's Pick
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={hoveredId === product.id ? product.altImage : product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
              </Link>

              {/* Quick add button on hover */}
              <button
                onClick={() => addItem(product, 'gold')}
                className="absolute bottom-3 right-3 bg-primary text-primary-foreground p-2.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                aria-label="Quick add to cart"
              >
                <ShoppingBag className="w-4 h-4" />
              </button>

              <div className="mt-3 px-0.5">
                <Link to={`/product/${product.id}`}>
                  <h3 className="product-name text-xs md:text-sm text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-primary text-primary" />
                  <span className="text-xs text-muted-foreground">{product.rating}</span>
                </div>
                <p className="text-sm font-medium text-foreground mt-1 font-sans">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}