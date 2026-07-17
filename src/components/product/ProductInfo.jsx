import React, { useState } from 'react'
import { Star, Minus, Plus, ChevronDown } from 'lucide-react'
import { useCart } from '@/context/CartContext'

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-brand-gold-light/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-brand-base font-medium">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-brand-muted transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-brand-muted leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ProductInfo({ product }) {
  const [variant, setVariant] = useState(
    product.variants.find((v) => v.inStock)?.value || product.variants[0]?.value
  )
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem, toggleDrawer } = useCart()

  const handleAdd = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
    toggleDrawer()
  }

  return (
    <div className="space-y-7">
      {/* Product name */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gold mb-3">
          {product.category === 'huggies' ? 'Huggies' : product.category}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-brand-base font-semibold tracking-wide leading-tight">
          {product.name.toUpperCase()}
        </h1>
      </div>

      {/* Price + rating */}
      <div className="flex items-center gap-4">
        <span className="text-2xl font-serif text-brand-base">${product.price}</span>
        <div className="w-px h-4 bg-brand-gold-light/30" />
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.round(product.rating)
                    ? 'text-brand-gold fill-brand-gold'
                    : 'text-brand-muted-light'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-brand-muted">({product.reviews} reviews)</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-brand-muted leading-relaxed">{product.description}</p>

      {/* Variant selector */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase text-brand-base mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v.value}
              onClick={() => v.inStock && setVariant(v.value)}
              disabled={!v.inStock}
              className={`px-6 py-2.5 font-sans text-sm tracking-wide uppercase border transition-all ${
                variant === v.value
                  ? 'border-brand-gold bg-brand-gold text-white'
                  : v.inStock
                    ? 'border-brand-gold-light/30 text-brand-base hover:border-brand-gold'
                    : 'border-brand-muted-light/20 text-brand-muted-light line-through cursor-not-allowed'
              }`}
            >
              {v.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="font-sans text-xs tracking-widest uppercase text-brand-base mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-brand-gold-light/30 w-fit">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="p-3 hover:bg-brand-cream transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-6 tabular-nums text-sm font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            className="p-3 hover:bg-brand-cream transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button onClick={handleAdd} className="btn-primary w-full text-base py-4">
        {added ? 'Added to Bag' : 'Add to Bag — $' + (product.price * quantity).toFixed(0)}
      </button>

      {/* Accordion details */}
      <div className="pt-4">
        <AccordionItem title="Description" defaultOpen>
          {product.details}
        </AccordionItem>
        <AccordionItem title="Materials & Care">
          {product.care}
        </AccordionItem>
        <AccordionItem title="Shipping & Returns">
          {product.shipping}
        </AccordionItem>
      </div>
    </div>
  )
}
