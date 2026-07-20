import React from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

export default function CartDrawer() {
  const { items, subtotal, isCartOpen, setCartOpen, removeItem, updateQuantity } = useCart()

  return (
    <div className={`fixed inset-0 z-50 ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isCartOpen}>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={() => setCartOpen(false)}
        className={`absolute inset-0 bg-velmora-espresso/55 transition duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-2xl transition duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-mist px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-velmora-antique">Your selection</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Cart</h2>
          </div>
          <button type="button" onClick={() => setCartOpen(false)} className="rounded-full border border-velmora-mist p-2 text-velmora-espresso transition hover:border-velmora-champagne hover:text-velmora-antique" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-3xl text-velmora-espresso">Your cart is waiting.</p>
            <p className="mt-3 text-sm leading-6 text-velmora-cocoa/80">Add a gold-plated favorite and it will appear here.</p>
            <Link to="/shop" onClick={() => setCartOpen(false)} className="mt-8 bg-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ivory transition hover:bg-velmora-cocoa">
              Browse jewelry
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.key} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-mist/80 pb-6">
                    <div className="grid aspect-square place-items-center bg-velmora-parchment text-center text-velmora-espresso">
                      <div>
                        <p className="font-serif text-2xl uppercase tracking-[0.18em]">V</p>
                        <p className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-velmora-antique">{item.product.category}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between gap-3">
                        <div>
                          <h3 id={`cart-title-${item.product.id}`} className="font-serif text-sm uppercase tracking-[0.2em] text-velmora-espresso">{item.product.name}</h3>
                          <p className="mt-1 text-xs text-velmora-cocoa/75">{item.variant}</p>
                        </div>
                        <p className="text-sm font-semibold text-velmora-espresso">${item.product.price}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-velmora-mist bg-white/45">
                          <button type="button" onClick={() => updateQuantity(item.key, item.quantity - 1)} className="p-2 text-velmora-espresso hover:text-velmora-antique" aria-label="Decrease quantity">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-velmora-espresso">{item.quantity}</span>
                          <button type="button" onClick={() => updateQuantity(item.key, item.quantity + 1)} className="p-2 text-velmora-espresso hover:text-velmora-antique" aria-label="Increase quantity">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button type="button" onClick={() => removeItem(item.key)} className="text-xs uppercase tracking-[0.16em] text-velmora-cocoa/70 underline-offset-4 hover:text-velmora-rose hover:underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-mist bg-velmora-parchment px-6 py-6 text-velmora-espresso">
              <div className="flex items-center justify-between font-serif text-2xl">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <p className="mt-2 text-sm text-velmora-cocoa/80">Shipping and taxes calculated at checkout.</p>
              <button type="button" className="mt-5 w-full bg-velmora-champagne px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-antique hover:text-velmora-ivory">
                Continue to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
