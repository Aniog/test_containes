import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { formatCurrency } from '@/data/storeData'
import { useCart } from '@/context/CartContext'
import { getDefaultStrkImageUrl, getStrkImageUrl } from '@/lib/strk-image'

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-sm transition ${isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-[0_18px_45px_rgba(28,25,23,0.18)] transition duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-stone-300/70 px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Cart</p>
            <h2 className="font-serif text-3xl text-stone-900">Your Selection</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-stone-300 p-2 text-stone-900 transition hover:bg-stone-100"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-5 rounded-[1.75rem] border border-dashed border-stone-300 bg-stone-100/80 p-8 text-center">
              <p className="font-serif text-3xl text-stone-900">Your cart is still empty.</p>
              <p className="max-w-xs text-sm leading-7 text-stone-600">
                Add a few Velmora favorites and they’ll appear here with gift-ready detail.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="rounded-full bg-amber-700 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-amber-800"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => {
                const cartImageSrc = getStrkImageUrl(item.image.id) || getDefaultStrkImageUrl()

                return (
                  <article
                    key={item.cartKey}
                    className="rounded-[1.5rem] border border-stone-300/70 bg-stone-100/70 p-4 text-stone-900"
                  >
                    <div className="flex gap-4">
                      <div className="h-24 w-20 overflow-hidden rounded-2xl bg-stone-200">
                        <img
                          alt={item.name}
                          className="h-full w-full object-cover"
                          src={cartImageSrc}
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-serif text-xl uppercase tracking-[0.14em] text-stone-900">
                              {item.name}
                            </p>
                            <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                              {item.variant}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.cartKey)}
                            className="text-sm text-stone-500 transition hover:text-stone-900"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center rounded-full border border-stone-300 bg-stone-50">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                              className="p-2 text-stone-900"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-10 text-center text-sm text-stone-900">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                              className="p-2 text-stone-900"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-sm font-medium text-stone-900">
                            {formatCurrency(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-stone-300/70 px-5 py-5">
          <div className="mb-4 flex items-center justify-between text-sm text-stone-600">
            <span>Subtotal</span>
            <span className="text-lg font-medium text-stone-900">{formatCurrency(subtotal)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Checkout Coming Soon
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
