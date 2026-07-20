import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatPrice } from '@/lib/format'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onQuantityChange }) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-velmora-onyx/50 transition duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-espresso shadow-velvet transition duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Cart drawer">
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-gold">Your Selection</p>
            <h2 className="font-serif text-3xl">Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-espresso/15 p-2 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div className="space-y-4">
                <ShoppingBag className="mx-auto h-10 w-10 text-velmora-gold" />
                <p className="font-serif text-2xl text-velmora-espresso">Your cart is quietly waiting.</p>
                <p className="text-sm text-velmora-walnut">Add a piece from the collection to begin.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.key} className="border-b border-velmora-espresso/10 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl uppercase tracking-[0.16em] text-velmora-espresso">{item.product.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-truffle">{item.variant} tone</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.key)} className="text-xs font-semibold uppercase tracking-[0.2em] text-velmora-walnut transition hover:text-velmora-gold">Remove</button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-espresso/15 bg-velmora-ivory">
                      <button type="button" className="p-2 text-velmora-espresso" onClick={() => onQuantityChange(item.key, item.quantity - 1)} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                      <span className="w-9 text-center text-sm font-semibold text-velmora-espresso">{item.quantity}</span>
                      <button type="button" className="p-2 text-velmora-espresso" onClick={() => onQuantityChange(item.key, item.quantity + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                    </div>
                    <span className="font-serif text-2xl text-velmora-espresso">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-velmora-espresso/10 p-6">
          <div className="mb-5 flex items-center justify-between font-serif text-2xl text-velmora-espresso"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <button type="button" className="w-full rounded-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-onyx transition hover:bg-velmora-champagne">Checkout Coming Soon</button>
          <p className="mt-3 text-center text-xs text-velmora-walnut">Free worldwide shipping included.</p>
        </div>
      </aside>
    </div>
  )
}
