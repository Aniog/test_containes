import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '../../data/products'
import { useCart } from '../../hooks/useCart'
import AnimateIn from '../AnimateIn'

const bestsellers = products.filter(p => p.isBestseller).slice(0, 5)

export default function Bestsellers() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-page">
        <AnimateIn className="text-center mb-12 md:mb-16">
          <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">Curated for You</p>
          <h2 className="heading-lg">Bestsellers</h2>
          <div className="w-12 h-0.5 bg-gold/30 mx-auto mt-4" />
        </AnimateIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product, i) => (
            <AnimateIn key={product.id} delay={Math.min(i, 3)}>
              <ProductCard product={product} />
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className="text-center mt-12" delay={1}>
          <Link to="/collection" className="btn-outline">
            View All Products
          </Link>
        </AnimateIn>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block aspect-square bg-warm-100 rounded-sm overflow-hidden relative">
        <img
          src={hovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
        />

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-gold text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium">
            New
          </span>
        )}

        {/* Quick add - desktop */}
        <button
          onClick={(e) => {
            e.preventDefault()
            addItem(product)
          }}
          className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium text-ink
                     translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out
                     md:opacity-0 md:group-hover:opacity-100"
          aria-label={`Quick add ${product.name}`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>

        {/* Mobile always show add */}
        <button
          onClick={(e) => {
            e.preventDefault()
            addItem(product)
          }}
          className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm
                     md:hidden"
          aria-label={`Quick add ${product.name}`}
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="block pt-3 pb-2">
        <h3 className="product-name text-xs md:text-sm">{product.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs text-muted">{product.rating}</span>
        </div>
        <p className="text-sm md:text-base font-sans mt-1">${product.price}</p>
      </Link>
    </div>
  )
}