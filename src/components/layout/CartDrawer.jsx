import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/products'

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    subtotal,
    closeCart,
    removeItem,
    updateItemQuantity,
    clearCart,
  } = useCart()

  useEffect(() => {
    if (!isCartOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCart()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isCartOpen, closeCart])

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-ink/45 transition-opacity duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        aria-hidden={!isCartOpen}
        inert={isCartOpen ? undefined : ''}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-line bg-surface shadow-soft transition-transform duration-500 ease-luxe ${
          isCartOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-muted">
              Your cart
            </p>
            <h2 className="font-serif text-3xl text-ink">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full border border-line p-3 text-ink transition-colors duration-300 hover:bg-accent-soft/50"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full border border-line bg-canvas p-5 text-accent">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-3xl text-ink">A little space for something special</h3>
              <p className="text-sm leading-7 text-ink-muted">
                Add your favorite pieces and they will appear here, ready for gifting or keeping.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="velmora-scrollbar flex-1 space-y-4 overflow-y-auto px-5 py-6">
              {items.map((item) => (
                <article
                  key={item.cartKey}
                  className="rounded-[1.75rem] border border-line bg-canvas px-4 py-4 text-ink shadow-card"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-ink-muted">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-xl text-ink">{item.name}</h3>
                      <p className="text-sm text-ink-muted">{item.variant}</p>
                      <p className="text-sm font-semibold text-ink">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.cartKey)}
                      className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted transition-colors duration-300 hover:text-accent"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-line bg-surface">
                      <button
                        type="button"
                        onClick={() => updateItemQuantity(item.cartKey, item.quantity - 1)}
                        className="rounded-full p-2.5 text-ink transition-colors duration-300 hover:bg-accent-soft/50"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-semibold text-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateItemQuantity(item.cartKey, item.quantity + 1)}
                        className="rounded-full p-2.5 text-ink transition-colors duration-300 hover:bg-accent-soft/50"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-ink">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="space-y-5 border-t border-line bg-canvas px-5 py-6">
              <div className="flex items-center justify-between text-sm text-ink-muted">
                <span>Estimated shipping</span>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between text-lg font-semibold text-ink">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-accent px-5 py-4 text-sm font-semibold uppercase tracking-[0.26em] text-surface transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-alt"
              >
                Checkout Soon
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="w-full rounded-full border border-line px-5 py-4 text-sm font-semibold uppercase tracking-[0.26em] text-ink transition-all duration-300 hover:bg-surface"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
