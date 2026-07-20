import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-brand-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-btn font-semibold text-brand-stone-800">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-brand-stone-400" /> : <ChevronDown className="w-4 h-4 text-brand-stone-400" />}
      </button>
      {open && <div className="pb-4 text-sm text-brand-stone-600 leading-relaxed">{children}</div>}
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const relatedRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedVariant('Gold')
      setQuantity(1)
      setActiveImage(0)
    }
  }, [product?.id])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeImage])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
  }, [])

  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center">
        <p className="font-serif text-2xl text-brand-stone-800">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-sm text-brand-gold hover:text-brand-gold-light transition-colors">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div className="pt-20 md:pt-24">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] overflow-hidden bg-brand-cream mb-3">
              <img
                data-strk-img-id={`pdp-${product.imgId}-${activeImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] ${activeImage === 0 ? 'front view' : 'worn'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] ${i === 0 ? 'front' : 'side'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2 md:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-product text-brand-stone-800"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-stone-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-brand-stone-400">({product.reviews})</span>
            </div>

            <p className="mt-4 text-xl font-serif text-brand-stone-800">${product.price}</p>

            <p id={product.descId} className="mt-4 text-sm text-brand-stone-600 leading-relaxed">
              {product.details}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-btn font-semibold text-brand-stone-800 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-btn font-medium border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-stone-200 text-brand-stone-600 hover:border-brand-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-btn font-semibold text-brand-stone-800 mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-brand-stone-200 text-brand-stone-600 hover:border-brand-stone-400 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm text-brand-stone-800 w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-brand-stone-200 text-brand-stone-600 hover:border-brand-stone-400 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="mt-8 w-full bg-brand-gold text-white text-xs uppercase tracking-btn font-medium py-4 flex items-center justify-center gap-2 hover:bg-brand-gold-light transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                {product.details}
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-2">To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery takes 5–7 business days. Express shipping available at checkout.</p>
                <p className="mt-2">We offer a 30-day return policy. Items must be unworn and in original packaging. Contact us at hello@velmora.com to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="border-t border-brand-stone-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-brand-stone-800 text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-brand-cream">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 font-serif text-xs md:text-sm uppercase tracking-product text-brand-stone-800">{p.name}</h3>
                <p className="text-xs md:text-sm text-brand-stone-600 mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
