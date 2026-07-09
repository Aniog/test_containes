import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left bg-transparent border-none cursor-pointer"
      >
        <span className="text-sm uppercase tracking-widest font-sans font-medium text-charcoal">{title}</span>
        <ChevronDown className={`w-4 h-4 text-stone transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-stone font-sans leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center px-6">
        <h1 className="font-serif text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold font-sans text-sm underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <main ref={containerRef} className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 lg:px-20 py-4">
        <nav className="flex items-center gap-2 text-xs font-sans text-stone">
          <Link to="/" className="hover:text-gold transition-colors no-underline text-stone">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors no-underline text-stone">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square bg-ivory border border-border overflow-hidden">
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[pdp-${product.id}-name] [pdp-${product.id}-desc] gold jewelry`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeImage === 0 ? 'opacity-100' : 'opacity-0'}`}
              />
              <img
                data-strk-img-id={product.imgId2}
                data-strk-img={`[pdp-${product.id}-name] gold jewelry detail close-up`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} alternate view`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${activeImage === 1 ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveImage(0)}
                className={`w-20 h-20 bg-ivory border overflow-hidden cursor-pointer rounded-none ${activeImage === 0 ? 'border-gold' : 'border-border'}`}
              >
                <img
                  data-strk-img-id={`pdp-thumb-${product.id}-0-t1u2v3`}
                  data-strk-img={`[pdp-${product.id}-name] gold jewelry`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view 1`}
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveImage(1)}
                className={`w-20 h-20 bg-ivory border overflow-hidden cursor-pointer rounded-none ${activeImage === 1 ? 'border-gold' : 'border-border'}`}
              >
                <img
                  data-strk-img-id={`pdp-thumb-${product.id}-1-t1u2v3`}
                  data-strk-img={`[pdp-${product.id}-name] gold jewelry detail`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${product.name} view 2`}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal"
            >
              {product.name}
            </h1>

            <p className="mt-3 text-2xl font-sans text-charcoal">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-gold' : 'text-border'}`}
                    fill={i < Math.floor(product.rating) ? '#B8860B' : 'none'}
                  />
                ))}
              </div>
              <span className="text-xs text-stone font-sans">({product.reviewCount} reviews)</span>
            </div>

            <p id={`pdp-${product.id}-desc`} className="mt-6 text-sm text-stone font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-widest font-sans font-medium border cursor-pointer rounded-none transition-colors duration-300 ${
                      selectedVariant === v
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-charcoal border-border hover:border-charcoal'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest font-sans font-medium text-charcoal mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border flex items-center justify-center text-charcoal hover:border-gold transition-colors bg-transparent cursor-pointer rounded-none"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-sans text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border flex items-center justify-center text-charcoal hover:border-gold transition-colors bg-transparent cursor-pointer rounded-none"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-gold text-cream hover:bg-gold-dark transition-colors duration-300 py-4 text-sm uppercase tracking-widest font-sans font-medium border-none cursor-pointer rounded-none"
            >
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 border-t border-border">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">Care: Avoid contact with water, perfume, and lotions. Store in the included pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivery within 5-7 business days.</p>
                <p className="mt-2">30-day returns accepted for unworn items in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-border">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal font-light mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
