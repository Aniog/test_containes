import { Minus, Plus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/catalog'
import { useCart } from '@/components/cart/CartContext'

const CartDrawer = () => {
  const {
    items,
    subtotal,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart()

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        className={`fixed inset-0 z-40 bg-stone-950/40 backdrop-blur-sm transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />
      <aside
        aria-hidden={!isCartOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-stone-200 bg-stone-50 text-stone-900 shadow-2xl transition duration-300 ${
          isCartOpen
            ? 'visible translate-x-0'
            : 'pointer-events-none invisible translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Velmora Cart</p>
            <h2 className="mt-2 font-serif text-3xl text-stone-900">Your selection</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-stone-300 p-3 text-stone-700 transition duration-300 hover:border-stone-900 hover:text-stone-900"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-stone-300 bg-white px-6 py-10 text-center text-stone-700">
              <p className="font-serif text-3xl text-stone-900">Your cart is empty</p>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                Add a piece from the collection to begin your Velmora edit.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex rounded-full bg-amber-700 px-5 py-3 text-xs font-medium uppercase tracking-[0.24em] text-stone-50 transition duration-300 hover:bg-amber-800"
              >
                Shop now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.lineId}
                  className="rounded-[26px] border border-stone-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-stone-500">
                        {item.category}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl uppercase tracking-[0.12em] text-stone-900">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-sm text-stone-600">{item.tone}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.lineId)}
                      className="text-sm text-stone-500 transition duration-300 hover:text-stone-900"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 p-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                        className="rounded-full p-2 text-stone-700 transition duration-300 hover:bg-white"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-medium text-stone-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                        className="rounded-full p-2 text-stone-700 transition duration-300 hover:bg-white"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-base font-medium text-stone-900">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-stone-200 bg-white px-6 py-6">
          <div className="flex items-center justify-between text-sm text-stone-600">
            <span>Subtotal</span>
            <span className="text-xl font-medium text-stone-900">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-stone-900 px-5 py-4 text-xs font-medium uppercase tracking-[0.28em] text-stone-50 transition duration-300 hover:bg-stone-800"
          >
            Checkout Coming Soon
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
