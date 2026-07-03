import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-brand-card aspect-[4/3]">
          <img
            data-strk-img-id={product.images[0].imgId}
            data-strk-img={`[${product.images[0].descId}] [${product.images[0].titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[0].alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover image */}
          <img
            data-strk-img-id={product.images[1].imgId}
            data-strk-img={`[${product.images[1].descId}] [${product.images[1].titleId}]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.images[1].alt}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          {/* Quick add button */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                addItem(product)
              }}
              className="w-full bg-brand-base/90 text-white text-xs uppercase tracking-[0.12em] font-medium py-2.5 flex items-center justify-center gap-2 hover:bg-brand-base transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.images[0].titleId}
            className="font-serif text-sm uppercase tracking-[0.12em] text-brand-text-dark group-hover:text-brand-accent transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={product.images[0].descId}
          className="text-xs text-brand-muted font-light mt-1"
        >
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.round(product.rating) ? 'text-brand-accent fill-brand-accent' : 'text-brand-border'}`}
              />
            ))}
          </div>
          <span className="text-xs text-brand-muted font-light">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium text-brand-text-dark mt-1">${product.price}</p>
      </div>
    </div>
  )
}

export default function Bestsellers() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-text-dark font-light">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-brand-accent mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
