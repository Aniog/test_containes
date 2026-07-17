import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { getCartTotal } from '@/lib/cart'

export default function CartDrawer({ isOpen, items, onClose, onUpdateQuantity, onRemove }) {
  const total = getCartTotal(items)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-ink/45 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-editorial transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-oat px-6 py-5">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.24em] text-velmora-taupe">Your bag</p>
            <h2 className="font-serifDisplay text-3xl text-velmora-cocoa">Velmora Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-oat p-2 text-velmora-cocoa transition hover:border-velmora-gold hover:text-velmora-gold">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-cocoa">
            <ShoppingBag className="mb-5 h-12 w-12 text-velmora-gold" />
            <h3 className="font-serifDisplay text-3xl">Your bag is waiting</h3>
            <p className="mt-3 max-w-xs font-sans text-sm leading-6 text-velmora-taupe">
              Add a demi-fine piece and we will keep it here while you browse.
            </p>
            <button type="button" onClick={onClose} className="mt-7 rounded-full bg-velmora-gold px-7 py-3 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-champagne">
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4 border-b border-velmora-oat py-5">
                  <div className="h-24 w-20 rounded-xl bg-velmora-oat/60" />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serifDisplay text-sm uppercase tracking-[0.22em] text-velmora-cocoa">{item.name}</h3>
                    <p className="mt-1 font-sans text-xs text-velmora-taupe">{item.tone} tone</p>
                    <p className="mt-2 font-sans text-sm font-semibold text-velmora-cocoa">${item.price}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-oat bg-velmora-ivory text-velmora-cocoa">
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity - 1)} className="p-2 transition hover:text-velmora-gold" aria-label="Decrease quantity">
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center font-sans text-sm">{item.quantity}</span>
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity + 1)} className="p-2 transition hover:text-velmora-gold" aria-label="Increase quantity">
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.tone)} className="text-velmora-taupe transition hover:text-velmora-gold" aria-label="Remove item">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-oat bg-velmora-ivory px-6 py-6 text-velmora-cocoa">
              <div className="flex items-center justify-between font-sans text-sm uppercase tracking-[0.2em]">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <p className="mt-3 font-sans text-xs leading-5 text-velmora-taupe">Shipping and taxes are calculated at checkout. Free worldwide shipping included.</p>
              <button type="button" className="mt-5 w-full rounded-full bg-velmora-cocoa px-7 py-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ivory transition hover:bg-velmora-espresso">
                Checkout soon
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
