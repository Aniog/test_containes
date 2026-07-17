import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useStore } from '../../context/StoreContext'
import { formatPrice } from '../../utils/format'

export function CartDrawer() {
  const {
    cartItems,
    cartSubtotal,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useStore()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-espresso/45 backdrop-blur-sm transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-line bg-velmora-ivory text-velmora-espresso shadow-2xl transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">Your cart</p>
            <h2 className="mt-2 font-display text-3xl text-velmora-espresso">Velmora bag</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-velmora-line p-2 text-velmora-espresso transition hover:border-velmora-espresso"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length ? (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.75rem] border border-velmora-line bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-velmora-taupe">{item.product.category}</p>
                      <h3 className="mt-2 font-display text-xl uppercase tracking-[0.18em] text-velmora-espresso">
                        {item.product.name}
                      </h3>
                      <p className="mt-2 text-sm text-velmora-taupe">Tone: {item.tone}</p>
                      <p className="mt-3 text-sm text-velmora-espresso">{formatPrice(item.product.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-full border border-velmora-line p-2 text-velmora-taupe transition hover:border-velmora-espresso hover:text-velmora-espresso"
                      aria-label={`Remove ${item.product.shortName}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-champagne/60 p-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded-full p-2 text-velmora-espresso transition hover:bg-white"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm text-velmora-espresso">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-full p-2 text-velmora-espresso transition hover:bg-white"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-velmora-espresso">
                      {formatPrice(item.lineTotal)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-velmora-line px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-velmora-taupe">
                <span>Subtotal</span>
                <span className="text-velmora-espresso">{formatPrice(cartSubtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-velmora-taupe">
                Shipping and taxes are calculated at checkout. Checkout can be connected later.
              </p>
              <div className="mt-5 grid gap-3">
                <button
                  type="button"
                  className="w-full rounded-full border border-velmora-espresso bg-velmora-espresso px-5 py-3 text-sm uppercase tracking-[0.24em] text-velmora-ivory transition duration-300 hover:bg-velmora-gold hover:text-velmora-espresso"
                >
                  Secure checkout
                </button>
                <div className="flex items-center justify-between gap-3">
                  <Link
                    to="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="text-sm uppercase tracking-[0.24em] text-velmora-espresso underline underline-offset-4"
                  >
                    Continue shopping
                  </Link>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-sm uppercase tracking-[0.24em] text-velmora-taupe transition hover:text-velmora-espresso"
                  >
                    Clear cart
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <div className="rounded-full border border-velmora-line bg-white p-4 text-velmora-gold shadow-sm">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl text-velmora-espresso">Your bag is empty</h3>
              <p className="text-sm leading-7 text-velmora-taupe">
                Discover warm gold pieces designed for gifting, layering, and everyday polish.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="rounded-full border border-velmora-espresso bg-velmora-espresso px-5 py-3 text-sm uppercase tracking-[0.24em] text-velmora-ivory transition duration-300 hover:bg-velmora-gold hover:text-velmora-espresso"
            >
              Shop now
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
