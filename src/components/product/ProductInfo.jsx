import { useState } from 'react'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import { useCart } from '@/cart/CartContext'

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [openAccordion, setOpenAccordion] = useState('description')
  const { addToCart } = useCart()

  const handleAdd = () => {
    addToCart(product.id, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    { key: 'description', label: 'Description', content: product.description },
    { key: 'materials', label: 'Materials & Care', content: `${product.materials}\n\n${product.care}` },
    { key: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Title & Price */}
      <div>
        {product.isNew && (
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans font-medium mb-2 inline-block">
            New Arrival
          </span>
        )}
        <h1 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-espresso leading-tight">
          {product.name}
        </h1>
        <p className="mt-2 font-sans text-xl text-espresso font-medium">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.round(product.rating) ? 'fill-gold text-gold' : 'fill-none text-taupe-light'}
            />
          ))}
        </div>
        <span className="text-xs text-taupe font-sans">
          {product.rating} · {product.reviewCount} reviews
        </span>
      </div>

      {/* Description */}
      <p className="text-sm font-sans text-taupe leading-relaxed">
        {product.description}
      </p>

      <div className="border-t border-taupe-light/20" />

      {/* Variant selector */}
      <div>
        <p className="text-[11px] tracking-wider uppercase text-espresso font-sans font-medium mb-3">
          Finish
        </p>
        <div className="flex gap-3">
          {product.variants.map(v => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`px-6 py-2.5 text-xs tracking-wider uppercase font-sans transition-colors ${
                selectedVariant === v
                  ? 'bg-espresso text-cream'
                  : 'border border-taupe-light/40 text-taupe hover:border-taupe'
              }`}
            >
              {v} Tone
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <p className="text-[11px] tracking-wider uppercase text-espresso font-sans font-medium mb-3">
          Quantity
        </p>
        <div className="flex items-center border border-taupe-light/40 w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-2.5 text-taupe hover:text-espresso transition-colors"
          >
            <Minus size={14} />
          </button>
          <span className="px-4 text-sm font-sans text-espresso min-w-[40px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-2.5 text-taupe hover:text-espresso transition-colors"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleAdd}
        className="w-full bg-gold text-cream font-sans text-xs tracking-widest uppercase py-4 hover:bg-gold-light transition-colors duration-300"
      >
        {added ? 'Added to Bag' : 'Add to Bag'}
      </button>

      <div className="border-t border-taupe-light/20" />

      {/* Accordions */}
      <div className="flex flex-col">
        {accordions.map((acc) => (
          <div key={acc.key} className="border-b border-taupe-light/20">
            <button
              onClick={() => setOpenAccordion(openAccordion === acc.key ? '' : acc.key)}
              className="w-full flex items-center justify-between py-4 text-xs tracking-wider uppercase text-espresso font-sans font-medium"
            >
              {acc.label}
              {openAccordion === acc.key ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openAccordion === acc.key ? 'max-h-60 pb-4' : 'max-h-0'
              }`}
            >
              <p className="text-sm font-sans text-taupe leading-relaxed whitespace-pre-line">
                {acc.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
