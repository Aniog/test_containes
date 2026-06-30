import { useState } from "react"
import { Link } from "react-router-dom"
import { Star } from "lucide-react"
import { products } from "../../data/products"
import { useCart } from "../../context/CartContext"

export default function Bestsellers() {
  const { addItem } = useCart()
  const bestsellers = products.slice(0, 5)
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.15em] text-warm-gold font-medium mb-3">
            Editor&apos;s Pick
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-dark-charcoal font-light">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-ivory mb-3">
                  <img
                    src={
                      hoveredId === product.id && product.hoverImage
                        ? product.hoverImage
                        : product.images[0]
                    }
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-warm-gold text-dark-charcoal text-[10px] uppercase tracking-[0.1em] font-medium px-2.5 py-1">
                      New
                    </span>
                  )}
                </div>
                <h3 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.round(product.rating)
                          ? "text-warm-gold fill-warm-gold"
                          : "text-charcoal/15 fill-charcoal/15"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-charcoal font-medium mt-1.5">
                  ${product.price}
                </p>
              </Link>

              <button
                onClick={() => addItem(product, "gold", 1)}
                className="mt-3 w-full text-xs uppercase tracking-[0.1em] py-2.5 border border-dark-ivory text-charcoal/70 hover:bg-dark-charcoal hover:text-ivory hover:border-dark-charcoal transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}