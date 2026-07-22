import { Link } from 'react-router-dom'
import { ShoppingBag, X } from 'lucide-react'

import QuantitySelector from '@/components/common/QuantitySelector'
import { useStore } from '@/context/StoreContext'

const CartDrawer = () => {
  const {
    cartItems,
    cartTotal,
    isCartOpen,
    setCartOpen,
    updateCartQuantity,
    removeFromCart,
  } = useStore()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/50 backdrop-blur-sm transition ${
          isCartOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setCartOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-mist/20 bg-velmora-parchment shadow-card transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Cart drawer"
      >
        <div className="flex items-center justify-between border-b border-velmora-mist/20 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-velmora-mist">
              Your Cart
            </p>
            <h2 className="font-display text-3xl text-velmora-ink">
              Collected Pieces
            </h2>
          </div>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-velmora-mist/20 text-velmora-ink transition hover:border-velmora-bronze hover:text-velmora-bronze"
            onClick={() => setCartOpen(false)}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length ? (
          <>
            <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
              {cartItems.map((item) => (
                <div
                  key={item.lineId}
                  className="space-y-4 rounded-3xl border border-velmora-mist/20 bg-white/70 p-4 shadow-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <Link
                        to={`/product/${item.slug}`}
                        className="font-display text-2xl uppercase tracking-[0.14em] text-velmora-ink"
                        onClick={() => setCartOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-velmora-rose">{item.tone}</p>
                      <p className="text-sm text-velmora-mist">{item.material}</p>
                    </div>
                    <button
                      type="button"
                      className="text-xs uppercase tracking-[0.2em] text-velmora-mist transition hover:text-velmora-bronze"
                      onClick={() => removeFromCart(item.lineId)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <QuantitySelector
                      value={item.quantity}
                      onChange={(quantity) => updateCartQuantity(item.lineId, quantity)}
                    />
                    <p className="text-lg font-medium text-velmora-ink">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5 border-t border-velmora-mist/20 bg-white/60 px-6 py-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.24em] text-velmora-mist">
                <span>Subtotal</span>
                <span className="text-base tracking-[0.18em] text-velmora-ink">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-velmora-ink px-6 py-4 text-sm font-medium uppercase tracking-[0.24em] text-velmora-parchment transition hover:bg-velmora-cacao"
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-sm text-velmora-rose">
                Checkout can be connected later. Your cart interactions are fully working in the storefront preview.
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-velmora-sand text-velmora-ink">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-4xl text-velmora-ink">
                Your collection is still empty
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-7 text-velmora-rose">
                Add a piece you love and it will appear here instantly.
              </p>
            </div>
            <Link
              to="/shop"
              className="rounded-full border border-velmora-bronze px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-velmora-ink transition hover:bg-velmora-bronze hover:text-velmora-parchment"
              onClick={() => setCartOpen(false)}
            >
              Shop All Pieces
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
