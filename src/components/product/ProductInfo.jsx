import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import RatingStars from '@/components/common/RatingStars'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'

const ProductInfo = ({ product }) => {
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 shadow-xl shadow-stone-900/5 sm:p-8">
      <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
        {product.category}
      </p>
      <h1
        id={`product-${product.id}-name`}
        className="mt-3 font-display text-4xl uppercase tracking-[0.22em] text-stone-950 sm:text-5xl"
      >
        {product.name}
      </h1>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-2xl font-medium text-stone-950">
          {formatPrice(product.price)}
        </p>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
      </div>
      <p
        id={`product-${product.id}-description`}
        className="mt-6 text-base leading-8 text-stone-600"
      >
        {product.shortDescription}
      </p>

      <div className="mt-8">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-500">
          Tone
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {product.variants.map((variant) => (
            <button
              key={variant}
              type="button"
              aria-pressed={selectedVariant === variant}
              className={`rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                selectedVariant === variant
                  ? 'border-stone-950 bg-stone-950 text-stone-50'
                  : 'border-stone-300 bg-transparent text-stone-700 hover:border-amber-400 hover:text-stone-950'
              }`}
              onClick={() => setSelectedVariant(variant)}
            >
              {variant}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div className="inline-flex items-center rounded-full border border-stone-300 bg-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="p-3 text-stone-600 transition hover:text-stone-950"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-sm text-stone-950">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            className="p-3 text-stone-600 transition hover:text-stone-950"
            onClick={() => setQuantity((current) => current + 1)}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="mt-8 w-full rounded-full bg-amber-400 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-950 transition duration-300 hover:bg-amber-300"
        onClick={() => addItem(product, selectedVariant, quantity)}
      >
        Add to Cart
      </button>

      <div className="mt-8 grid gap-3 border-t border-stone-200 pt-6 text-sm text-stone-600 sm:grid-cols-3">
        {product.details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>
    </div>
  )
}

export default ProductInfo
