import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-charcoal">
            Bestsellers
          </h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] bestsellers gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    data-strk-img-id={product.imgId2}
                    data-strk-img={`[${product.descId}] [${product.titleId}] worn model gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                </div>
              </Link>
              <div className="mt-3">
                <Link to={`/product/${product.id}`}>
                  <h3
                    id={product.titleId}
                    className="font-serif text-sm uppercase tracking-[0.12em] text-charcoal group-hover:text-gold transition-colors duration-300"
                  >
                    {product.name}
                  </h3>
                </Link>
                <p id={product.descId} className="text-xs text-muted mt-0.5">{product.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-medium text-charcoal">${product.price}</span>
                  <button
                    onClick={() => addItem(product)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold hover:text-gold-hover"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
