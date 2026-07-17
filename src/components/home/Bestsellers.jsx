import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/lib/data'
import { useCart as useCartContext } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCartContext()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-warm-charcoal">
          <img
            data-strk-img-id={`bestseller-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-warm-black/80 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold hover:text-gold-light transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3 id={product.titleId} className="product-name text-sm text-warm-cream uppercase tracking-wider-product font-sans">{product.name}</h3>
        <p id={product.descId} className="text-xs text-warm-gray mt-0.5 line-clamp-1">{product.description}</p>
        <p className="text-sm text-gold mt-1 font-sans">${product.price}</p>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop" className="btn-secondary">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
