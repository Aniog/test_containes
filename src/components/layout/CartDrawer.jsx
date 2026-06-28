import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/data/products.js'
import QuantitySelector from './QuantitySelector.jsx'

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useCart()

  useEffect(() => {
    if (!isCartOpen) return undefined
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = original
    }
  }, [isCartOpen])

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={() => setIsCartOpen(false)}
        className={`absolute inset-0 bg-stone-950/45 transition ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-stone-50 text-stone-900 shadow-2xl transition duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-stone-500">Shopping Bag</p>
            <h2 className="font-serif text-3xl text-stone-950">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-stone-300 p-2 text-stone-700 transition hover:bg-stone-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {cartItems.length ? (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-[0.65rem] uppercase tracking-[0.28em] text-stone-500">
                        {item.variant}
                      </p>
                      <Link
                        to={`/product/${item.id}`}
                        onClick={() => setIsCartOpen(false)}
                        className="font-serif text-xl uppercase tracking-[0.18em] text-stone-950"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm font-medium text-stone-800">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id, item.variant)}
                      className="text-xs uppercase tracking-[0.24em] text-stone-500 transition hover:text-stone-900"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <QuantitySelector
                      value={item.quantity}
                      onChange={(value) => updateQuantity(item.id, item.variant, value)}
                    />
                    <p className="text-sm font-medium text-stone-900">
                      {formatPrice(item.quantity * item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 bg-stone-100 px-6 py-6">
              <div className="mb-2 flex items-center justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span className="font-medium text-stone-950">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-5 text-sm leading-6 text-stone-500">
                Shipping and taxes are calculated at checkout. Real checkout can be connected later.
              </p>
              <button
                type="button"
                className="w-full rounded-full bg-stone-950 px-6 py-4 text-xs uppercase tracking-[0.28em] text-amber-200 transition hover:bg-stone-900"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="mt-3 w-full rounded-full border border-stone-300 px-6 py-4 text-xs uppercase tracking-[0.28em] text-stone-800 transition hover:bg-white"
              >
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="max-w-sm space-y-4 rounded-[2rem] border border-dashed border-stone-300 bg-white px-8 py-10">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-stone-500">Your bag is empty</p>
              <h3 className="font-serif text-3xl text-stone-950">Start with a signature piece</h3>
              <p className="text-sm leading-7 text-stone-600">
                Discover demi-fine favorites designed for gifting and everyday glow.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="inline-flex rounded-full bg-stone-950 px-6 py-3 text-xs uppercase tracking-[0.28em] text-amber-200 transition hover:bg-stone-900"
              >
                Shop Velmora
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
