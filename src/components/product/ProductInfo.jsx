import React, { useState } from 'react'
import { Star, ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && <div className="pb-4 text-sm text-muted-foreground leading-relaxed">{children}</div>}
    </div>
  )
}

const ProductInfo = ({ product }) => {
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
  }

  return (
    <div className="md:pl-8 lg:pl-12">
      {/* Product name */}
      <h1 className="product-name text-2xl md:text-3xl mb-2">{product.name}</h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
              className="text-primary"
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      {/* Price */}
      <p className="text-2xl font-light mb-6">${product.price}</p>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{product.description}</p>

      {/* Variant selector */}
      <div className="mb-6">
        <label className="text-xs tracking-wider uppercase text-muted-foreground mb-3 block">
          Finish
        </label>
        <div className="flex gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              onClick={() => setVariant(v)}
              className={`px-6 py-2 text-xs tracking-widest uppercase border transition-colors ${
                variant === v
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-6">
        <label className="text-xs tracking-wider uppercase text-muted-foreground mb-3 block">
          Quantity
        </label>
        <div className="flex items-center border border-border w-32">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex-1 py-2 text-center hover:bg-secondary transition-colors"
          >
            −
          </button>
          <span className="flex-1 py-2 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex-1 py-2 text-center hover:bg-secondary transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className="btn-primary w-full mb-4"
      >
        Add to Bag — ${(product.price * quantity).toFixed(2)}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Free shipping on all orders · 30-day returns
      </p>

      {/* Accordions */}
      <div className="mt-8">
        <Accordion title="Description">
          <p>{product.description}</p>
          <p className="mt-2">Each piece arrives in our signature gift box, ready for gifting or treating yourself.</p>
        </Accordion>
        <Accordion title="Materials & Care">
          <p>18K gold plated over recycled brass. Hypoallergenic and nickel-free.</p>
          <p className="mt-2">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
        </Accordion>
        <Accordion title="Shipping & Returns">
          <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days.</p>
          <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
        </Accordion>
      </div>
    </div>
  )
}

export default ProductInfo
