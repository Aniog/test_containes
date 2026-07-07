import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import { formatPrice } from '../lib/utils'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velmora-sand/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp size={16} className="text-velmora-stone" />
        ) : (
          <ChevronDown size={16} className="text-velmora-stone" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-velmora-stone leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

function RelatedProduct({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-3">
        <img
          data-strk-img-id={`related-${product.id}`}
          data-strk-img={`[${product.id}-name] luxury gold jewelry product`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="font-serif text-xs tracking-wider uppercase text-velmora-charcoal mb-1">
        {product.name}
      </p>
      <p className="text-sm font-medium text-velmora-charcoal">{formatPrice(product.price)}</p>
    </Link>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImage(0)
    setSelectedVariant('Gold')
    setQuantity(1)
  }, [slug])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [slug, activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/collection" className="text-sm text-velmora-gold underline">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <main ref={containerRef} className="pt-20 sm:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-stone">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-charcoal capitalize">{product.category}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-velmora-warm overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.id}-main-${activeImage}`}
                data-strk-img={`[${product.id}-name] ${product.images[activeImage]}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-1 aspect-square bg-velmora-warm overflow-hidden border-2 transition-colors ${
                    activeImage === idx ? 'border-velmora-gold' : 'border-transparent hover:border-velmora-sand'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-${product.id}-thumb-${idx}`}
                    data-strk-img={`[${product.id}-name] ${img} thumbnail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <p className="text-xs tracking-mega-wide uppercase text-velmora-gold font-sans font-medium mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl tracking-wide uppercase text-velmora-charcoal mb-4">
              {product.name}
            </h1>

            {/* Price and rating */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-serif text-2xl text-velmora-charcoal">
                {formatPrice(product.price)}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}
                    />
                  ))}
                </div>
                <span className="text-xs text-velmora-stone">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-velmora-stone leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-charcoal mb-3">
                Tone: {selectedVariant}
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase font-medium border transition-all duration-200 ${
                      selectedVariant === variant
                        ? 'bg-velmora-charcoal text-velmora-ivory border-velmora-charcoal'
                        : 'bg-transparent text-velmora-charcoal border-velmora-sand hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-widest uppercase font-sans font-medium text-velmora-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-velmora-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm font-medium text-velmora-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-velmora-stone hover:text-velmora-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart button */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-velmora-charcoal text-velmora-ivory py-4 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold transition-colors duration-300 mb-6"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust signals */}
            <div className="flex items-center gap-6 text-xs text-velmora-stone">
              <span className="flex items-center gap-1.5">
                <Truck size={14} className="text-velmora-gold" />
                Free Shipping
              </span>
              <span className="flex items-center gap-1.5">
                <RotateCcw size={14} className="text-velmora-gold" />
                30-Day Returns
              </span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.fullDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-velmora-sand/60 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal text-center mb-10 sm:mb-14">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8">
            {relatedProducts.map((p) => (
              <RelatedProduct key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
