import { Minus, Plus, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useStore } from '../../context/StoreContext.jsx'
import { formatPrice } from '../../data/store.js'

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
  } = useStore()

  return (
    <>
      <div
        aria-hidden={!isCartOpen}
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-obsidian/50 backdrop-blur-sm transition duration-300 ${
          isCartOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-screen w-full max-w-md flex-col bg-pearl shadow-soft transition duration-500 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-sand/60 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-taupe">Your Cart</p>
            <h2 className="mt-2 font-display text-3xl text-obsidian">Velmora Bag</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-sand p-2 text-obsidian"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {cartItems.length === 0 ? (
            <div className="rounded-[1.75rem] border border-dashed border-sand bg-porcelain p-8 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">No pieces yet</p>
              <h3 className="mt-3 font-display text-3xl text-obsidian">
                Your cart is waiting.
              </h3>
              <p className="mt-3 text-sm leading-7 text-truffle">
                Add a favorite pair, gifting set, or keepsake necklace to begin.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex rounded-full bg-obsidian px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-pearl"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <article
                key={item.id}
                className="rounded-[1.5rem] border border-sand/60 bg-porcelain p-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl uppercase tracking-product text-obsidian">
                      {item.name}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-taupe">
                      {item.tone}
                    </p>
                    <p className="mt-4 text-sm font-medium text-obsidian">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-full border border-sand p-2 text-truffle transition duration-300 hover:text-obsidian"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-sand bg-pearl px-2 py-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="rounded-full p-1 text-obsidian"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-8 text-center text-sm font-medium text-obsidian">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="rounded-full p-1 text-obsidian"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-truffle">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="border-t border-sand/60 px-6 py-5">
          <div className="flex items-center justify-between text-sm text-truffle">
            <span>Subtotal</span>
            <span className="font-medium text-obsidian">{formatPrice(subtotal)}</span>
          </div>
          <button
            type="button"
            className="mt-4 w-full rounded-full bg-champagne px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian transition duration-300 hover:bg-obsidian hover:text-pearl"
          >
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs leading-6 text-taupe">
            Secure checkout can be connected later. Your storefront cart interactions are fully wired for preview.
          </p>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
