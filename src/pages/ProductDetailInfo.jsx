import { Check, Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { cn, formatPrice } from '@/lib/utils'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'
import QuantitySelector from '@/components/QuantitySelector'
import Accordion from '@/components/Accordion'

export default function ProductDetailInfo({ product }) {
  const { addItem } = useCart()
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $50. Orders are processed within 1–2 business days. We offer 30-day hassle-free returns on unworn pieces in original packaging.',
    },
  ]

  return (
    <div className="lg:py-8">
      <p className="font-sans text-[11px] uppercase tracking-widest text-gold font-semibold mb-3">
        {product.category}
      </p>
      <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest text-ink font-medium mb-4">
        {product.name}
      </h1>

      <div className="flex items-center gap-3 mb-5">
        <StarRating rating={product.rating} size={16} />
        <span className="font-sans text-sm text-stone">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      <p className="font-sans text-2xl text-ink font-medium mb-6">{formatPrice(product.price)}</p>

      <p className="font-sans text-base text-stone leading-relaxed mb-8">{product.description}</p>

      <div className="mb-6">
        <span className="font-sans text-xs uppercase tracking-widest text-ink font-semibold block mb-3">
          Tone
        </span>
        <div className="flex gap-3">
          {['gold', 'silver'].map((tone) => (
            <button
              key={tone}
              type="button"
              onClick={() => setVariant(tone)}
              className={cn(
                'px-6 py-2.5 border font-sans text-xs uppercase tracking-widest transition-all',
                variant === tone
                  ? 'border-ink bg-ink text-cream'
                  : 'border-cream-muted text-ink hover:border-gold'
              )}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <span className="font-sans text-xs uppercase tracking-widest text-ink font-semibold block mb-3">
          Quantity
        </span>
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        className={cn(
          'w-full py-4 font-sans text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2',
          added ? 'bg-ink-soft text-cream' : 'bg-gold text-ink hover:bg-gold-dark'
        )}
      >
        {added ? (
          <>
            <Check size={16} />
            Added to Cart
          </>
        ) : (
          'Add to Cart'
        )}
      </button>

      <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-cream-muted">
        <div className="flex flex-col items-center text-center gap-2">
          <Truck size={20} className="text-gold" />
          <span className="font-sans text-[10px] uppercase tracking-wider text-stone">
            Free Shipping
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <RotateCcw size={20} className="text-gold" />
          <span className="font-sans text-[10px] uppercase tracking-wider text-stone">
            30-Day Returns
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <ShieldCheck size={20} className="text-gold" />
          <span className="font-sans text-[10px] uppercase tracking-wider text-stone">
            Hypoallergenic
          </span>
        </div>
      </div>

      <div className="mt-10">
        <Accordion items={accordionItems} />
      </div>
    </div>
  )
}
