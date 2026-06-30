import React, { useState } from 'react'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { useCart } from '../../context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="velmora-body-sm font-medium tracking-wide">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-[var(--velmora-text-muted)] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="velmora-body-sm text-[var(--velmora-text-muted)] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div className="velmora-container mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                  selectedImage === i
                    ? 'border-[var(--velmora-text)]'
                    : 'border-transparent hover:border-[var(--velmora-border)]'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 aspect-[3/4] bg-[var(--velmora-bg-alt)] overflow-hidden">
            <img
              src={product.images[selectedImage]}
              alt={product.shortName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="velmora-body-xs text-[var(--velmora-text-light)] tracking-[0.2em] mb-2">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </p>
          <h1 className="velmora-product-name text-2xl md:text-3xl mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]'
                      : 'text-[var(--velmora-border)]'
                  }`}
                />
              ))}
            </div>
            <span className="velmora-body-xs text-[var(--velmora-text-muted)]">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="velmora-heading-md mb-6">${product.price}</p>

          <div className="velmora-divider mb-6" />

          {/* Description */}
          <p className="velmora-body text-[var(--velmora-text-muted)] mb-6">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mb-6">
            <label className="velmora-body-xs text-[var(--velmora-text)] tracking-wider mb-3 block">
              Color
            </label>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-5 py-2.5 velmora-body-xs tracking-wider transition-all ${
                    selectedVariant === variant
                      ? 'bg-[var(--velmora-text)] text-[var(--velmora-bg)]'
                      : 'border border-[var(--velmora-border)] text-[var(--velmora-text-muted)] hover:border-[var(--velmora-text)]'
                  }`}
                >
                  {variant === 'gold' ? 'Gold' : 'Silver'}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <label className="velmora-body-xs text-[var(--velmora-text)] tracking-wider mb-3 block">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-text)] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="velmora-body w-8 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-text)] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className="velmora-btn velmora-btn-primary w-full mb-4"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart — ${(product.price * quantity).toFixed(2)}
          </button>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 text-[var(--velmora-text-light)]">
            <span className="velmora-body-xs flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              Free shipping
            </span>
            <span className="velmora-body-xs flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              30-day returns
            </span>
            <span className="velmora-body-xs flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
              Hypoallergenic
            </span>
          </div>

          <div className="velmora-divider my-8" />

          {/* Accordions */}
          <Accordion title="Description" defaultOpen>
            <p>{product.description}</p>
            <p className="mt-3">Each piece comes in our signature Velmora gift box, ready for gifting or treating yourself.</p>
          </Accordion>
          <Accordion title="Materials & Care">
            <p>18K gold plated over sterling silver base. Hypoallergenic and nickel-free.</p>
            <p className="mt-3">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
            <p className="mt-3">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
