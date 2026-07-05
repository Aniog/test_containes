import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { getBestsellers } from '../../data/products'
import { useCart } from '../../context/CartContext'

export default function Bestsellers() {
  const products = getBestsellers()
  const { addItem } = useCart()

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      variant: product.variants[0],
      image: product.images[0],
      quantity: 1,
    })
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs uppercase tracking-[0.15em] font-medium mb-3">The Edit</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
            Bestsellers
          </h2>
          <p className="text-velvet-600 text-sm mt-3 max-w-md mx-auto">
            Our most-loved pieces, chosen by women who value quiet luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-velvet-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03]"
                />
                {/* Hover second image */}
                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100"
                  />
                )}
                {/* Quick add button */}
                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-velvet-900 p-2.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gold hover:text-white"
                  aria-label={`Quick add ${product.name}`}
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.isNew && (
                    <span className="bg-velvet-900 text-white text-[10px] uppercase tracking-wider px-2.5 py-1">
                      New
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-gold text-white text-[10px] uppercase tracking-wider px-2.5 py-1">
                      Sale
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4 space-y-1.5">
                <h3 className="text-xs uppercase tracking-[0.15em] text-velvet-900 font-medium">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-gold text-sm font-medium">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-velvet-400 text-xs line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center text-xs uppercase tracking-[0.15em] text-velvet-900 hover:text-gold transition-colors border-b border-velvet-900 hover:border-gold pb-1"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}