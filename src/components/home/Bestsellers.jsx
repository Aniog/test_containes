import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'Gold', 1)
  }

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream mb-3">
        {/* Primary image */}
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[prod-${product.id}-desc] [prod-${product.id}-name]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {/* Hover image */}
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[prod-${product.id}-desc] [prod-${product.id}-name] worn on model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src={product.images[1]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {/* Quick add */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-3 right-3 bg-velmora-deep/90 text-white py-2.5 text-[11px] font-medium tracking-[0.12em] uppercase flex items-center justify-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-deep"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>
      <h3
        id={`prod-${product.id}-name`}
        className="font-serif text-sm tracking-[0.15em] uppercase font-light text-velmora-deep"
      >
        {product.name}
      </h3>
      <p id={`prod-${product.id}-desc`} className="text-xs text-velmora-muted mt-0.5">
        {product.description}
      </p>
      <p className="text-sm font-medium mt-1">${product.price}</p>
    </Link>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide font-light text-velmora-deep">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-accent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-velmora-accent text-velmora-accent px-8 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-velmora-accent hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
