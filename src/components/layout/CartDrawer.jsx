import { useEffect } from 'react'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/components/shared/CartContext'
import { formatCurrency } from '@/lib/format'

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateItemQuantity,
    removeItem,
    subtotal,
  } = useCart()

  useEffect(() => {
    if (!isCartOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCart()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeCart, isCartOpen])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velvet-950/50 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velvet-200/30 bg-cream-100 shadow-lift transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
        aria-hidden={!isCartOpen}
        aria-label="Shopping cart"
        aria-modal="true"
        role="dialog"
        inert={!isCartOpen ? '' : undefined}
      >
        <div className="flex items-center justify-between border-b border-velvet-200/70 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velvet-700">Your cart</p>
            <h2 className="font-serif text-3xl text-velvet-950">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velvet-200 bg-transparent p-2 text-velvet-900 transition hover:border-gold-400 hover:text-gold-500"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6 text-velvet-900">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[2rem] border border-dashed border-velvet-200 bg-cream-50 px-8 text-center">
              <ShoppingBag className="h-10 w-10 text-gold-500" strokeWidth={1.5} />
              <div className="space-y-2">
                <p className="font-serif text-3xl text-velvet-950">Your bag is empty</p>
                <p className="text-sm leading-6 text-velvet-700">
                  Add a few luminous pieces and they’ll appear here instantly.
                </p>
              </div>
            </div>
          ) : (
            items.map(({ product, quantity, variant }) => (
              <article
                key={`${product.slug}-${variant}`}
                className="rounded-[1.75rem] border border-velvet-200/70 bg-cream-50 p-4 shadow-editorial"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-2xl uppercase tracking-[0.16em] text-velvet-950">
                      {product.name}
                    </p>
                    <p className="mt-1 text-sm text-velvet-700">{variant}</p>
                    <p className="mt-2 text-sm text-velvet-700">{formatCurrency(product.price)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(product.slug, variant)}
                    className="text-sm font-medium text-velvet-700 transition hover:text-gold-500"
                    aria-label={`Remove ${product.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="inline-flex items-center rounded-full border border-velvet-200 bg-cream-100 p-1">
                    <button
                      type="button"
                      onClick={() => updateItemQuantity(product.slug, variant, quantity - 1)}
                      className="rounded-full p-2 text-velvet-900 transition hover:bg-cream-50"
                      aria-label={`Decrease quantity for ${product.name}`}
                    >
                      <Minus className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                    <span className="min-w-10 text-center text-sm font-medium text-velvet-950">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateItemQuantity(product.slug, variant, quantity + 1)}
                      className="rounded-full p-2 text-velvet-900 transition hover:bg-cream-50"
                      aria-label={`Increase quantity for ${product.name}`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                  <p className="text-base font-semibold text-velvet-950">
                    {formatCurrency(product.price * quantity)}
                  </p>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="border-t border-velvet-200/70 px-6 py-5 text-velvet-900">
          <div className="mb-4 flex items-center justify-between text-sm text-velvet-700">
            <span>Subtotal</span>
            <span className="text-lg font-semibold text-velvet-950">{formatCurrency(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-gold-400 px-5 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-velvet-950 transition hover:bg-gold-300"
          >
            Checkout Soon
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
