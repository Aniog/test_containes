import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/data/store'

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    subtotal,
    removeItem,
    updateQuantity,
  } = useCart()

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-neutral-950/35 transition ${isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-stone-200 bg-stone-50 text-neutral-950 shadow-2xl transition duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Your Cart
            </p>
            <h2 className="font-display text-3xl text-neutral-950">Velmora</h2>
          </div>
          <button
            aria-label="Close cart"
            className="rounded-full border border-stone-300 p-2 text-neutral-950 transition hover:border-stone-400"
            onClick={() => setIsCartOpen(false)}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length ? (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              {cartItems.map((item) => (
                <div
                  className="rounded-[1.75rem] border border-stone-200 bg-white p-4"
                  key={`${item.product.id}-${item.tone}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-stone-500">
                        {item.product.category}
                      </p>
                      <h3 className="mt-2 font-display text-lg uppercase tracking-product text-neutral-950">
                        {item.product.name}
                      </h3>
                      <p className="mt-2 text-sm text-stone-600">{item.tone}</p>
                      <p className="mt-3 text-sm font-medium text-neutral-950">
                        {formatPrice(item.product.price)}
                      </p>
                    </div>
                    <button
                      aria-label={`Remove ${item.product.name}`}
                      className="rounded-full border border-stone-200 p-2 text-stone-500 transition hover:border-stone-300 hover:text-neutral-950"
                      onClick={() => removeItem(item.product.id, item.tone)}
                      type="button"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 p-1">
                      <button
                        aria-label="Decrease quantity"
                        className="rounded-full p-2 text-neutral-950"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.tone,
                            item.quantity - 1,
                          )
                        }
                        type="button"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-medium text-neutral-950">
                        {item.quantity}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        className="rounded-full p-2 text-neutral-950"
                        onClick={() =>
                          updateQuantity(
                            item.product.id,
                            item.tone,
                            item.quantity + 1,
                          )
                        }
                        type="button"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-medium text-neutral-950">
                      {formatPrice(item.quantity * item.product.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-200 px-6 py-6">
              <div className="mb-5 flex items-center justify-between text-sm text-stone-600">
                <span>Subtotal</span>
                <span className="text-lg font-medium text-neutral-950">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <button
                className="w-full rounded-full bg-neutral-950 px-5 py-4 text-sm font-medium uppercase tracking-[0.28em] text-stone-50 transition hover:bg-neutral-800"
                type="button"
              >
                Checkout Soon
              </button>
              <Link
                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-stone-300 px-5 py-4 text-sm font-medium uppercase tracking-[0.28em] text-neutral-950 transition hover:border-stone-400"
                onClick={() => setIsCartOpen(false)}
                to="/shop"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="rounded-full border border-stone-200 bg-white p-4 text-amber-700 shadow-sm">
              <ShoppingBag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-neutral-950">Your cart is empty</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-stone-600">
              Add a few Velmora pieces to build your everyday stack or curate an easy gift.
            </p>
            <Link
              className="mt-8 inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-4 text-sm font-medium uppercase tracking-[0.28em] text-stone-50 transition hover:bg-neutral-800"
              onClick={() => setIsCartOpen(false)}
              to="/shop"
            >
              Shop Jewelry
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
