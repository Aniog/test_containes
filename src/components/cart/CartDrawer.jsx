import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from './CartContext.jsx'
import { formatPrice } from '@/data/products.js'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={() => setIsCartOpen(false)}
        className={`absolute inset-0 bg-velmora-espresso/45 transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-espresso shadow-editorial transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-gold">Your Bag</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Cart</h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="rounded-full border border-velmora-espresso/15 p-2 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <ShoppingBag className="mb-5 h-12 w-12 text-velmora-gold" />
              <p className="font-serif text-3xl">Your cart is quietly waiting.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-mocha">
                Add a pair of huggies, a keepsake necklace, or a gift-ready set to begin.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="mt-8 rounded-full bg-velmora-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-cream transition hover:bg-velmora-espresso"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.key} className="border-b border-velmora-espresso/10 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-lg uppercase tracking-[0.18em] text-velmora-espresso">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-velmora-mocha">
                        {item.variant} tone · {item.category}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-velmora-espresso">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.key)}
                      className="text-xs uppercase tracking-[0.2em] text-velmora-mocha transition hover:text-velmora-gold"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-4 inline-flex items-center rounded-full border border-velmora-espresso/15 bg-velmora-ivory text-velmora-espresso">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.key, item.quantity - 1)}
                      className="p-2 text-velmora-espresso transition hover:text-velmora-gold"
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.key, item.quantity + 1)}
                      className="p-2 text-velmora-espresso transition hover:text-velmora-gold"
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-espresso/10 bg-velmora-ivory px-6 py-6 text-velmora-espresso">
          <div className="mb-4 flex items-center justify-between font-serif text-2xl">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mb-5 text-xs leading-5 text-velmora-mocha">
            Taxes calculated at checkout. Free worldwide shipping is included for every Velmora order.
          </p>
          <button
            type="button"
            className="w-full rounded-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.26em] text-velmora-cream transition hover:bg-velmora-espresso"
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
