import { useState } from 'react'
import { ShoppingBag, Heart, Truck, RotateCcw } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'
import StarRating from '@/components/ui/StarRating'
import QuantitySelector from '@/components/ui/QuantitySelector'

export default function ProductInfo({ product }) {
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const handleAdd = () => {
    setIsAdding(true)
    addItem(product, variant, quantity)
    setTimeout(() => setIsAdding(false), 800)
  }

  return (
    <div className="lg:pl-8 xl:pl-16">
      <p className="text-xs font-sans uppercase tracking-ui text-gold mb-2">
        {product.category}
      </p>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-espresso tracking-wide">
        {product.name}
      </h1>
      <p id={`product-desc-${product.id}`} className="sr-only">
        {product.description}
      </p>

      <div className="mt-3 flex items-center gap-3">
        <StarRating rating={product.rating} size={14} />
        <span className="text-xs text-taupe">
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      <p className="mt-4 text-xl md:text-2xl font-sans font-medium text-espresso">
        {formatPrice(product.price)}
      </p>

      <p className="mt-5 text-sm md:text-base font-light text-taupe leading-relaxed">
        {product.description}
      </p>

      <div className="mt-6">
        <p className="text-xs font-sans uppercase tracking-ui text-espresso mb-3">
          Metal Tone
        </p>
        <div className="flex flex-wrap gap-3">
          {product.variants.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setVariant(v)}
              className={`px-5 py-2.5 text-xs font-sans uppercase tracking-ui border transition-all ${
                variant === v
                  ? 'border-espresso bg-espresso text-cream'
                  : 'border-warm-gray text-espresso hover:border-espresso'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-sans uppercase tracking-ui text-espresso mb-3">
          Quantity
        </p>
        <QuantitySelector value={quantity} onChange={setQuantity} />
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleAdd}
          disabled={isAdding}
          className="flex-1 py-4 bg-espresso text-cream uppercase text-xs tracking-ui font-medium hover:bg-charcoal transition-colors flex items-center justify-center gap-2 disabled:opacity-80"
        >
          <ShoppingBag size={16} strokeWidth={1.5} />
          {isAdding ? 'Added to Cart' : 'Add to Cart'}
        </button>
        <button
          type="button"
          aria-label="Add to wishlist"
          className="px-5 py-4 border border-warm-gray text-espresso hover:border-espresso transition-colors flex items-center justify-center"
        >
          <Heart size={18} strokeWidth={1.5} />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-taupe">
        <div className="flex items-center gap-2">
          <Truck size={14} strokeWidth={1.5} />
          Free shipping over $75
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw size={14} strokeWidth={1.5} />
          30-day returns
        </div>
      </div>
    </div>
  )
}
