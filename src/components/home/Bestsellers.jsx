import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'

export default function Bestsellers() {
  const containerRef = useRef(null)
  const [hoveredId, setHoveredId] = useState(null)
  const [addedId, setAddedId] = useState(null)
  const { addItem } = useCart()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const handleQuickAdd = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'Gold', 1)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl tracking-product uppercase">Bestsellers</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image - clickable area */}
              <Link to={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[4/5] bg-surface-warm overflow-hidden mb-3">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src={product.images[0]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <img
                    data-strk-img-id={product.imgId2}
                    data-strk-img={`[${product.descId}] [${product.titleId}] jewelry worn`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src={product.images[1]}
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
              </Link>

              {/* Quick add - positioned over the image bottom */}
              <button
                onClick={(e) => handleQuickAdd(e, product)}
                className={`absolute bottom-[calc(0.75rem+40px)] left-0 right-0 z-20 bg-base/90 text-surface py-2.5 flex items-center justify-center gap-2 text-xs uppercase tracking-nav font-sans transition-all duration-300 ${hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                aria-label={`Quick add ${product.name}`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{addedId === product.id ? 'Added!' : 'Quick Add'}</span>
              </button>

              {/* Info */}
              <Link to={`/product/${product.slug}`}>
                <h3 id={product.titleId} className="font-serif text-xs md:text-sm uppercase tracking-product leading-tight">
                  {product.name}
                </h3>
              </Link>
              <p id={product.descId} className="text-[11px] text-muted mt-0.5 hidden">{product.description}</p>
              <p className="text-sm font-sans mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
