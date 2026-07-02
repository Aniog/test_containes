import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ShoppingBag } from 'lucide-react'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="product-card-image">
          <img src={product.images[0]} alt={product.name} />
          {product.images[1] && (
            <div className="product-card-secondary">
              <img src={product.images[1]} alt={product.name} />
            </div>
          )}
          <div className="product-card-add">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product, 'gold')
              }}
              className="w-full btn-accent flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.slug}`}>
        <h3 className="product-card-title">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
      </Link>
    </div>
  )
}

export default function BestsellersSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle">Most Loved</p>
          <h2 className="section-title mt-2">Bestsellers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
