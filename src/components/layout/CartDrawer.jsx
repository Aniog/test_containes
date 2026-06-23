import React from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button type="button" aria-label="Close cart overlay" onClick={onClose} className={`absolute inset-0 bg-ink/55 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-pearl text-ink shadow-[-24px_0_70px_rgba(23,20,18,0.28)] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-antique">Velmora</p>
            <h2 className="font-serif text-3xl text-ink">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-sand p-2 text-ink transition hover:border-champagne hover:text-antique" aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto bg-pearl px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center bg-pearl text-center">
              <ShoppingBag className="mb-5 h-10 w-10 text-champagne" />
              <h3 className="font-serif text-3xl text-ink">Your edit is waiting</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-stone">Add a piece of everyday gold to begin your Velmora collection.</p>
            </div>
          ) : (
            <div className="space-y-5 bg-pearl text-ink">
              {items.map((item) => (
                <div key={item.id} className="grid grid-cols-[1fr_auto] gap-4 border-b border-sand bg-pearl pb-5 text-ink">
                  <div>
                    <h3 className="font-serif text-lg uppercase tracking-[0.18em] text-ink">{item.name}</h3>
                    <p className="mt-1 text-sm text-stone">{item.material}</p>
                    <p className="mt-3 font-medium text-ink">${item.price}</p>
                    <div className="mt-4 inline-flex items-center border border-sand bg-porcelain text-ink">
                      <button type="button" onClick={() => onDecrement(item.id)} className="p-2 transition hover:bg-sand" aria-label={`Decrease ${item.name}`}><Minus className="h-4 w-4" /></button>
                      <span className="min-w-10 text-center text-sm font-medium">{item.quantity}</span>
                      <button type="button" onClick={() => onIncrement(item.id)} className="p-2 transition hover:bg-sand" aria-label={`Increase ${item.name}`}><Plus className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <button type="button" onClick={() => onRemove(item.id)} className="self-start rounded-full p-2 text-stone transition hover:bg-sand hover:text-ink" aria-label={`Remove ${item.name}`}><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-sand px-6 py-6">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.18em] text-stone"><span>{itemCount} {itemCount === 1 ? 'item' : 'items'}</span><span>Subtotal</span></div>
          <div className="mb-5 flex items-end justify-between"><p className="text-sm leading-6 text-stone">Shipping and taxes calculated at checkout.</p><p className="font-serif text-3xl text-ink">${subtotal}</p></div>
          <button type="button" className="w-full bg-champagne px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-ink transition hover:bg-antique hover:text-porcelain disabled:cursor-not-allowed disabled:opacity-60" disabled={items.length === 0}>Checkout Soon</button>
        </div>
      </aside>
    </div>
  )
}
