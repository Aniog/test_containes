import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const [imgIdx, setImgIdx] = useState(0)
  const { addItem } = useCart()

  const onMouseEnter = () => {
    setHovered(true)
    if (product.images.length > 1) setImgIdx(1)
  }
  const onMouseLeave = () => {
    setHovered(false)
    setImgIdx(0)
  }

  return (
    <div
      className="group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="block relative overflow-hidden rounded-sm aspect-[3/4] mb-4 bg-velmora-ivory"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${product.images[imgIdx].bg} transition-all duration-700 group-hover:scale-105`}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-surface/90 backdrop-blur-sm text-velmora-accent text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm font-medium">
            {product.badge}
          </span>
        )}

        {/* Quick add */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, 'Gold')
            }}
            className="btn-accent w-full text-xs py-2.5 bg-velmora-surface text-velmora-text hover:bg-velmora-accent hover:text-white"
          >
            <ShoppingBag className="w-3.5 h-3.5 mr-2" />
            Add to Cart — ${product.price}
          </button>
        </div>
      </Link>

      {/* Info */}
      <Link to={`/product/${product.id}`} className="block">
        <h3 className="product-name text-xs md:text-sm text-velmora-text mb-1.5">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-velmora-gold text-velmora-gold'
                    : 'text-velmora-border'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-velmora-text-muted">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-sm font-medium text-velmora-text">${product.price}</p>
      </Link>
    </div>
  )
}

export default function BestsellersGrid() {
  return (
    <section className="section-padding page-container py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-text-muted mb-4">
          The Essentials
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-text">
          Bestsellers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}