import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs font-semibold tracking-widest uppercase text-charcoal">
          {title}
        </span>
        {open ? <ChevronUp className="w-4 h-4 text-stone-400" /> : <ChevronDown className="w-4 h-4 text-stone-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-stone-600 font-sans leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => cancelAnimationFrame(frameId)
    }
  }, [product])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm text-gold hover:text-gold-hover transition-colors">
          Back to Shop
        </Link>
      </div>
    )
  }

  const variant = product.variants[selectedVariant]

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setQuantity(1)
  }

  // Related products (same category, different id)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2">
              {[0, 1].map(idx => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-20 md:w-20 md:h-24 flex-shrink-0 border-2 transition-colors duration-300 ${
                    activeImage === idx ? 'border-gold' : 'border-stone-200'
                  }`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] bg-ivory overflow-hidden">
              <img
                data-strk-img-id={`${product.imgId}-main-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-product text-charcoal">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'}`} />
                ))}
              </div>
              <span className="text-xs text-stone-500">({product.reviews} reviews)</span>
            </div>

            <p className="text-xl font-serif text-charcoal mt-3">${product.price}</p>

            <p id={product.descId} className="text-sm text-stone-600 font-sans leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <label className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal block mb-2">
                Tone
              </label>
              <div className="flex gap-2">
                {product.variants.map((v, idx) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(idx)}
                    className={`px-5 py-2 rounded-full text-xs font-sans font-medium tracking-wide transition-all duration-300 ${
                      selectedVariant === idx
                        ? 'bg-gold text-cream'
                        : 'bg-ivory text-stone-600 border border-stone-300 hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs font-sans font-semibold tracking-widest uppercase text-charcoal block mb-2">
                Quantity
              </label>
              <div className="inline-flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-charcoal transition-colors"
                  aria-label="Decrease"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-sans text-charcoal">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-charcoal transition-colors"
                  aria-label="Increase"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-6 bg-gold hover:bg-gold-hover text-cream font-sans text-xs font-semibold tracking-widest uppercase py-4 flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout.</p>
                <p>We offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24 pt-12 border-t border-stone-200">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {related.map(p => (
                <Link key={p.id} to={`/product/${p.slug}`} className="group">
                  <div className="aspect-[3/4] bg-ivory overflow-hidden">
                    <img
                      data-strk-img-id={`${p.imgId}-related`}
                      data-strk-img={`[${p.descId}] [${p.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <h3 className="font-serif text-sm uppercase tracking-product text-charcoal mt-3">{p.name}</h3>
                  <p className="text-sm font-sans text-stone-600 mt-0.5">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
