import { Minus, Plus, ShieldCheck } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/shared/StarRating'

function ProductSummary({
  product,
  quantity,
  selectedTone,
  setQuantity,
  setSelectedTone,
}) {
  const { addItem } = useCart()

  return (
    <section className="space-y-8 lg:sticky lg:top-28 lg:self-start">
      <div className="space-y-4 border-b border-stone-800/80 pb-8">
        <p className="eyebrow text-amber-200">{product.type}</p>
        <h1 className="font-display text-5xl uppercase tracking-[0.22em] text-stone-100 sm:text-6xl">
          {product.name}
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-3xl text-stone-100">${product.price}</span>
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        <p className="max-w-xl text-base leading-8 text-stone-300">
          {product.shortDescription}
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
            Finish
          </p>
          <div className="flex flex-wrap gap-3">
            {product.tones.map((tone) => (
              <button
                className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${
                  selectedTone === tone
                    ? 'border-amber-200 bg-amber-200 text-stone-950'
                    : 'border-stone-700 bg-stone-900 text-stone-200 hover:border-stone-500'
                }`}
                key={tone}
                onClick={() => setSelectedTone(tone)}
                type="button"
              >
                {tone}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">
            Quantity
          </p>
          <div className="inline-flex items-center gap-3 rounded-full border border-stone-700/70 bg-stone-900 px-2 py-2 text-stone-100">
            <button
              aria-label="Decrease quantity"
              className="rounded-full p-2 transition hover:bg-stone-800"
              onClick={() => setQuantity((current) => Math.max(1, current - 1))}
              type="button"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-10 text-center text-sm">{quantity}</span>
            <button
              aria-label="Increase quantity"
              className="rounded-full p-2 transition hover:bg-stone-800"
              onClick={() => setQuantity((current) => current + 1)}
              type="button"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        <button
          className="button-primary w-full justify-center"
          onClick={() => addItem(product, quantity, selectedTone)}
          type="button"
        >
          Add to Cart
        </button>

        <div className="rounded-[1.75rem] border border-stone-800/80 bg-stone-900/70 p-5 text-sm leading-7 text-stone-300">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 h-5 w-5 text-amber-200" />
            <div>
              <p className="font-medium text-stone-100">Signature Velmora assurance</p>
              <p>
                {product.material}, hypoallergenic finishes, and gift-ready packaging with every order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSummary
