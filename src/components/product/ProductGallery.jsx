import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { useCart } from '@/context/CartContext'

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeIndex])

  const handleAddToCart = () => {
    addItem(product, 'gold', 1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div ref={containerRef} className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Image gallery */}
      <div className="flex-1">
        {/* Main image */}
        <div className="relative aspect-[3/4] bg-[#E8E4DF] mb-4 overflow-hidden">
          <div
            className="absolute inset-0"
            data-strk-bg-id={`pdp-main-${product.images[activeIndex].id}`}
            data-strk-bg={`[${product.id}-desc] [${product.id}-title] [pdp-section-title]`}
            data-strk-bg-ratio={product.images[activeIndex].ratio}
            data-strk-bg-width={product.images[activeIndex].width}
          />
          {/* Navigation arrows */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={() => setActiveIndex((i) => (i > 0 ? i - 1 : product.images.length - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" />
              </button>
              <button
                onClick={() => setActiveIndex((i) => (i < product.images.length - 1 ? i + 1 : 0))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-[#1A1A1A]" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-16 h-20 bg-[#E8E4DF] overflow-hidden transition-all duration-300 ${
                  i === activeIndex ? 'ring-2 ring-[#B8860B]' : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <div
                  className="w-full h-full"
                  data-strk-bg-id={`pdp-thumb-${img.id}`}
                  data-strk-bg={`[${product.id}-desc] [${product.id}-title]`}
                  data-strk-bg-ratio={img.ratio}
                  data-strk-bg-width="200"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="flex-1 lg:max-w-md">
        <h1
          id={`${product.id}-title`}
          className="font-serif text-2xl md:text-3xl text-[#1A1A1A] tracking-widest uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-[#C9A96E] text-[#C9A96E]'
                    : 'text-[#E8E4DF]'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-[#6B6560]">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <p className="mt-4 text-2xl text-[#1A1A1A] font-medium">${product.price.toFixed(2)}</p>

        {/* Short description */}
        <p
          id={`${product.id}-desc`}
          className="mt-4 text-sm text-[#6B6560] leading-relaxed"
        >
          {product.description}
        </p>

        {/* Variant selector */}
        <div className="mt-6">
          <p className="text-xs tracking-widest uppercase text-[#1A1A1A] mb-3">Finish</p>
          <div className="flex gap-3">
            {product.variants.map((v) => (
              <button
                key={v.id}
                className={`px-6 py-2.5 text-xs tracking-wider border transition-all duration-300 ${
                  v.id === 'gold'
                    ? 'border-[#B8860B] bg-[#B8860B] text-white'
                    : 'border-[#E8E4DF] text-[#6B6560] hover:border-[#1A1A1A]'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="mt-6">
          <p className="text-xs tracking-widest uppercase text-[#1A1A1A] mb-3">Quantity</p>
          <div className="inline-flex items-center border border-[#E8E4DF]">
            <button className="px-4 py-2.5 text-[#6B6560] hover:text-[#1A1A1A] transition-colors">
              -
            </button>
            <span className="px-4 text-sm text-[#1A1A1A]">1</span>
            <button className="px-4 py-2.5 text-[#6B6560] hover:text-[#1A1A1A] transition-colors">
              +
            </button>
          </div>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className={`w-full mt-8 py-4 text-xs tracking-widest uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
            added
              ? 'bg-[#4A7C59] text-white'
              : 'bg-[#B8860B] text-white hover:bg-[#996F0A]'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          {added ? 'Added to Bag' : 'Add to Bag'}
        </button>

        {/* Trust badges */}
        <div className="mt-6 pt-6 border-t border-[#E8E4DF] grid grid-cols-2 gap-4">
          {[
            { label: 'Free Shipping', sub: 'On all orders' },
            { label: '30-Day Returns', sub: 'Hassle-free' },
            { label: '18K Gold Plated', sub: 'Premium quality' },
            { label: 'Hypoallergenic', sub: 'Safe for sensitive skin' },
          ].map((badge, i) => (
            <div key={i} className="text-center">
              <p className="text-xs text-[#1A1A1A] font-medium">{badge.label}</p>
              <p className="text-xs text-[#6B6560] mt-0.5">{badge.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
