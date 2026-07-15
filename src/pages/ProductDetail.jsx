import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [expandedAccordions, setExpandedAccordions] = useState({})

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImage(0)
    setQuantity(1)
    setSelectedVariant('Gold')
    setExpandedAccordions({})
  }, [id])

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [id, activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">Product Not Found</h1>
          <Link to="/collection" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const toggleAccordion = (key) => {
    setExpandedAccordions(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const accordions = [
    { key: 'description', title: 'Description', content: product.description },
    { key: 'materials', title: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', title: 'Shipping & Returns', content: `${product.shipping}\n\n${product.returns}` },
  ]

  return (
    <main ref={containerRef} className="bg-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-4">
        <Link to="/collection" className="inline-flex items-center gap-2 text-xs text-charcoal-400 hover:text-charcoal tracking-wider uppercase transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3/4] bg-charcoal-50 rounded-lg overflow-hidden">
              <img
                data-strk-img-id={product.images[activeImage].id}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry product photo dark background studio`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.images[activeImage].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-1 aspect-square bg-charcoal-50 rounded overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === idx ? 'border-gold' : 'border-transparent hover:border-charcoal-200'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={`[${product.titleId}] jewelry detail photo`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            {/* Category */}
            <p className="font-sans text-xs tracking-superwide uppercase text-gold mb-2">
              {product.category}
            </p>

            {/* Name */}
            <h1 className="font-serif text-3xl md:text-4xl text-charcoal tracking-wide">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-charcoal-200'}`} />
                ))}
              </div>
              <span className="text-xs text-charcoal-400">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-charcoal mt-4">{formatPrice(product.price)}</p>

            {/* Short description */}
            <p className="font-sans text-sm text-charcoal-500 leading-relaxed mt-4 max-w-md">
              {product.shortDescription}
            </p>

            <hr className="hairline-divider my-6" />

            {/* Variant selector */}
            <div>
              <p className="font-sans text-xs tracking-wider uppercase text-charcoal-500 mb-3">
                Tone: <span className="text-charcoal font-medium">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs font-medium tracking-wider uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-charcoal-200 text-charcoal-500 hover:border-charcoal'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-wider uppercase text-charcoal-500 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-charcoal-200">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-4 py-3 text-charcoal-400 hover:text-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 py-3 text-sm font-medium text-charcoal border-x border-charcoal-200 min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-3 text-charcoal-400 hover:text-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="btn-primary w-full mt-6 py-4 text-sm"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(badge => (
                <span key={badge} className="text-[11px] text-charcoal-400 tracking-wide">
                  ✓ {badge}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-charcoal-100">
              {accordions.map(acc => (
                <div key={acc.key} className="border-b border-charcoal-100">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="font-sans text-xs tracking-wider uppercase text-charcoal">
                      {acc.title}
                    </span>
                    {expandedAccordions[acc.key] ? (
                      <ChevronUp className="w-4 h-4 text-charcoal-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-charcoal-400" />
                    )}
                  </button>
                  {expandedAccordions[acc.key] && (
                    <div className="pb-4 text-sm text-charcoal-500 leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20">
          <hr className="hairline-divider mb-12" />
          <h2 className="section-heading mb-10">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
