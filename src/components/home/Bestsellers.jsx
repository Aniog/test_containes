import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()

  const handleAddToCart = (product, e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant: 'Gold',
      quantity: 1,
      image: product.images[0],
    })
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">Bestsellers</h2>
          <p className="section-subheading mt-3">Our most-loved pieces, chosen by you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-velmora-100 rounded-sm overflow-hidden mb-3">
        {/* Primary image */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div
            className="w-full h-full bg-velmora-200"
            data-strk-bg-id={`bs-${product.id}-1`}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
          />
        </div>

        {/* Secondary image on hover */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-velmora-200"
            data-strk-bg-id={`bs-${product.id}-2`}
            data-strk-bg={`[${product.descId}] [${product.titleId}]`}
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="600"
          />
        </div>

        {/* Quick add button */}
        <button
          onClick={(e) => onAddToCart(product, e)}
          className={`absolute bottom-3 left-3 right-3 bg-velmora-900/90 text-white text-xs tracking-wider uppercase font-sans font-medium py-2.5 rounded-sm backdrop-blur-sm transition-all duration-300 ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'
          }`}
        >
          <span className="flex items-center justify-center gap-1.5">
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </span>
        </button>
      </div>

      <div className="space-y-1">
        <h3 className="product-name text-velmora-800 truncate" id={product.titleId}>
          {product.name}
        </h3>
        <p className="text-sm text-velmora-500 font-sans">${product.price}</p>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="text-[11px] text-velmora-500 font-sans">
            {product.rating} ({product.reviews})
          </span>
        </div>
      </div>
    </Link>
  )
}