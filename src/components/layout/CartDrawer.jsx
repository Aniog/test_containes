import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div
        className={`absolute inset-0 bg-velmora-ink/45 transition duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-2xl transition duration-300 sm:w-[28rem] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-champagne/80 px-5 py-5">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">Your Cart</p>
            <h2 className="font-serif text-3xl text-velmora-ink">A considered edit</h2>
          </div>
          <button type="button" onClick={() => setIsCartOpen(false)} className="inline-flex h-10 w-10 items-center justify-center border border-velmora-champagne text-velmora-ink transition hover:border-velmora-bronze hover:text-velmora-bronze" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-ink">
            <ShoppingBag className="mb-5 h-10 w-10 text-velmora-bronze" />
            <h3 className="font-serif text-3xl">Your cart is quiet for now.</h3>
            <p className="mt-3 font-sans text-sm leading-6 text-velmora-cocoa">Discover gold-plated essentials made for gifting, layering, and everyday ritual.</p>
            <button type="button" onClick={() => setIsCartOpen(false)} className="mt-8 bg-velmora-bronze px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cream transition hover:bg-velmora-forest">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-2">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-velmora-champagne/70 py-5 text-velmora-ink">
                  <div className="flex aspect-square h-20 w-20 items-center justify-center border border-velmora-champagne bg-velmora-ivory text-center font-serif text-xl uppercase tracking-[0.12em] text-velmora-bronze" aria-label={item.name}>
                    {item.name.split(' ').slice(0, 2).map((word) => word[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 id={item.titleId} className="font-serif text-sm uppercase tracking-[0.18em] text-velmora-ink">{item.name}</h3>
                        <p id={item.descId} className="mt-1 line-clamp-1 font-sans text-xs text-velmora-cocoa">{item.description}</p>
                        <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-velmora-cocoa">{item.tone} tone</p>
                      </div>
                      <button type="button" onClick={() => removeFromCart(item.id, item.tone)} className="text-velmora-cocoa transition hover:text-velmora-bronze" aria-label={`Remove ${item.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="inline-flex items-center border border-velmora-champagne bg-velmora-ivory">
                        <button type="button" className="p-2 text-velmora-ink transition hover:text-velmora-bronze" onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)} aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center font-sans text-sm text-velmora-ink">{item.quantity}</span>
                        <button type="button" className="p-2 text-velmora-ink transition hover:text-velmora-bronze" onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)} aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="font-sans text-sm font-semibold text-velmora-ink">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-champagne/80 p-5 text-velmora-ink">
              <div className="mb-4 flex items-center justify-between font-sans text-sm">
                <span className="uppercase tracking-[0.18em] text-velmora-cocoa">Subtotal</span>
                <span className="font-semibold text-velmora-ink">${subtotal}</span>
              </div>
              <p className="mb-5 font-sans text-xs leading-5 text-velmora-cocoa">Shipping, taxes, and gift notes can be added at checkout when connected.</p>
              <button type="button" className="w-full bg-velmora-bronze px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-cream transition hover:bg-velmora-forest">
                Checkout Preview
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
