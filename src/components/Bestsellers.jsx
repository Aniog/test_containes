import React from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import products from '../data/products'

export default function Bestsellers() {
  const { addToCart } = useCart()
  const bestsellers = products.slice(0, 5)

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl mb-4">Bestsellers</h2>
        <div className="w-16 h-px bg-amber-600 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bestsellers.map((product) => (
          <div key={product.id} className="group relative">
            <Link to={`/product/${product.id}`} className="block">
              <div className="relative overflow-hidden bg-gray-50 aspect-square mb-4">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with quick add */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end justify-center pb-6">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addToCart(product, 1)
                    }}
                    className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 
                             transition-all duration-300 bg-white text-gray-900 px-6 py-3 
                             font-sans text-sm uppercase tracking-wide hover:bg-gray-900 hover:text-white"
                  >
                    <ShoppingBag size={16} className="inline-block mr-2" />
                    Quick Add
                  </button>
                </div>
              </div>
            </Link>

            <div className="text-center">
              <h3 className="font-serif text-lg uppercase tracking-wider mb-2">
                {product.name}
              </h3>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={i < Math.floor(product.rating) ? 'text-amber-600 fill-amber-600' : 'text-gray-300'} 
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
              </div>
              <p className="font-sans text-xl">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/shop"
          className="inline-block border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white 
                   px-8 py-3 font-sans text-sm tracking-widest uppercase transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  )
}
