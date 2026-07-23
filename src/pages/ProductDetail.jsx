import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium text-stone-900 tracking-wide uppercase">
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-stone-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-stone-400" />
        )}
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <div className="font-sans text-sm text-stone-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const product = products.find(p => p.id === id)

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [id])

  if (!product) {
    return (
      <main className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-stone-900 mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-outline">
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 font-sans text-xs text-stone-400">
          <Link to="/" className="hover:text-gold-500 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold-500 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-stone-700">{product.name}</span>
        </div>
      </div>

      <div className="hairline" />

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-cream-200 rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.images[activeImage]?.id}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product detailed photo elegant warm`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-colors',
                    activeImage === index ? 'border-gold-500' : 'border-stone-200 hover:border-stone-400'
                  )}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${img.id}`}
                    data-strk-img={`[${product.titleId}] gold jewelry closeup thumbnail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            {/* Back link */}
            <Link
              to="/shop"
              className="flex items-center gap-1.5 font-sans text-xs text-stone-400 hover:text-gold-500 transition-colors mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Shop
            </Link>

            {/* Badge */}
            {product.badge && (
              <span className="inline-block w-fit bg-cream-200 text-gold-600 font-sans text-[10px] tracking-ultra-wide uppercase px-3 py-1.5 rounded-sm mb-4">
                {product.badge}
              </span>
            )}

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-wide mb-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.floor(product.rating) ? 'fill-gold-400 text-gold-400' : 'text-stone-300'
                    )}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-stone-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl md:text-3xl text-stone-900 mb-6">
              {formatPrice(product.price)}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-stone-600 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-3">
                Tone: <span className="text-stone-900">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'px-6 py-2.5 font-sans text-sm tracking-wider border rounded-sm transition-all duration-300',
                      selectedVariant === variant
                        ? 'bg-stone-900 text-cream-50 border-stone-900'
                        : 'bg-transparent text-stone-700 border-stone-300 hover:border-stone-500'
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs tracking-wider uppercase text-stone-500 mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-stone-200 rounded-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-gold-500 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-sans text-sm text-stone-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-gold-500 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary flex items-center justify-center gap-2 py-4 rounded-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-3">
                  <p><strong>Materials:</strong> {product.materials}</p>
                  <p><strong>Care:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-3">
                  <p>{product.shipping}</p>
                  <p>{product.returns}</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-subheading mb-3">You May Also Like</p>
            <h2 className="section-heading">Complete Your Look</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <article key={rp.id} className="group">
                <Link to={`/product/${rp.id}`} className="block">
                  <div className="relative aspect-square overflow-hidden bg-cream-200 rounded-sm">
                    <img
                      data-strk-img-id={`related-${rp.imgId}`}
                      data-strk-img={`[${rp.descId}] [${rp.titleId}] gold jewelry product elegant`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-stone-800 group-hover:text-gold-500 transition-colors">
                      {rp.name}
                    </h3>
                    <p className="font-serif text-base text-stone-900">{formatPrice(rp.price)}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
