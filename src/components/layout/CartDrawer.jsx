import { Minus, Plus, ShoppingBag, Sparkles, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeItem, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/35 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-espresso shadow-editorial transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-linen px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-bronze">Velmora Cart</p>
            <h2 className="mt-1 font-serif text-2xl text-velmora-espresso">Your Selection</h2>
          </div>
          <button type="button" className="rounded-full border border-velmora-linen p-2 text-velmora-espresso transition hover:bg-velmora-linen" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <div className="mb-5 grid h-16 w-16 place-items-center rounded-full border border-velmora-linen bg-velmora-ivory text-velmora-bronze">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl">Your cart is waiting</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-mocha">Add a piece that feels like it was already yours.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                const cartTitleId = `cart-${item.key}-title`
                const cartDescId = `cart-${item.key}-desc`
                return (
                  <div key={item.key} className="grid grid-cols-[92px_1fr] gap-4 border-b border-velmora-linen pb-6">
                    <div className="flex aspect-[4/5] items-center justify-center bg-velmora-ivory text-velmora-bronze">
                      <Sparkles className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 id={cartTitleId} className="font-serif text-sm uppercase tracking-[0.2em] text-velmora-espresso">{item.name}</h3>
                          <p id={cartDescId} className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-mocha">{item.tone} tone</p>
                        </div>
                        <p className="text-sm font-semibold text-velmora-espresso">${item.price * item.quantity}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-velmora-linen text-velmora-espresso">
                          <button type="button" className="p-2 transition hover:text-velmora-bronze" onClick={() => updateQuantity(item.key, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}>
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button type="button" className="p-2 transition hover:text-velmora-bronze" onClick={() => updateQuantity(item.key, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}>
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button type="button" className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-bronze transition hover:text-velmora-espresso" onClick={() => removeItem(item.key)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-linen px-6 py-6">
          <div className="mb-4 flex items-center justify-between text-velmora-espresso">
            <span className="text-sm uppercase tracking-[0.22em]">Subtotal</span>
            <span className="font-serif text-2xl">${subtotal}</span>
          </div>
          <button type="button" className="w-full rounded-full bg-velmora-champagne px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-bronze hover:text-velmora-cream">
            Checkout Preview
          </button>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-mocha">Shipping and taxes calculated at checkout.</p>
        </div>
      </aside>
    </div>
  )
}
