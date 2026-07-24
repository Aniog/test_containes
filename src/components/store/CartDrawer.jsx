import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { currency } from '@/data/storeData'
import { useCart } from '@/context/CartContext'

const CartDrawer = () => {
  const { isOpen, items, subtotal, closeCart, removeItem, updateQuantity } =
    useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/45 transition ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-velmora-line bg-velmora-panel px-5 pb-6 pt-5 text-velmora-ivory shadow-luxury transition duration-300 sm:px-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
              Cart
            </p>
            <h2 className="mt-2 font-display text-3xl">Your Selection</h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-line p-2 text-velmora-ivory transition hover:border-velmora-gold hover:text-velmora-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {items.length ? (
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 space-y-4 overflow-y-auto py-5">
              {items.map((item) => {
                const titleId = `cart-${item.key}-title`
                const descId = `cart-${item.key}-desc`

                return (
                  <div
                    key={item.key}
                    className="rounded-[1.5rem] border border-velmora-line bg-velmora-surface/70 p-3"
                  >
                    <div className="flex gap-3">
                      <div className="flex h-28 w-24 flex-col justify-end rounded-[1.1rem] border border-velmora-line bg-[linear-gradient(180deg,rgba(214,183,131,0.25),rgba(48,38,33,0.92))] p-3">
                        <span className="text-[0.6rem] uppercase tracking-[0.25em] text-velmora-gold">
                          Velmora
                        </span>
                        <span className="mt-1 text-xs leading-5 text-velmora-ivory">
                          {item.variant}
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3
                              id={titleId}
                              className="font-display text-xl uppercase tracking-[0.22em] text-velmora-ivory"
                            >
                              {item.name}
                            </h3>
                            <p id={descId} className="mt-2 text-sm text-velmora-taupe">
                              {item.variant} · {item.material}
                            </p>
                          </div>
                          <p className="text-sm uppercase tracking-[0.2em] text-velmora-gold">
                            {currency.format(item.price)}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-4">
                          <div className="flex items-center gap-2 rounded-full border border-velmora-line px-2 py-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.key, item.quantity - 1)}
                              className="rounded-full p-1 text-velmora-ivory transition hover:text-velmora-gold"
                              aria-label={`Decrease quantity of ${item.name}`}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-6 text-center text-sm text-velmora-ivory">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.key, item.quantity + 1)}
                              className="rounded-full p-1 text-velmora-ivory transition hover:text-velmora-gold"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.key)}
                            className="text-xs uppercase tracking-[0.3em] text-velmora-taupe transition hover:text-velmora-gold"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-velmora-line pt-4">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.25em] text-velmora-taupe">
                <span>Subtotal</span>
                <span className="text-velmora-ivory">{currency.format(subtotal)}</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-velmora-taupe">
                Shipping and taxes are calculated at checkout. Your pieces arrive in gift-ready Velmora packaging.
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-velmora-gold px-5 py-4 text-xs uppercase tracking-[0.32em] text-velmora-ink transition hover:bg-velmora-goldDeep"
              >
                Checkout Soon
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-3 block text-center text-xs uppercase tracking-[0.3em] text-velmora-taupe transition hover:text-velmora-gold"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="rounded-full border border-velmora-line p-4 text-velmora-gold">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-velmora-ivory">
              Your cart is still empty
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-taupe">
              Start with our best-selling gold layers and build your signature stack.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 rounded-full border border-velmora-gold px-5 py-3 text-xs uppercase tracking-[0.3em] text-velmora-gold transition hover:bg-velmora-gold hover:text-velmora-ink"
            >
              Browse the collection
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
