import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronRight, Star, Minus, Plus, Truck, RotateCcw, Shield, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${
              i < Math.round(rating) ? 'text-gold-400 fill-gold-400' : 'text-velvet-300'
            }`}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-onyx-400">
        {rating} ({count} reviews)
      </span>
    </div>
  )
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-velvet-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium text-onyx-800 tracking-wide uppercase">
          {title}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-onyx-400 transition-transform duration-300',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="font-sans text-sm text-onyx-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [product, setProduct] = useState(null)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const found = products.find((p) => p.id === id)
    setProduct(found)
    setSelectedVariant(found?.variants?.[0]?.id || 'gold')
    setQuantity(1)
    setActiveImageIndex(0)
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    if (containerRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      return cleanup
    }
  }, [product, activeImageIndex])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="font-sans text-onyx-400">Product not found</p>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 font-sans text-xs text-onyx-400">
          <Link to="/" className="hover:text-onyx-700 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-onyx-700 transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-onyx-700">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-velvet-100 overflow-hidden">
              {products.map((p) => (
                p.id === product.id && (
                  <img
                    key={p.id}
                    className="w-full h-full object-cover"
                    data-strk-img-id={`pdp-main-${p.id}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry product detail photo`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                  />
                )
              ))}
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {products.map((p) => (
                p.id === product.id && (
                  <React.Fragment key={p.id}>
                    <button
                      onClick={() => setActiveImageIndex(0)}
                      className={cn(
                        'w-16 h-20 lg:w-20 lg:h-24 bg-velvet-100 overflow-hidden transition-all',
                        activeImageIndex === 0
                          ? 'ring-1 ring-gold-400'
                          : 'opacity-60 hover:opacity-100'
                      )}
                    >
                      <img
                        className="w-full h-full object-cover"
                        data-strk-img-id={`pdp-thumb-${p.id}-0`}
                        data-strk-img={`[${p.descId}] [${p.titleId}] jewelry detail angle 1`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${p.name} angle 1`}
                      />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex(1)}
                      className={cn(
                        'w-16 h-20 lg:w-20 lg:h-24 bg-velvet-100 overflow-hidden transition-all',
                        activeImageIndex === 1
                          ? 'ring-1 ring-gold-400'
                          : 'opacity-60 hover:opacity-100'
                      )}
                    >
                      <img
                        className="w-full h-full object-cover"
                        data-strk-img-id={`pdp-thumb-${p.id}-1`}
                        data-strk-img={`[${p.descId}] [${p.titleId}] jewelry detail angle 2`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${p.name} angle 2`}
                      />
                    </button>
                    <button
                      onClick={() => setActiveImageIndex(2)}
                      className={cn(
                        'w-16 h-20 lg:w-20 lg:h-24 bg-velvet-100 overflow-hidden transition-all',
                        activeImageIndex === 2
                          ? 'ring-1 ring-gold-400'
                          : 'opacity-60 hover:opacity-100'
                      )}
                    >
                      <img
                        className="w-full h-full object-cover"
                        data-strk-img-id={`pdp-thumb-${p.id}-2`}
                        data-strk-img={`[${p.descId}] [${p.titleId}] jewelry detail angle 3`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={`${p.name} angle 3`}
                      />
                    </button>
                  </React.Fragment>
                )
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-600 mb-2">
              Velmora Fine Jewelry
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl tracking-wide uppercase text-onyx-900 mb-2">
              {product.name}
            </h1>
            <p className="font-sans text-sm text-onyx-500 mb-4">{product.subtitle}</p>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <p className="font-serif text-2xl text-onyx-900 mt-4 mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="font-sans text-sm text-onyx-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wide uppercase text-onyx-500 mb-3">
                Tone: <span className="text-onyx-800 capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    disabled={!variant.inStock}
                    className={cn(
                      'px-6 py-2.5 font-sans text-xs tracking-ultra-wide uppercase transition-all',
                      selectedVariant === variant.id
                        ? 'bg-onyx-950 text-ivory-50 border border-onyx-950'
                        : 'border border-velvet-300 text-onyx-600 hover:border-onyx-400',
                      !variant.inStock && 'opacity-40 cursor-not-allowed'
                    )}
                  >
                    {variant.name}
                    {!variant.inStock && ' — Sold Out'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wide uppercase text-onyx-500 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velvet-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-onyx-500 hover:text-onyx-800 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center font-sans text-sm text-onyx-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-onyx-500 hover:text-onyx-800 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-gold py-4 text-sm"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-velvet-200">
              {[
                { icon: Truck, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' },
                { icon: Shield, text: 'Hypoallergenic' },
              ].map((badge) => (
                <div key={badge.text} className="text-center">
                  <badge.icon className="w-4 h-4 text-gold-500 mx-auto mb-1.5" />
                  <p className="font-sans text-[10px] tracking-wide text-onyx-500 uppercase">
                    {badge.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 lg:mt-28">
          <div className="text-center mb-10">
            <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-600 mb-3">
              You May Also Like
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-onyx-900">
              Complete Your Look
            </h2>
            <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] bg-velvet-100 overflow-hidden mb-3">
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    data-strk-img-id={`related-${item.id}`}
                    data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry product`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.name}
                  />
                </div>
                <h3 className="font-serif text-sm sm:text-base tracking-wide uppercase text-onyx-900 group-hover:text-gold-600 transition-colors">
                  {item.name}
                </h3>
                <p className="font-sans text-sm text-onyx-600 mt-1">
                  {formatPrice(item.price)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
