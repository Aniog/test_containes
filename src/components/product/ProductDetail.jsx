import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Star, Minus, Plus, ShoppingBag } from 'lucide-react'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        className="accordion-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{title}</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  )
}

export default function ProductDetail({ product, onAddToCart }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="container-wide py-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Image gallery */}
        <div>
          {/* Main image */}
          <div className="aspect-[3/4] bg-[var(--velmora-bg-secondary)] mb-4 overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.shortName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                  selectedImage === index
                    ? 'border-[var(--velmora-accent)]'
                    : 'border-transparent hover:border-[var(--velmora-border)]'
                }`}
              >
                <img src={img} alt={`${product.shortName} view ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="md:pt-8">
          {product.badge && (
            <span className="inline-block bg-[var(--velmora-accent)] text-white text-[10px] uppercase tracking-wider px-3 py-1 mb-4">
              {product.badge}
            </span>
          )}

          <h1 className="font-serif-display text-3xl md:text-4xl uppercase tracking-wider mb-2">
            {product.shortName}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="star-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]'
                      : 'fill-none text-[var(--velmora-border)]'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-[var(--velmora-text-muted)]">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="font-serif-display text-2xl mb-6">${product.price}</p>

          <div className="hairline-divider mb-6" />

          {/* Description */}
          <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest mb-3">Color</p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`px-5 py-2 text-xs uppercase tracking-wider border transition-colors ${
                    variant === v
                      ? 'border-[var(--velmora-accent)] bg-[var(--velmora-accent)] text-white'
                      : 'border-[var(--velmora-border)] text-[var(--velmora-text-muted)] hover:border-[var(--velmora-text)]'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest mb-3">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-accent)] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-lg w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-accent)] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={() => onAddToCart(product, variant, quantity)}
            className="btn-primary w-full flex items-center justify-center gap-3 py-4"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Bag — ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Accordions */}
          <div className="mt-8">
            <Accordion title="Description">
              <p>{product.description}</p>
              <p className="mt-3">Each piece comes in a signature Velmora gift box, ready for gifting or keeping. Designed to be worn daily and loved for years.</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.materials}</p>
              <p className="mt-3">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
              <p className="mt-3">30-day hassle-free returns. Items must be unworn and in original packaging. Refunds processed within 5 business days.</p>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
