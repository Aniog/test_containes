import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal } = useCart()

  return (
    <div className={`fixed inset-0 z-50 transition ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <div className={`absolute inset-0 bg-velmora-espresso/55 backdrop-blur-sm transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsCartOpen(false)} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-velmora transition-transform duration-500 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-linen px-5 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-nav text-velmora-gold">Velmora bag</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Cart</h2>
          </div>
          <button type="button" className="rounded-full border border-velmora-linen p-2 transition hover:border-velmora-champagne" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <ShoppingBag className="mx-auto h-10 w-10 text-velmora-champagne" />
                <p className="mt-4 font-serif text-2xl text-velmora-ink">Your jewelry box is empty.</p>
                <p className="mt-2 text-sm text-velmora-cocoa">Add a luminous piece to begin.</p>
                <Link to="/shop" onClick={() => setIsCartOpen(false)} className="mt-6 inline-flex rounded-full bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-nav text-velmora-pearl transition hover:bg-velmora-gold">
                  Shop now
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="border-b border-velmora-linen pb-5">
                  <div className="flex gap-4">
                    <div className="grid h-20 w-16 shrink-0 place-items-center overflow-hidden rounded-t-full bg-velmora-ivory text-velmora-gold shadow-inner">
                      <span className="font-serif text-2xl font-semibold">{item.name.charAt(0)}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between gap-3">
                        <div>
                          <p className="font-serif text-lg font-semibold uppercase tracking-product text-velmora-ink">{item.name}</p>
                          <p className="mt-1 text-xs text-velmora-cocoa">{item.tone} tone</p>
                        </div>
                        <p className="text-sm font-bold text-velmora-ink">${item.price * item.quantity}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="inline-flex items-center rounded-full border border-velmora-linen bg-velmora-ivory text-velmora-ink">
                          <button type="button" className="p-2" onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)} aria-label={`Decrease ${item.name} quantity`}>
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button type="button" className="p-2" onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`}>
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button type="button" className="text-xs font-bold uppercase tracking-nav text-velmora-gold underline-offset-4 hover:underline" onClick={() => removeFromCart(item.id, item.tone)} aria-label={`Remove ${item.name}`}>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-linen bg-velmora-ivory px-5 py-5">
          <div className="flex items-center justify-between font-serif text-2xl font-semibold text-velmora-ink">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <p className="mt-2 text-xs text-velmora-cocoa">Shipping and taxes calculated at checkout. Frontend preview only.</p>
          <button type="button" className="mt-5 w-full rounded-full bg-velmora-espresso px-6 py-4 text-xs font-bold uppercase tracking-nav text-velmora-pearl transition hover:bg-velmora-gold">
            Continue to checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
