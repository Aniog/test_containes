import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/lib/data'
import { useCart } from '@/components/shared/CartContext'

const Bestsellers = () => {
  const { addItem } = useCart()

  return (
    <section className="section-padding py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">Bestsellers</h2>
        <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-brand-sand/20 mb-3">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <img
                src={product.images[1]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  addItem(product)
                }}
                className="absolute bottom-3 left-3 right-3 btn-accent text-[10px] py-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                <ShoppingBag size={14} className="mr-1.5" />
                Add to Cart
              </button>
            </div>
            <h3 className="font-serif text-xs md:text-sm tracking-wide uppercase text-brand-charcoal">
              {product.name}
            </h3>
            <p className="text-xs text-brand-warm-gray mt-0.5">{product.description}</p>
            <p className="text-sm font-medium text-brand-charcoal mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Bestsellers
