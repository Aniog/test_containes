import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { items, isOpen, subtotal, closeCart, updateQuantity, removeFromCart } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-brand-ink/45 transition ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-white/10 bg-brand-ink text-stone-50 shadow-velvet transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-luxe text-brand-gold">Cart</p>
            <h2 className="font-serif text-3xl">Your Selection</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-white/15 p-2 text-stone-100 transition hover:border-brand-gold hover:text-brand-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <div className="rounded-full border border-white/10 p-5 text-brand-gold">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-3xl">Your cart is empty</h3>
              <p className="text-sm leading-7 text-stone-300">
                Start with our warm gold icons and find the piece that feels effortlessly giftable.
              </p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-brand-ink transition hover:bg-brand-mist"
            >
              Shop all pieces
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6 sm:px-6">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-serif text-2xl uppercase tracking-luxe text-stone-50">
                        {item.name}
                      </p>
                      <p className="text-sm text-stone-300">{item.tone}</p>
                      <p className="text-sm font-medium text-brand-gold">${item.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.key)}
                      className="text-xs uppercase tracking-luxe text-stone-400 transition hover:text-stone-50"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="rounded-full p-2 text-stone-100 transition hover:bg-white/10"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="rounded-full p-2 text-stone-100 transition hover:bg-white/10"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <span className="text-sm text-stone-300">${item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-stone-300">
                <span>Subtotal</span>
                <span className="text-lg font-medium text-stone-50">${subtotal}</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-stone-400">
                Checkout is ready to be connected later. For now, enjoy a fully working cart experience.
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-brand-gold px-5 py-4 text-sm font-medium uppercase tracking-[0.24em] text-brand-ink transition hover:bg-brand-mist"
              >
                Proceed to checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
