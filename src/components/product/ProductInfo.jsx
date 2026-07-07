import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { StarRating } from '@/components/ui/StarRating'
import { QuantitySelector } from '@/components/ui/QuantitySelector'
import { Accordion } from '@/components/ui/Accordion'
import { useCart } from '@/context/CartContext'

const variants = [
  { id: 'gold', name: '18K Gold', tone: 'bg-velmora-gold' },
  { id: 'silver', name: 'Silver', tone: 'bg-gray-300' },
]

export function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem, openCart } = useCart()

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Standard delivery arrives within 5–10 business days. Returns accepted within 30 days of delivery in original condition.',
    },
  ]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    openCart()
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex flex-col">
      <Link
        to="/shop"
        className="hidden md:inline-flex items-center gap-2 text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-dark transition-colors mb-6"
      >
        <ArrowLeft size={14} />
        Back to Shop
      </Link>

      <p className="font-sans text-xs tracking-[0.2em] uppercase text-velmora-gold-dark mb-3">
        {product.category}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-dark uppercase tracking-wide mb-4">
        {product.name}
      </h1>

      <div className="flex items-center gap-4 mb-5">
        <StarRating rating={product.rating} count={product.reviewCount} />
      </div>

      <p className="font-serif text-3xl text-velmora-dark mb-6">${product.price}</p>

      <p className="font-sans text-sm text-velmora-stone leading-relaxed mb-8">
        {product.description}
      </p>

      {/* Variant selector */}
      <div className="mb-6">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-3">
          Metal Tone
        </p>
        <div className="flex flex-wrap gap-3">
          {variants.map((variant) => (
            <button
              key={variant.id}
              type="button"
              onClick={() => setSelectedVariant(variant.id)}
              className={cn(
                'flex items-center gap-2.5 px-4 py-2.5 border text-sm font-sans transition-all',
                selectedVariant === variant.id
                  ? 'border-velmora-dark bg-velmora-dark text-velmora-cream'
                  : 'border-velmora-sand text-velmora-dark hover:border-velmora-dark'
              )}
            >
              <span className={cn('w-4 h-4 rounded-full border border-velmora-sand', variant.tone)} />
              {variant.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <Button onClick={handleAddToCart} className="flex-1" size="lg">
          {added ? 'Added to Cart' : 'Add to Cart'}
        </Button>
        <button
          type="button"
          className="w-14 h-14 flex items-center justify-center border border-velmora-sand text-velmora-dark hover:border-velmora-dark transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={20} />
        </button>
      </div>

      <div className="mb-8">
        <Accordion items={accordionItems} />
      </div>

      <div className="pt-6 border-t border-velmora-sand">
        <p className="font-sans text-xs text-velmora-muted">
          Free shipping over $50 · 30-day returns · Gift packaging available
        </p>
      </div>
    </div>
  )
}
