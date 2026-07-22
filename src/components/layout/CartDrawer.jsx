import { Minus, Plus, ShoppingBag, Sparkles, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/components/layout/CartContext.jsx'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, closeCart, removeFromCart, updateQuantity } = useCart()

  return (
    <div
      className={`fixed inset-0 z-[70] transition duration-300 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!isCartOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-ink/45 transition duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-ink shadow-soft transition duration-500 sm:w-[28rem] ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-mist px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-gold-dark">Velmora Bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Your Cart</h2>
          </div>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-velmora-mist bg-transparent text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold-dark"
            aria-label="Close cart"
            onClick={closeCart}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-ink">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-velmora-cream text-velmora-gold-dark">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-3xl">Your bag is quiet for now.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-espresso">
                Discover luminous demi-fine pieces designed for everyday rituals and thoughtful gifts.
              </p>
              <Link
                to="/shop"
                className="mt-7 inline-flex bg-velmora-gold px-6 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-ink transition hover:bg-velmora-gold-dark hover:text-velmora-porcelain"
                onClick={closeCart}
              >
                Shop Jewelry
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={item.key} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-velmora-mist pb-5 text-velmora-ink">
                  <div className="flex aspect-square items-center justify-center bg-velmora-cream text-velmora-gold-dark">
                    <Sparkles className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 id={item.titleId} className="font-serif text-lg uppercase leading-tight tracking-luxe text-velmora-ink">
                          {item.name}
                        </h3>
                        <p id={item.descId} className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-gold-dark">
                          {item.tone} tone
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-velmora-ink">${item.price * item.quantity}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-mist text-velmora-ink">
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center bg-transparent text-velmora-ink transition hover:bg-velmora-cream"
                          aria-label={`Decrease ${item.name} quantity`}
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-9 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center bg-transparent text-velmora-ink transition hover:bg-velmora-cream"
                          aria-label={`Increase ${item.name} quantity`}
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        className="bg-transparent p-0 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-espresso underline-offset-4 transition hover:text-velmora-gold-dark hover:underline"
                        onClick={() => removeFromCart(item.key)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mist bg-velmora-cream px-6 py-6 text-velmora-ink">
          <div className="mb-4 flex items-center justify-between font-serif text-2xl">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="mb-5 text-sm leading-6 text-velmora-espresso">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p>
          <button
            type="button"
            className="w-full bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-luxe text-velmora-porcelain transition hover:bg-velmora-gold hover:text-velmora-ink"
          >
            Continue to Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
