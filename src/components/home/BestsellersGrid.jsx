import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'

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
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#E8E4DF] overflow-hidden mb-4">
        <div
          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
          data-strk-bg-id={`bestseller-${product.images[0].id}`}
          data-strk-bg={`[${product.id}-desc] [${product.id}-title] [bestsellers-subtitle] [bestsellers-title]`}
          data-strk-bg-ratio={product.images[0].ratio}
          data-strk-bg-width={product.images[0].width}
        />
        {/* Hover image (second image) */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          data-strk-bg-id={`bestseller-hover-${product.images[1]?.id || product.images[0].id}`}
          data-strk-bg={`[${product.id}-desc] [${product.id}-title] [bestsellers-subtitle] [bestsellers-title]`}
          data-strk-bg-ratio={product.images[1]?.ratio || product.images[0].ratio}
          data-strk-bg-width={product.images[1]?.width || product.images[0].width}
        />

        {/* Add to cart button */}
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

      {/* Info */}
      <div className="text-center">
        <h3
          className="text-sm tracking-widest uppercase text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-center gap-1 mt-1.5">
          <Star className="w-3 h-3 fill-[#C9A96E] text-[#C9A96E]" />
          <span className="text-xs text-[#6B6560]">{product.rating}</span>
        </div>
        <p className="mt-1.5 text-sm text-[#1A1A1A] font-medium">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default function BestsellersGrid() {
  const containerRef = useRef(null)
  const bestsellers = products.filter((p) => p.bestseller)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="bestsellers-title"
            className="font-serif text-3xl md:text-4xl text-[#1A1A1A] tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Bestsellers
          </h2>
          <p
            id="bestsellers-subtitle"
            className="mt-3 text-sm text-[#6B6560] tracking-wide"
          >
            Our most-loved pieces, chosen by you
          </p>
          <div className="w-12 h-px bg-[#B8860B] mx-auto mt-6" />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block text-xs tracking-widest uppercase text-[#B8860B] border-b border-[#B8860B] pb-0.5 hover:text-[#996F0A] hover:border-[#996F0A] transition-colors"
          >
            View All Pieces
          </Link>
        </div>
      </div>
    </section>
  )
}
