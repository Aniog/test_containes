import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { getBestsellers } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { toast } from 'sonner'

export function BestsellersSection() {
  const bestsellers = getBestsellers()
  const { addToCart, openCart } = useCart()

  const handleQuickAdd = (product) => {
    const inStock = product.variants.find((v) => v.inStock)
    if (!inStock) {
      toast.error('Sorry, this item is out of stock.')
      return
    }
    addToCart(product, inStock.id)
    toast.success(`${product.name} added to cart`, {
      action: {
        label: 'View Cart',
        onClick: openCart,
      },
    })
  }

  return (
    <section className="py-16 md:py-24 bg-velmora-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-velmora-muted mb-3">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Bestsellers
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickAdd={() => handleQuickAdd(product)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-[0.2em] font-medium border-b border-velmora-charcoal pb-1 hover:text-velmora-gold hover:border-velmora-gold transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onQuickAdd }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-cream rounded-sm overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          />
          <img
            src={product.images[1] || product.images[0]}
            alt={`${product.name} alternate`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0 }}
          />
          {/* Quick add */}
          <button
            onClick={(e) => {
              e.preventDefault()
              onQuickAdd()
            }}
            className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur text-velmora-charcoal text-xs uppercase tracking-wider font-medium py-3 flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white"
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm md:text-base tracking-wider uppercase">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-velmora-muted mt-1 truncate">{product.tagline}</p>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-velmora-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm font-medium mt-1.5">${product.price}</p>
      </div>
    </div>
  )
}
