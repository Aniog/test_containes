import { Minus, Plus } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import StarRating from '@/components/shared/StarRating'

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'materialsCare', label: 'Materials & Care' },
  { key: 'shippingReturns', label: 'Shipping & Returns' },
]

function ProductDetails({
  product,
  selectedTone,
  setSelectedTone,
  quantity,
  setQuantity,
  onAddToCart,
}) {
  return (
    <div className="space-y-8 text-stone-900">
      <div className="space-y-4 border-b border-stone-200 pb-8">
        <p className="text-xs uppercase tracking-[0.35em] text-stone-500">{product.category}</p>
        <h1
          id={`product-${product.id}-title`}
          className="font-serif text-4xl uppercase leading-none tracking-[0.28em] sm:text-5xl"
        >
          {product.name}
        </h1>
        <p className="text-sm uppercase tracking-[0.25em] text-stone-700">
          {formatPrice(product.price)}
        </p>
        <StarRating value={product.rating} reviews={product.reviews} />
        <p id={`product-${product.id}-desc`} className="max-w-xl text-base leading-8 text-stone-600">
          {product.description}
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Tone</p>
        <div className="flex flex-wrap gap-3">
          {product.tones.map((tone) => (
            <button
              key={tone}
              type="button"
              onClick={() => setSelectedTone(tone)}
              className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.28em] transition ${
                selectedTone === tone
                  ? 'border-stone-900 bg-stone-900 text-stone-50'
                  : 'border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-900'
              }`}
            >
              {tone}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Quantity</p>
        <div className="inline-flex items-center rounded-full border border-stone-300 bg-white">
          <button
            type="button"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            className="px-4 py-3 text-stone-900"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-12 text-center text-sm text-stone-900">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((value) => value + 1)}
            className="px-4 py-3 text-stone-900"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onAddToCart(product, selectedTone, quantity)}
        className="inline-flex w-full items-center justify-center rounded-full bg-amber-200 px-6 py-4 text-sm uppercase tracking-[0.3em] text-stone-950 transition hover:bg-amber-300"
      >
        Add to Cart
      </button>

      <div className="divide-y divide-stone-200 rounded-[2rem] border border-stone-200 bg-white">
        {accordionItems.map((item) => (
          <details key={item.key} className="group px-5 py-4" open={item.key === 'description'}>
            <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.28em] text-stone-900">
              {item.label}
            </summary>
            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600">
              {product[item.key]}
            </p>
          </details>
        ))}
      </div>
    </div>
  )
}

export default ProductDetails
