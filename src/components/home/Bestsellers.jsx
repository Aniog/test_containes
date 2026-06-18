import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[3/4] overflow-hidden bg-muted relative">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Quick add overlay */}
          <div
            className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-charcoal/90 text-white font-sans text-xs tracking-wider uppercase py-3 flex items-center justify-center gap-2 hover:bg-accent transition-colors duration-300"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-4">
        <h3 className="font-sans text-[11px] tracking-widest-plus uppercase text-charcoal">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-warm-gray mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
          Bestsellers
        </h2>
        <p className="font-sans text-sm text-warm-gray mt-3">
          Our most-loved pieces, chosen by you
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="inline-block font-sans text-xs tracking-widest uppercase border border-accent text-accent px-8 py-3 hover:bg-accent hover:text-white transition-colors duration-300"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
