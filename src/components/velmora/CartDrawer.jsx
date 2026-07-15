import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ isOpen, items, total, onClose, onIncrement, onDecrement, onRemove }) {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/55 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-cocoa text-velmora-ivory shadow-2xl transition duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-champagne/25 px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-heirloom text-velmora-champagne">Velmora Cart</p>
            <h2 className="font-serif text-3xl text-velmora-ivory">{itemCount} {itemCount === 1 ? 'Piece' : 'Pieces'}</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-champagne/30 p-2 text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="mb-5 h-12 w-12 text-velmora-champagne" />
            <h3 className="font-serif text-3xl text-velmora-ivory">Your cart is quietly waiting.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-ivory/75">Add a luminous piece from the collection to begin your Velmora ritual.</p>
            <button type="button" onClick={onClose} className="mt-8 border border-velmora-champagne bg-velmora-champagne px-6 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-ivory">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4 border-b border-velmora-champagne/15 py-5">
                  <div className="grid h-24 w-20 shrink-0 place-items-center border border-velmora-champagne/20 bg-velmora-parchment text-velmora-espresso">
                    <div className="text-center">
                      <span className="block font-serif text-3xl leading-none">{item.name.charAt(0)}</span>
                      <span className="mt-2 block text-xs font-bold uppercase tracking-luxe text-velmora-gold">Velmora</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                      <div>
                        <h3 id={`cart-${item.id}-${item.tone}-title`} className="font-serif text-lg uppercase tracking-luxe text-velmora-ivory">{item.name}</h3>
                        <p id={`cart-${item.id}-${item.tone}-desc`} className="mt-1 text-xs uppercase tracking-ritual text-velmora-ivory/65">{item.tone} tone</p>
                      </div>
                      <p className="font-semibold text-velmora-champagne">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="flex items-center border border-velmora-champagne/30">
                        <button type="button" onClick={() => onDecrement(item.id, item.tone)} className="p-2 text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label={`Decrease ${item.name}`}><Minus className="h-4 w-4" /></button>
                        <span className="min-w-10 text-center text-sm text-velmora-ivory">{item.quantity}</span>
                        <button type="button" onClick={() => onIncrement(item.id, item.tone)} className="p-2 text-velmora-ivory transition hover:bg-velmora-champagne hover:text-velmora-espresso" aria-label={`Increase ${item.name}`}><Plus className="h-4 w-4" /></button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.tone)} className="text-velmora-ivory/70 transition hover:text-velmora-champagne" aria-label={`Remove ${item.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-champagne/25 p-6">
              <div className="flex items-center justify-between text-lg text-velmora-ivory">
                <span>Subtotal</span>
                <span className="font-semibold text-velmora-champagne">{formatPrice(total)}</span>
              </div>
              <p className="mt-2 text-sm text-velmora-ivory/70">Shipping and taxes are previewed at checkout.</p>
              <button type="button" className="mt-5 w-full border border-velmora-champagne bg-velmora-champagne px-5 py-4 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-ivory">
                Checkout Preview
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
