import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = React.useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden rounded-sm bg-[hsl(var(--background-secondary))] aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          src={product.imageHover}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Quick add button */}
        <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button
            onClick={(e) => {
              e.preventDefault()
              addItem(product, 'gold')
            }}
            className="w-full bg-white/95 text-[hsl(var(--foreground))] uppercase tracking-wider text-xs font-medium py-2.5 rounded-sm hover:bg-white transition-colors shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.id}`} className="product-name text-sm tracking-[0.12em] hover:text-[hsl(var(--accent))] transition-colors">
          {product.name}
        </Link>
        <p className="text-xs text-[hsl(var(--foreground-muted))] mt-1">{product.description}</p>
        <p className="text-sm font-medium mt-2">${product.price}</p>
      </div>
    </div>
  )
}

export default function BestsellersSection() {
  return (
    <section className="section-padding">
      <div className="container-padding">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--accent))] mb-3">Curated for You</p>
          <h2 className="serif-heading text-3xl md:text-4xl tracking-[0.15em]">Bestsellers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-secondary">
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}
