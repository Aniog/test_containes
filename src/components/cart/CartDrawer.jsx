import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    subtotal,
    closeCart,
    removeItem,
    updateQuantity,
  } = useCart()

  return (
    <div
      className={`fixed inset-0 z-[60] transition ${
        isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
      aria-hidden={!isCartOpen}
    >
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeCart}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-velmora-lg transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
              Your cart
            </p>
            <h2 className="mt-2 font-serif text-3xl text-velmora-espresso">
              Ready to treasure
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full border border-velmora-line bg-velmora-mist p-3 text-velmora-espresso transition hover:bg-velmora-sand"
            aria-label="Close cart"
          >
            <X size={16} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="rounded-full border border-velmora-line bg-velmora-mist p-5 text-velmora-bronze">
              <ShoppingBag size={26} />
            </div>
            <h3 className="mt-6 font-serif text-3xl text-velmora-espresso">
              Your cart is empty
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-7 text-velmora-ink/70">
              Explore Velmora’s bestsellers and add a piece that feels gift-worthy
              from the very first glance.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-8 inline-flex rounded-full bg-velmora-bronze px-6 py-3 text-sm font-medium text-velmora-ivory transition hover:bg-velmora-bronze-dark"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-6">
              {cartItems.map((item) => (
                <article
                  key={item.cartKey}
                  className="rounded-[1.75rem] border border-velmora-line bg-velmora-pearl p-4 text-velmora-ink shadow-velmora-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-xl uppercase tracking-[0.18em] text-velmora-espresso">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.28em] text-velmora-ink/55">
                        {item.tone} · {item.type}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.cartKey)}
                      className="text-xs uppercase tracking-[0.28em] text-velmora-ink/50 transition hover:text-velmora-espresso"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-ivory px-2 py-2 text-velmora-espresso shadow-velmora-sm">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                        className="rounded-full p-2 transition hover:bg-velmora-sand"
                        aria-label={`Decrease quantity for ${item.name}`}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="min-w-10 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                        className="rounded-full p-2 transition hover:bg-velmora-sand"
                        aria-label={`Increase quantity for ${item.name}`}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="text-base font-medium text-velmora-espresso">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-velmora-line bg-velmora-pearl px-5 py-5 sm:px-6">
              <div className="flex items-center justify-between text-sm text-velmora-ink/70">
                <span>Subtotal</span>
                <span className="font-medium text-velmora-espresso">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <p className="mt-2 text-xs leading-6 text-velmora-ink/60">
                Checkout can be connected later. For now, your cart updates in real
                time and is ready for integration.
              </p>
              <button
                type="button"
                className="mt-5 w-full rounded-full bg-velmora-bronze px-6 py-3 text-sm font-medium text-velmora-ivory transition hover:bg-velmora-bronze-dark"
              >
                Continue to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
