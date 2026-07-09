import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/format'

const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
  } = useCart()

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-stone-950/45 backdrop-blur-sm transition ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        aria-label="Shopping cart"
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-stone-800 bg-stone-950 text-stone-100 shadow-2xl transition-transform duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-stone-800 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
              Your Cart
            </p>
            <h2 className="mt-2 font-display text-3xl text-stone-50">Velmora Bag</h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            className="rounded-full border border-stone-700 p-3 text-stone-200 transition hover:border-amber-400 hover:text-amber-300"
            onClick={closeCart}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="rounded-full border border-stone-800 bg-stone-900 p-4 text-amber-300">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-stone-50">Your cart is empty</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-stone-400">
              Add a few pieces to start building your everyday jewelry wardrobe.
            </p>
            <Link
              to="/shop"
              className="mt-8 rounded-full bg-amber-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 transition hover:bg-amber-300"
              onClick={closeCart}
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {items.map((item) => (
                <div
                  key={item.lineId}
                  className="rounded-[1.5rem] border border-stone-800 bg-stone-900/90 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.28em] text-stone-400">
                        {item.category}
                      </p>
                      <Link
                        to={`/product/${item.slug}`}
                        className="mt-2 block font-display text-2xl uppercase tracking-[0.18em] text-stone-50"
                        onClick={closeCart}
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-stone-400">{item.variant}</p>
                    </div>
                    <button
                      type="button"
                      className="text-xs uppercase tracking-[0.24em] text-stone-500 transition hover:text-amber-300"
                      onClick={() => removeItem(item.lineId)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-stone-700">
                      <button
                        type="button"
                        aria-label={`Decrease quantity for ${item.name}`}
                        className="p-3 text-stone-300 transition hover:text-amber-300"
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm text-stone-100">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity for ${item.name}`}
                        className="p-3 text-stone-300 transition hover:text-amber-300"
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-base font-medium text-stone-50">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-800 bg-stone-950 px-6 py-6">
              <div className="flex items-center justify-between text-sm text-stone-400">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-stone-500">
                Taxes and shipping calculated at checkout. Checkout integration can be connected later.
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-amber-400 px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-stone-950 transition hover:bg-amber-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
