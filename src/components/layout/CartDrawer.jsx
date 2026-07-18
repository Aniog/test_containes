import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/utils'

function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-stone-950/50 transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed right-0 top-0 z-[61] flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-[-20px_0_70px_rgba(28,25,23,0.18)] transition duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Your Cart</p>
            <h2 className="mt-2 font-display text-3xl text-stone-900">
              Selected Pieces
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-stone-300 p-2 text-stone-700 transition hover:bg-stone-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center text-stone-600">
            <div className="rounded-full bg-stone-100 p-5 text-stone-700">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-3xl text-stone-900">
                Your cart is empty
              </h3>
              <p className="text-sm leading-7">
                Add a few Velmora favorites to build your edit.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="rounded-full bg-stone-950 px-6 py-3 text-xs uppercase tracking-[0.28em] text-stone-100"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <article
                  key={`${item.id}-${item.tone}`}
                  className="rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex gap-4">
                    <div className="flex h-24 w-20 items-end rounded-[1.25rem] bg-gradient-to-b from-stone-200 via-stone-100 to-stone-50 p-3">
                      <div className="w-full rounded-full border border-amber-300/60 bg-amber-100/80 px-2 py-1 text-center text-[10px] uppercase tracking-[0.22em] text-stone-700">
                        {item.tone}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-xl uppercase tracking-[0.18em] text-stone-900">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-500">
                            {item.tone} tone
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.tone)}
                          className="text-xs uppercase tracking-[0.24em] text-stone-500 transition hover:text-stone-900"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="px-3 py-2 text-stone-700"
                            aria-label="Decrease item quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-10 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="px-3 py-2 text-stone-700"
                            aria-label="Increase item quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-sm font-medium text-stone-900">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-stone-200 px-6 py-6">
              <div className="flex items-center justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span className="text-lg font-medium text-stone-900">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.24em] text-stone-500">
                Shipping and taxes calculated at checkout
              </p>
              <button
                type="button"
                className="mt-6 w-full rounded-full bg-amber-200 px-6 py-4 text-xs uppercase tracking-[0.28em] text-stone-950 transition hover:bg-amber-100"
              >
                Checkout Coming Soon
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
