import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

export default function Bestsellers() {
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const bestsellers = products.slice(0, 5)

  return (
    <section ref={containerRef} className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">Bestsellers</h2>
          <p className="mt-3 text-sm text-taupe max-w-md mx-auto">
            Our most-loved pieces, chosen by women who appreciate quality and design.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addItem} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-warm-light overflow-hidden">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-400 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            data-strk-img-id={product.hoverImgId}
            data-strk-img={`[product-desc-${product.id}] [product-name-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-400 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </Link>

      {/* Quick Add to Cart */}
      <button
        onClick={() => onAddToCart(product)}
        className={`absolute bottom-3 left-3 right-3 btn-primary text-center text-[10px] py-2.5 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        Quick Add
      </button>

      <div className="mt-3 text-center">
        <h3
          id={`product-name-${product.id}`}
          className="text-xs uppercase tracking-wide-lg text-charcoal font-medium"
        >
          {product.name}
        </h3>
        <p
          id={`product-desc-${product.id}`}
          className="text-xs text-taupe mt-0.5 hidden"
        >
          {product.description}
        </p>
        <p className="text-sm text-charcoal mt-1 font-medium">${product.price}</p>
      </div>
    </div>
  )
}