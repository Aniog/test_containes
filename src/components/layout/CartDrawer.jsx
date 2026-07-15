import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { formatCurrency } from '@/lib/utils.js'

function CartDrawer() {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  return (
    <div>
      <div
        className={`fixed inset-0 z-[60] bg-velmora-ink/40 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-[0_20px_80px_rgba(31,23,21,0.2)] transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line/60 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-mist">Your Bag</p>
            <h2 className="mt-2 font-display text-3xl">Cart</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-line p-2 transition hover:bg-velmora-sand/50"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length ? (
          <div className="flex flex-1 flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.tone}`}
                  className="rounded-[1.5rem] border border-velmora-line/70 bg-white/70 p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-24 w-20 items-end overflow-hidden rounded-[1rem] bg-[linear-gradient(180deg,#e8ddd2_0%,#d8cabd_100%)] p-3 text-velmora-ink shadow-inner">
                      <div>
                        <p className="font-display text-lg uppercase leading-none tracking-[0.16em] text-velmora-ink">
                          {item.shortName.split(' ').slice(0, 2).join(' ')}
                        </p>
                        <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-velmora-mist">
                          {item.category}
                        </p>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display text-lg uppercase tracking-[0.16em] text-velmora-ink">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-velmora-mist">
                            {item.tone} · {item.category}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-xs uppercase tracking-[0.22em] text-velmora-mist transition hover:text-velmora-ink"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-4">
                        <div className="flex items-center rounded-full border border-velmora-line bg-velmora-ivory px-3 py-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="text-velmora-mist transition hover:text-velmora-ink"
                            aria-label={`Decrease quantity for ${item.name}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="text-velmora-mist transition hover:text-velmora-ink"
                            aria-label={`Increase quantity for ${item.name}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-base text-velmora-ink">
                          {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-line/60 px-5 py-5">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.22em] text-velmora-mist">
                <span>Subtotal</span>
                <span className="text-velmora-ink">{formatCurrency(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-velmora-mist">
                Duties and taxes calculated at checkout later.
              </p>
              <div className="mt-5 grid gap-3">
                <button
                  type="button"
                  className="rounded-full bg-velmora-gold px-5 py-3 text-sm uppercase tracking-[0.26em] text-velmora-ivory transition hover:bg-velmora-gold-deep"
                >
                  Secure Checkout
                </button>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="rounded-full border border-velmora-line px-5 py-3 text-center text-sm uppercase tracking-[0.26em] text-velmora-ink transition hover:bg-velmora-sand/35"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-velmora-sand/40 text-velmora-gold">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-velmora-ink">Your bag is still waiting.</h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-velmora-mist">
              Add a few polished pieces to preview the cart experience and build your Velmora edit.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 rounded-full bg-velmora-ink px-6 py-3 text-sm uppercase tracking-[0.26em] text-velmora-ivory transition hover:bg-velmora-panel"
            >
              Shop Now
            </Link>
          </div>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
