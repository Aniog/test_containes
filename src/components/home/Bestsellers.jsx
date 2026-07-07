import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  return (
    <div className="product-card group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-warm/30 mb-4">
          <img
            src={product.images.primary}
            alt={product.name}
            className="product-image-primary w-full h-full object-cover"
          />
          <img
            src={product.images.secondary}
            alt={product.name}
            className="product-image-secondary w-full h-full object-cover"
          />
          {/* Quick Add Button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, product.variants[0].value)
            }}
            className="absolute bottom-4 left-4 right-4 bg-velmora-base/90 text-velmora-cream font-sans text-xs tracking-wide-luxury uppercase py-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Bag
          </button>
        </div>
        <h3 className="font-serif text-sm tracking-wide-luxury uppercase text-center mb-1">
          {product.name}
        </h3>
        <p className="font-sans text-xs text-velmora-text-light text-center mb-2">
          {product.subtitle}
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-warm'}`}
              />
            ))}
          </div>
          <span className="font-sans text-xs text-velmora-text-muted">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm text-center mt-2">${product.price}</p>
      </Link>
    </div>
  )
}

const Bestsellers = () => {
  const bestsellers = products.filter(p => p.bestseller).slice(0, 5)

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">Bestsellers</h2>
          <div className="hairline w-24 mx-auto mb-4" />
          <p className="font-sans text-sm text-velmora-text-light max-w-md mx-auto">
            Our most loved pieces, chosen by women who know what matters.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
