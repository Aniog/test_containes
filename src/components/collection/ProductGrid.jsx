import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 'gold', 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-[#E8E4DF] overflow-hidden mb-4">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          data-strk-bg-id={`shop-${product.images[0].id}`}
          data-strk-bg={`[${product.id}-desc] [${product.id}-title] [shop-section-title]`}
          data-strk-bg-ratio={product.images[0].ratio}
          data-strk-bg-width={product.images[0].width}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          data-strk-bg-id={`shop-hover-${product.images[1]?.id || product.images[0].id}`}
          data-strk-bg={`[${product.id}-desc] [${product.id}-title] [shop-section-title]`}
          data-strk-bg-ratio={product.images[1]?.ratio || product.images[0].ratio}
          data-strk-bg-width={product.images[1]?.width || product.images[0].width}
        />
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className={`w-full py-3 text-xs tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
              added
                ? 'bg-[#4A7C59] text-white'
                : 'bg-white/95 text-[#1A1A1A] hover:bg-[#B8860B] hover:text-white'
            }`}
          >
            {added ? (
              <>Added to Bag</>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                Add to Bag
              </>
            )}
          </button>
        </div>
      </div>
      <h3
        className="text-sm tracking-widest uppercase text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors text-center"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {product.name}
      </h3>
      <div className="flex items-center justify-center gap-1 mt-1.5">
        <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
        <span className="text-xs text-[#6B6560]">{product.rating}</span>
      </div>
      <p className="mt-1.5 text-sm text-[#1A1A1A] font-medium text-center">${product.price.toFixed(2)}</p>
    </Link>
  )
}

export default function ProductGrid({ products }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [products])

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[#6B6560] text-sm">No products match your filters.</p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
