import React, { useState } from 'react'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const accordions = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p><strong>Materials:</strong> {product.materials}</p>
          <p><strong>Care:</strong> {product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p><strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping (2-3 days) available at checkout.</p>
          <p><strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging. Refunds processed within 5 business days of receiving the return.</p>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Product Name */}
      <div>
        <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-velmora-base">
          {product.name}
        </h1>
        <p className="text-sm text-velmora-text-light mt-1">
          {product.subtitle}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? 'fill-velmora-gold text-velmora-gold'
                  : 'text-velmora-taupe'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-velmora-text-light">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="font-serif text-2xl text-velmora-base">
        ${product.price}
      </p>

      {/* Variant Selector */}
      <div>
        <p className="text-xs tracking-wider uppercase text-velmora-text-light mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-2 text-xs tracking-wider uppercase border transition-all ${
                selectedVariant === variant
                  ? 'border-velmora-base bg-velmora-base text-white'
                  : 'border-velmora-border text-velmora-text hover:border-velmora-base'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-xs tracking-wider uppercase text-velmora-text-light mb-3">
          Quantity
        </p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center border border-velmora-border hover:border-velmora-base transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="text-lg w-8 text-center font-serif">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center border border-velmora-border hover:border-velmora-base transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-velmora-base text-white text-xs tracking-widest uppercase hover:bg-velmora-gold transition-colors duration-300 flex items-center justify-center gap-3"
      >
        <ShoppingBag className="w-4 h-4" />
        Add to Bag
      </button>

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-6 text-xs text-velmora-text-light">
        <span>Free Shipping</span>
        <span className="w-px h-4 bg-velmora-border" />
        <span>30-Day Returns</span>
        <span className="w-px h-4 bg-velmora-border" />
        <span>Hypoallergenic</span>
      </div>

      {/* Accordions */}
      <div className="border-t border-velmora-border pt-6 space-y-0">
        {accordions.map((accordion) => (
          <div
            key={accordion.id}
            className="border-b border-velmora-border"
          >
            <button
              onClick={() =>
                setOpenAccordion(openAccordion === accordion.id ? null : accordion.id)
              }
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm tracking-wider uppercase text-velmora-base">
                {accordion.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-velmora-text-light transition-transform duration-300 ${
                  openAccordion === accordion.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === accordion.id ? 'max-h-96 pb-4' : 'max-h-0'
              }`}
            >
              <div className="text-sm text-velmora-text-light leading-relaxed">
                {accordion.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
