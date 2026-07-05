import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useScrollReveal } from '@/hooks/useScrollReveal'

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
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
          <img
            alt={product.name}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={product.images[0]}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            alt={product.name}
            data-strk-img-id={product.imgId2}
            data-strk-img={`[${product.descId}] [${product.titleId}] jewelry worn model`}
            data-strk-img-ratio="4x5"
            data-strk-img-width="600"
            src={product.images[1]}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      {/* Quick add */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
      >
        <button
          onClick={(e) => {
            e.preventDefault()
            addItem(product)
          }}
          className="w-full bg-velmora-charcoal/90 text-white text-xs font-medium uppercase tracking-wider py-3 flex items-center justify-center gap-2 hover:bg-velmora-charcoal transition-colors btn-press"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={product.titleId}
            className="font-serif text-sm uppercase tracking-product text-velmora-charcoal hover:text-velmora-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="text-xs text-velmora-muted mt-1">{product.description}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-stone-300'}`}
              />
            ))}
          </div>
          <span className="text-[10px] text-velmora-muted">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium mt-1">${product.price}</p>
      </div>
    </div>
  )
}

const Bestsellers = () => {
  const containerRef = useRef(null)
  const [sectionRef, revealed] = useScrollReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={sectionRef} className={`py-20 md:py-28 bg-velmora-cream sr-hidden ${revealed ? 'sr-visible' : ''}`}>
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 sr-stagger">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block text-xs font-medium uppercase tracking-wider text-velmora-charcoal border border-velmora-charcoal px-10 py-3 hover:bg-velmora-charcoal hover:text-white transition-all duration-300 btn-press"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
