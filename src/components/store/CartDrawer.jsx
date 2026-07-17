import React from 'react'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useStore } from '@/components/store/StoreContext'
import { formatPrice } from '@/data/storefront'

const CartDrawer = () => {
  const {
    cartItems,
    cartOpen,
    closeCart,
    removeFromCart,
    subtotal,
    updateQuantity,
  } = useStore()

  React.useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen])

  return (
    <>
      <div
        className={[
          'fixed inset-0 z-[60] bg-velmora-ink/45 transition-opacity duration-300',
          cartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={[
          'fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-velmora-mist/70 bg-velmora-paper text-velmora-ink shadow-velmora transition-transform duration-300',
          cartOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-hidden={cartOpen ? 'false' : 'true'}
        aria-label="Shopping cart drawer"
      >
        <div className="flex items-center justify-between border-b border-velmora-mist/60 px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
              Your Cart
            </p>
            <h2 className="mt-2 font-display text-3xl text-velmora-ink">A thoughtful edit</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-mist text-velmora-ink transition hover:bg-velmora-shell"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center text-velmora-taupe">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-velmora-shell text-velmora-gold">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-velmora-ink">Your cart is empty</h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-taupe">
              Add a few heirloom-inspired pieces and they will appear here instantly.
            </p>
          </div>
        ) : (
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {cartItems.map((item) => (
                <article
                  key={item.key}
                  className="rounded-[1.75rem] border border-velmora-mist/70 bg-velmora-shell/50 p-4 text-velmora-ink"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-velmora-taupe">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-display text-2xl uppercase tracking-[0.18em] text-velmora-ink">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm text-velmora-taupe">{item.variant}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.key)}
                      className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-taupe transition hover:text-velmora-ink"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-velmora-mist bg-velmora-paper text-velmora-ink">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="inline-flex h-10 w-10 items-center justify-center"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="inline-flex h-10 w-10 items-center justify-center"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-mist/60 bg-velmora-paper px-5 py-5">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-velmora-taupe">
                <span>Subtotal</span>
                <span className="text-velmora-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-velmora-taupe">
                Taxes and shipping are calculated at checkout. Checkout can be connected later.
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-velmora-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-velmora-paper transition hover:bg-velmora-gold-deep"
              >
                Continue to Checkout
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
