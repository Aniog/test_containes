import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-border/30">
          <img
            data-strk-img-id={`bestseller-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`bestseller-${product.imgId}-alt`}
            data-strk-img={`[${product.descId}] [${product.titleId}] jewelry worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      {/* Quick add */}
      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-3 left-3 right-3 bg-cream/95 backdrop-blur-sm text-base font-sans text-[11px] font-semibold tracking-wide-custom uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      {/* Info */}
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm font-medium tracking-product uppercase text-base"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs text-muted mt-0.5">{product.description}</p>
        <p className="font-sans text-sm font-medium text-base mt-1">${product.price}</p>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans text-xs font-semibold tracking-section uppercase text-muted mb-3">
            Most Loved
          </h2>
          <p className="font-serif text-3xl md:text-4xl font-medium text-base">Bestsellers</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-base text-base font-sans text-xs font-semibold tracking-section uppercase px-10 py-3.5 hover:bg-base hover:text-cream transition-colors duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
