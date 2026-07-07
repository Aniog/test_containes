import React, { useState } from 'react'
import { Star, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem(product, selectedVariant)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Name & Price */}
      <div>
        <h1 className="product-name text-2xl md:text-3xl lg:text-4xl tracking-wider">{product.name}</h1>
        <p className="mt-3 text-2xl md:text-3xl font-light text-truffle-800">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center text-gold">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill={i < Math.round(product.rating) ? '#C8A96E' : 'none'} />
          ))}
        </div>
        <span className="text-sm text-truffle-500">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      <div className="hairline-divider" />

      {/* Description */}
      <p className="text-sm text-truffle-500 leading-relaxed">{product.description}</p>

      {/* Variant selector */}
      {product.variants.length > 1 && (
        <div>
          <p className="text-xs tracking-widest uppercase text-truffle-600 mb-3">Finish</p>
          <div className="flex gap-3">
            {product.variants.map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVariant(v)}
                className={`px-5 py-2.5 text-xs tracking-wide transition-all duration-200 ${
                  selectedVariant === v
                    ? 'bg-truffle-800 text-cream'
                    : 'border border-truffle-300/40 text-truffle-600 hover:border-truffle-800'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <p className="text-xs tracking-widest uppercase text-truffle-600 mb-3">Quantity</p>
        <div className="flex items-center border border-truffle-300/40 w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-3 hover:text-gold transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="px-5 text-sm tabular-nums">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-3 hover:text-gold transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        className={`btn-primary w-full text-xs tracking-widest uppercase gap-2 ${
          added ? 'bg-gold hover:bg-gold' : ''
        }`}
      >
        <ShoppingBag size={16} />
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>

      {/* Accordions */}
      <div className="border-t border-truffle-200/40 pt-2 mt-4 space-y-0">
        <Accordion title="Description" defaultOpen>
          <p className="text-sm text-truffle-500 leading-relaxed">{product.description}</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <div className="space-y-3 text-sm text-truffle-500 leading-relaxed">
            <div>
              <p className="font-medium text-truffle-700 mb-1">Materials</p>
              <p>{product.materials}</p>
            </div>
            <div>
              <p className="font-medium text-truffle-700 mb-1">Care</p>
              <p>{product.care}</p>
            </div>
          </div>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <p className="text-sm text-truffle-500 leading-relaxed">{product.shipping}</p>
        </Accordion>
      </div>
    </div>
  )
}

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-truffle-200/40">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase text-truffle-700 hover:text-truffle-900 transition-colors"
      >
        {title}
        <span className={`transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
