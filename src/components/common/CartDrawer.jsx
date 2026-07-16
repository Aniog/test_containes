import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import PremiumButton from './PremiumButton'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-ink/55 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
        aria-label="Close cart overlay"
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-velmora transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-linen px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-nav text-velmora-clay">Your Bag</p>
            <h2 className="font-serif text-3xl text-velmora-ink">Velmora Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-linen p-2 text-velmora-ink hover:border-velmora-gold" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-velmora-gold" />
              <p className="mt-4 font-serif text-2xl text-velmora-ink">Your bag is quietly waiting.</p>
              <p className="mt-2 text-sm leading-6 text-velmora-clay">Add a favorite piece and it will appear here.</p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.selectedTone}`} className="border-b border-velmora-linen pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg uppercase tracking-product text-velmora-ink">{item.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-nav text-velmora-clay">{item.selectedTone} tone · ${item.price}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.id, item.selectedTone)} className="text-velmora-clay hover:text-velmora-ink" aria-label={`Remove ${item.name}`}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-velmora-linen bg-velmora-pearl">
                      <button type="button" onClick={() => onUpdateQuantity(item.id, item.selectedTone, item.quantity - 1)} className="p-2 text-velmora-ink" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                      <span className="min-w-9 text-center text-sm text-velmora-ink">{item.quantity}</span>
                      <button type="button" onClick={() => onUpdateQuantity(item.id, item.selectedTone, item.quantity + 1)} className="p-2 text-velmora-ink" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                    </div>
                    <p className="font-serif text-xl text-velmora-ink">${item.price * item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-velmora-linen p-5">
          <div className="mb-4 flex items-center justify-between font-serif text-2xl text-velmora-ink">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <PremiumButton className="w-full" disabled={items.length === 0}>Checkout</PremiumButton>
          <p className="mt-3 text-center text-xs leading-5 text-velmora-clay">Frontend preview only. Checkout can be connected after design approval.</p>
        </div>
      </aside>
    </div>
  )
}
