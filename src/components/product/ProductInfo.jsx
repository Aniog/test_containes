import React, { useState } from 'react'
import { Star, ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product.id, selectedVariant, quantity, {
      name: product.name,
      price: product.price,
      images: product.images,
    })
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
      content: `Crafted from recycled brass with a luxurious 18K gold plating. To maintain the beauty of your piece, avoid contact with water, perfume, and lotions. Store in the provided velvet pouch when not wearing. Gently polish with a soft cloth to restore shine.`,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: `Free worldwide shipping on all orders. Orders are processed within 1-2 business days and typically arrive within 5-10 business days. We offer hassle-free 30-day returns for unworn items in original packaging.`,
    },
  ]

  return (
    <div className="md:pl-8 lg:pl-12">
      {/* Product name */}
      <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wider text-velmora-base">
        {product.name}
      </h1>

      {/* Price */}
      <p className="text-xl md:text-2xl text-velmora-base mt-3 font-light">${product.price}</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-warm-dark'}
            />
          ))}
        </div>
        <span className="text-sm text-velmora-muted">
          {product.rating} ({product.reviews} reviews)
        </span>
      </div>

      <div className="w-full h-px bg-velmora-warm-dark my-6" />

      {/* Variant selector */}
      <div className="mb-6">
        <p className="text-sm tracking-wider text-velmora-base mb-3">FINISH</p>
        <div className="flex gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              onClick={() => setSelectedVariant(variant)}
              className={`px-6 py-2.5 text-sm tracking-wider border transition-all duration-200 ${
                selectedVariant === variant
                  ? 'border-velmora-gold bg-velmora-gold/10 text-velmora-base'
                  : 'border-velmora-warm-dark text-velmora-muted hover:border-velmora-base'
              }`}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mb-8">
        <p className="text-sm tracking-wider text-velmora-base mb-3">QUANTITY</p>
        <div className="flex items-center border border-velmora-warm-dark w-32">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex-1 py-2.5 text-center hover:bg-velmora-warm/50 transition-colors"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="flex-1 py-2.5 text-center text-sm">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="flex-1 py-2.5 text-center hover:bg-velmora-warm/50 transition-colors"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart */}
      <button
        onClick={handleAddToCart}
        className="w-full py-4 bg-velmora-base text-velmora-cream text-sm tracking-widest font-medium hover:bg-velmora-charcoal transition-colors duration-300"
      >
        ADD TO BAG — ${product.price}
      </button>

      {/* Trust badges */}
      <div className="mt-6 flex flex-wrap gap-4 text-xs text-velmora-muted">
        <span>Free Shipping</span>
        <span className="text-velmora-warm-dark">·</span>
        <span>30-Day Returns</span>
        <span className="text-velmora-warm-dark">·</span>
        <span>18K Gold Plated</span>
      </div>

      {/* Accordions */}
      <div className="mt-8 space-y-0">
        {accordions.map((acc) => (
          <div key={acc.id} className="border-t border-velmora-warm-dark">
            <button
              onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm tracking-wider text-velmora-base">{acc.title}</span>
              {openAccordion === acc.id ? (
                <ChevronUp size={18} className="text-velmora-muted" />
              ) : (
                <ChevronDown size={18} className="text-velmora-muted" />
              )}
            </button>
            {openAccordion === acc.id && (
              <div className="pb-4">
                <p className="text-sm text-velmora-muted leading-relaxed">{acc.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
