import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Bestsellers</h2>
          <p className="mt-3 text-sm text-muted-fg">The pieces our community reaches for again and again</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block no-underline">
                <div className="relative aspect-[3/4] bg-muted overflow-hidden mb-4">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <img
                    alt={`${product.name} alternate view`}
                    data-strk-img-id={product.imgId2}
                    data-strk-img={`[${product.titleId}] gold jewelry close up`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem(product)
                    }}
                    className="absolute bottom-3 left-3 right-3 py-2.5 bg-cream/95 text-charcoal text-xs font-sans font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border-none cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
              <span id={product.titleId} className="block font-sans text-xs font-medium uppercase tracking-product text-charcoal">
                {product.name}
              </span>
              <span id={product.descId} className="hidden">{product.description}</span>
              <span className="block mt-1 text-sm text-muted-fg">${product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
