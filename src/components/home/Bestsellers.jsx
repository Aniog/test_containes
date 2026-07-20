import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Button } from '@/components/ui/button'

export default function Bestsellers() {
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [addedIds, setAddedIds] = useState(new Set())

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [])

  const handleAddToCart = (product) => {
    addItem(product, 'Gold', 1)
    setAddedIds(prev => new Set(prev).add(product.id))
    setTimeout(() => {
      setAddedIds(prev => {
        const next = new Set(prev)
        next.delete(product.id)
        return next
      })
    }, 1500)
  }

  return (
    <section className="py-16 lg:py-24 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-gold-600 font-medium">Curated for You</span>
          <h2 className="font-serif text-3xl md:text-4xl text-dark-900 mt-3">Bestsellers</h2>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[3/4] bg-dark-50 overflow-hidden relative">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[product-name-${product.id}] [product-desc-${product.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </Link>

              <div className="mt-4 space-y-1.5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
                  ))}
                  <span className="text-[10px] text-dark-400 ml-1">({product.reviews})</span>
                </div>
                <h3 className="text-xs tracking-widest uppercase text-dark-900 font-medium">
                  <Link to={`/product/${product.id}`} className="hover:text-gold-600 transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p
                  id={`product-desc-${product.id}`}
                  className="text-xs text-dark-400 line-clamp-1 hidden"
                >
                  {product.description}
                </p>
                <p className="text-sm text-dark-900 font-medium">${product.price}</p>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className={`mt-3 w-full h-10 text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                  addedIds.has(product.id)
                    ? 'bg-green-600 text-white'
                    : 'bg-dark-900 text-cream-50 hover:bg-dark-800'
                }`}
              >
                {addedIds.has(product.id) ? 'Added!' : 'Add to Cart'}
              </button>

              <span id={`product-name-${product.id}`} className="hidden">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}