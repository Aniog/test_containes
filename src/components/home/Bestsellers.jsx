import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCartDispatch } from '@/components/cart/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Bestsellers = () => {
  const containerRef = useRef(null)
  const dispatch = useCartDispatch()
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleQuickAdd = (product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        tone: product.tone[0],
        quantity: 1,
      }
    })
  }

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="bestsellers-title"
            className="font-serif text-3xl md:text-4xl text-stone-800 tracking-wide"
          >
            Bestsellers
          </h2>
          <p
            id="bestsellers-subtitle"
            className="font-sans text-sm text-stone-500 mt-3 tracking-wider uppercase"
          >
            The pieces they can't stop talking about
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image container */}
              <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[3x4] overflow-hidden bg-stone-200">
                  {/* Primary image */}
                  <img
                    data-strk-img-id={product.images[0].imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] [bestsellers-subtitle] [bestsellers-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.images[0].alt}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  {/* Secondary image (hover) */}
                  <img
                    data-strk-img-id={product.images[1].imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] worn detail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.images[1].alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </Link>

              {/* Quick add button */}
              <button
                onClick={() => handleQuickAdd(product)}
                className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-velmora-gold text-stone-900 font-sans text-xs uppercase tracking-wider px-4 py-2 transition-all duration-300 ${
                  hoveredId === product.id
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2'
                } hover:bg-velmora-gold-dark`}
                aria-label={`Quick add ${product.name} to cart`}
              >
                <ShoppingBag className="w-3 h-3 inline mr-1" />
                Add to Cart
              </button>

              {/* Product info */}
              <div className="mt-4">
                <Link to={`/product/${product.slug}`}>
                  <h3
                    id={product.titleId}
                    className="product-name text-xs md:text-sm text-stone-800 hover:text-velmora-gold transition-colors"
                  >
                    {product.name}
                  </h3>
                </Link>
                <p
                  id={product.descId}
                  className="font-sans text-xs text-stone-500 mt-1 line-clamp-2 hidden md:block"
                >
                  {product.description}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-3 h-3 text-velmora-gold fill-velmora-gold" />
                  <span className="font-sans text-xs text-stone-500">{product.rating}</span>
                </div>
                <p className="font-serif text-sm md:text-base text-velmora-gold mt-1">
                  {formatPrice(product.price)}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link to="/shop" className="btn-outline inline-block">
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
