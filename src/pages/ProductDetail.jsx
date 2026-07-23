import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../lib/utils'
import ProductCard from '../components/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-widest text-charcoal hover:text-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <div className="font-sans text-sm text-graphite leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeThumb, setActiveThumb] = useState(0)
  const { addItem } = useCart()
  const pageRef = useRef(null)

  const relatedProducts = products
    .filter(p => p.id !== product?.id)
    .slice(0, 4)

  useEffect(() => {
    window.scrollTo(0, 0)
    setQuantity(1)
    setVariant('gold')
    setActiveThumb(0)
  }, [slug])

  useEffect(() => {
    const container = pageRef.current
    if (!container) return
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, container)
    })
    return () => cancelAnimationFrame(raf)
  }, [activeThumb, slug])

  if (!product) {
    return (
      <div className="section-padding text-center pt-32">
        <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
        <Link to="/collection" className="btn-outline inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, quantity, variant)
  }

  // Simulated gallery — different background queries for variety
  const galleryImages = [
    { query: `[pdp-name] ${product.category} ${variant} tone elegant jewelry`, ratio: '1x1', width: '700' },
    { query: `[pdp-name] ${product.category} ${variant} tone model wearing jewelry`, ratio: '1x1', width: '700' },
    { query: `[pdp-name] ${product.category} ${variant} tone detail closeup`, ratio: '1x1', width: '700' },
  ]

  return (
    <div ref={pageRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center gap-2 font-sans text-xs text-graphite">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div
              className="aspect-square bg-warm-gray rounded-lg overflow-hidden"
              data-strk-bg={`[pdp-name] ${product.description} gold jewelry elegant`}
              data-strk-bg-id={`pdp-main-${product.id}-${activeThumb}`}
              data-strk-bg-ratio={galleryImages[activeThumb].ratio}
              data-strk-bg-width={galleryImages[activeThumb].width}
            />

            {/* Thumbnails */}
            <div className="flex gap-3">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveThumb(index)}
                  className={`flex-1 aspect-square bg-warm-gray rounded-lg overflow-hidden border-2 transition-colors ${
                    activeThumb === index ? 'border-gold' : 'border-transparent hover:border-sand'
                  }`}
                  data-strk-bg={`[pdp-name] ${product.category} ${variant} view ${index + 1}`}
                  data-strk-bg-id={`pdp-thumb-${product.id}-${index}`}
                  data-strk-bg-ratio="1x1"
                  data-strk-bg-width="200"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-4">
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 font-sans text-xs text-graphite uppercase tracking-widest hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              Back to Shop
            </Link>

            <h1
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest-plus text-charcoal mb-4"
              id="pdp-name"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-sand'}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-graphite">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-3xl text-charcoal mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="font-sans text-base text-graphite leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs uppercase tracking-widest text-charcoal mb-3">
                Tone: <span className="text-graphite capitalize">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setVariant(color)}
                    className={`px-6 py-2.5 font-sans text-xs uppercase tracking-widest border transition-all duration-300 ${
                      variant === color
                        ? 'bg-charcoal text-white border-charcoal'
                        : 'bg-transparent text-charcoal border-sand hover:border-charcoal'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-sans text-xs uppercase tracking-widest text-charcoal mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-sand">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-11 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center font-sans text-sm text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-11 flex items-center justify-center text-charcoal hover:text-gold transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button onClick={handleAddToCart} className="btn-primary w-full text-center mb-8">
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="border-t border-sand">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  <strong>Materials:</strong> 18K gold-plated surgical steel, hypoallergenic
                  and nickel-free. Crystal accents are cubic zirconia.
                </p>
                <p className="mt-3">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  <strong>Free worldwide shipping</strong> on all orders. Delivery takes
                  5–10 business days for international orders and 2–5 days for domestic.
                </p>
                <p className="mt-3">
                  <strong>30-day returns:</strong> Not in love? Return your unworn piece
                  within 30 days for a full refund. We'll even cover the return shipping.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-warm-gray">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-4">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              You May Also Like
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
