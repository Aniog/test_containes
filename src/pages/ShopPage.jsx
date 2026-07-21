import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl md:text-5xl text-center tracking-wider mb-12">
        SHOP ALL
      </h1>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-velmora-beige">
        <button className="px-6 py-2 border border-velmora-charcoal text-sm tracking-wide hover:bg-velmora-charcoal hover:text-white transition-colors">
          ALL
        </button>
        <button className="px-6 py-2 border border-velmora-beige text-sm tracking-wide hover:border-velmora-charcoal transition-colors">
          EARRINGS
        </button>
        <button className="px-6 py-2 border border-velmora-beige text-sm tracking-wide hover:border-velmora-charcoal transition-colors">
          NECKLACES
        </button>
        <button className="px-6 py-2 border border-velmora-beige text-sm tracking-wide hover:border-velmora-charcoal transition-colors">
          HUGGIES
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.slug}`}
            className="group"
          >
            <div className="bg-velmora-beige aspect-square mb-4 flex items-center justify-center">
              <span className="text-velmora-warmGray">Product Image</span>
            </div>
            <h3 className="font-serif text-sm tracking-wider mb-2">{product.name}</h3>
            <p className="text-velmora-gold font-medium">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
