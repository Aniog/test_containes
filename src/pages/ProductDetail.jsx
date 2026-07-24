import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ui/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-widest uppercase text-foreground hover:text-accent transition-colors"
      >
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 font-sans text-sm text-foregroundMuted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImg, setSelectedImg] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setSelectedImg(0)
    }
  }, [product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product, selectedImg])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-foreground">Product not found</h2>
          <Link to="/shop" className="mt-4 inline-block font-sans text-sm tracking-wide text-accent hover:text-accentHover">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id && (p.category === product.category || p.bestseller)).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const imageUrls = [product.imageUrl, product.imageUrl2]
  const imageIds = [product.imgId, product.imgId2]

  return (
    <div ref={containerRef} className="min-h-screen bg-surface pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-6 md:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[3x4] bg-surfaceAlt overflow-hidden mb-4">
              <img
                src={imageUrls[selectedImg]}
                data-strk-img-id={imageIds[selectedImg]}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {imageUrls.map((url, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`w-20 aspect-[3x4] bg-surfaceAlt overflow-hidden border-2 transition-colors ${
                    selectedImg === idx ? 'border-accent' : 'border-transparent hover:border-hairline'
                  }`}
                >
                  <img
                    src={url}
                    data-strk-img-id={`thumb-${imageIds[idx]}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-foreground">
              {product.name}
            </h1>
            <p className="font-sans text-lg text-foreground mt-3 font-medium">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-accent fill-accent' : 'text-hairline'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-foregroundMuted">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p id={product.descId} className="font-sans text-sm text-foregroundMuted mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-foregroundMuted mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`font-sans text-xs tracking-widest uppercase px-6 py-2.5 border transition-colors duration-200 rounded-none ${
                      selectedTone === tone
                        ? 'border-accent bg-accent text-foreground'
                        : 'border-hairline text-foregroundMuted hover:border-accent hover:text-foreground'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-foregroundMuted mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-hairline text-foregroundMuted hover:text-foreground hover:border-accent transition-colors rounded-none"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm w-8 text-center text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-hairline text-foregroundMuted hover:text-foreground hover:border-accent transition-colors rounded-none"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full bg-accent hover:bg-accentHover text-foreground font-sans text-sm tracking-widest uppercase py-4 transition-colors duration-200 rounded-none"
            >
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-hairline">
              <Accordion title="Description">
                <p>{product.description}</p>
                <p className="mt-3">Each piece is hand-finished with care, ensuring the kind of quality that stands up to daily wear while retaining its warmth and luster.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>Base: Brass with 18K gold plating. Crystals: premium glass crystals with AB coating.</p>
                <p className="mt-3">Care: Avoid direct contact with perfume, lotion, and water. Store in the provided pouch when not wearing. Clean gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery: 5–10 business days. Express: 2–4 business days.</p>
                <p className="mt-3">30-day hassle-free returns. Items must be unworn and in original packaging. Gift sets must be returned complete.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-foreground text-center mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
