import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { toast } from 'sonner'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const { addItem } = useCart()
  const bestsellers = products.slice(0, 5)
  const [hoveredId, setHoveredId] = useState(null)

  const handleAddToCart = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.colors[0],
      image: product.images[0],
      quantity: 1,
    })
    toast(`${product.name} added to cart`)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < Math.floor(rating)
            ? 'text-gold-500 fill-gold-500'
            : 'text-ink-200'
        }`}
      />
    ))
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subheading">Curated for You</p>
          <h2 className="section-heading mt-3">Bestsellers</h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] bg-ink-100/50 overflow-hidden">
                <img
                  src={
                    hoveredId === product.id && product.hoverImage
                      ? product.hoverImage
                      : product.images[0]
                  }
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-cream/90 text-ink-800 text-[10px] uppercase tracking-wider px-2.5 py-1 font-medium">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="absolute bottom-3 right-3 w-10 h-10 bg-cream/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold-600 hover:text-white"
                  aria-label="Add to cart"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <h3 className="product-name group-hover:text-gold-700 transition-colors">
                  {product.name}
                </h3>
                <p className="product-price">${product.price}</p>
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="text-[10px] text-ink-400 ml-1">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/shop" className="btn-outline inline-block text-xs">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}