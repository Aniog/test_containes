import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, Eye } from "lucide-react"
import { products } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { StarRating, Button } from "@/components/ui/Components"

export default function BestsellersSection() {
  const { addItem } = useCart()
  const [hoveredId, setHoveredId] = useState(null)
  const [addedId, setAddedId] = useState(null)

  const handleAddToCart = (product) => {
    addItem(product, product.variants[0], 1)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-velmora-gold mb-3">
            Curated for You
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-velmora-text font-normal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] bg-velmora-border-light overflow-hidden mb-3 sm:mb-4">
                <img
                  src={hoveredId === product.id ? product.images[1] : product.images[0]}
                  alt={product.shortName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Quick add overlay */}
                <div
                  className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
                    hoveredId === product.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-velmora-surface/95 backdrop-blur-sm text-velmora-text font-sans text-[11px] tracking-wider uppercase py-2.5 hover:bg-velmora-gold hover:text-white transition-colors flex items-center justify-center gap-2"
                  >
                    {addedId === product.id ? (
                      <>
                        <span className="text-velmora-success">Added</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Info */}
              <Link to={`/product/${product.id}`}>
                <h3 className="font-sans text-[11px] sm:text-xs tracking-wider uppercase text-velmora-text group-hover:text-velmora-gold transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <StarRating rating={product.rating} size="sm" />
                  <span className="text-[10px] text-velmora-text-muted">
                    ({product.reviewCount})
                  </span>
                </div>
                <p className="font-sans text-sm text-velmora-text mt-1.5">
                  ${product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12 sm:mt-16">
          <Link to="/collection">
            <Button variant="outline" size="md">
              View All Pieces
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
