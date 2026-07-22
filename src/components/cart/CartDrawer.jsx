import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import VelmoraButton from '@/components/common/VelmoraButton.jsx'

export default function CartDrawer({ open, items, onClose, onRemove, onQuantityChange }) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-drawer transition duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-mist px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">Your Cart</p>
            <h2 className="font-serif text-3xl font-medium text-velmora-espresso">Velmora Edit</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-mist p-3 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-burnished" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-5 rounded-full bg-velmora-champagne p-5 text-velmora-burnished">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl text-velmora-espresso">Your jewelry box is empty</h3>
              <p className="mt-3 max-w-xs text-sm leading-7 text-velmora-cacao/75">Add luminous demi-fine pieces for everyday wear, gifting, and keepsake moments.</p>
              <VelmoraButton to="/shop" onClick={onClose} className="mt-7">Shop Jewelry</VelmoraButton>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.key} className="grid grid-cols-[84px_1fr] gap-4 border-b border-velmora-mist/70 pb-5">
                  <div className="aspect-square overflow-hidden bg-velmora-champagne">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-velmora-champagne via-velmora-ivory to-velmora-mist text-center font-serif text-3xl text-velmora-burnished">
                      {item.product.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p id={`cart-${item.product.id}-name`} className="font-serif text-base font-semibold uppercase tracking-[0.16em] text-velmora-espresso">{item.product.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-cacao/70">{item.tone} tone</p>
                      </div>
                      <button type="button" onClick={() => onRemove(item.key)} className="text-velmora-cacao/65 transition hover:text-velmora-burnished" aria-label={`Remove ${item.product.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-mist bg-velmora-ivory text-velmora-espresso">
                        <button type="button" onClick={() => onQuantityChange(item.key, item.quantity - 1)} className="p-2 text-velmora-espresso" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onQuantityChange(item.key, item.quantity + 1)} className="p-2 text-velmora-espresso" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                      </div>
                      <p className="text-sm font-bold text-velmora-espresso">${item.product.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mist bg-velmora-champagne/60 px-6 py-6">
          <p id="cart-title" className="sr-only">Velmora Fine Jewelry cart</p>
          <div className="mb-5 flex items-center justify-between text-velmora-espresso">
            <span className="text-sm uppercase tracking-[0.22em]">Subtotal</span>
            <span className="font-serif text-3xl">${subtotal}</span>
          </div>
          <VelmoraButton className="w-full" disabled={items.length === 0}>Checkout Later</VelmoraButton>
          <p className="mt-4 text-center text-xs leading-6 text-velmora-cacao/75">Frontend preview only. Checkout can be connected after approval.</p>
        </div>
      </aside>
    </div>
  )
}
