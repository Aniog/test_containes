import React from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ open, items, subtotal, onClose, onRemove, onUpdateQuantity }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-espresso shadow-editorial transition duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-linen px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxe text-velmora-gold">Your Bag</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Velmora Cart</h2>
          </div>
          <button type="button" className="rounded-full border border-velmora-linen p-2 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-gold" onClick={onClose} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="grid flex-1 place-items-center px-8 text-center">
            <div>
              <ShoppingBag className="mx-auto h-12 w-12 text-velmora-gold" />
              <h3 className="mt-6 font-serif text-3xl text-velmora-espresso">Your bag is waiting.</h3>
              <p className="mt-3 text-sm leading-6 text-velmora-cocoa">Add a piece made for daily shine, thoughtful gifting, and quiet celebrations.</p>
              <button type="button" className="mt-8 rounded-full bg-velmora-gold px-7 py-3 text-sm font-semibold uppercase tracking-luxe text-velmora-cream transition hover:bg-velmora-espresso" onClick={onClose}>
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-5">
                {items.map((item) => {
                  return (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4 border-b border-velmora-linen pb-5">
                      <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-velmora-mist">
                        <div className="absolute inset-0 bg-gradient-to-br from-velmora-cream via-velmora-linen to-velmora-sand" />
                        <div className="absolute inset-4 rounded-full border border-velmora-gold/60" />
                        <div className="absolute bottom-3 left-3 right-3 h-px bg-velmora-gold/50" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-serif text-base font-semibold uppercase tracking-luxe text-velmora-espresso">{item.name}</h3>
                            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-velmora-cocoa">{item.variant} tone</p>
                          </div>
                        <button type="button" className="text-velmora-cocoa transition hover:text-velmora-rose" onClick={() => onRemove(item.id, item.variant)} aria-label={`Remove ${item.name}`}>
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-velmora-linen text-velmora-espresso">
                          <button type="button" className="p-2 hover:text-velmora-gold" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} aria-label="Decrease quantity">
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                          <button type="button" className="p-2 hover:text-velmora-gold" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} aria-label="Increase quantity">
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-semibold text-velmora-espresso">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                  )
                })}
              </div>
            </div>
            <div className="border-t border-velmora-linen px-6 py-6">
              <div className="flex items-center justify-between text-base font-semibold text-velmora-espresso">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <p className="mt-2 text-sm text-velmora-cocoa">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p>
              <button type="button" className="mt-5 w-full rounded-full bg-velmora-gold px-7 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-cream transition hover:bg-velmora-espresso">
                Checkout Preview
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
