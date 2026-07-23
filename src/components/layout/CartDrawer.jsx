import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ isOpen, items, onClose, onUpdateQuantity, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-linen text-velmora-espresso shadow-editorial transition duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-mist p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-velmora-taupe">Velmora</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-espresso">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="velmora-focus rounded-full border border-velmora-mist p-2 transition hover:border-velmora-gold hover:text-velmora-goldDeep" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <ShoppingBag className="h-10 w-10 text-velmora-gold" />
              <h3 className="mt-5 font-serif text-3xl font-semibold">Your ritual begins here.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-charcoal">Add a luminous piece to your cart and keep browsing Velmora’s demi-fine essentials.</p>
              <Link to="/shop" onClick={onClose} className="velmora-focus mt-6 rounded-full bg-velmora-espresso px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-espresso">Shop Jewelry</Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="grid grid-cols-[1fr] gap-4 border-b border-velmora-mist pb-5">
                  <div className="min-w-0 text-velmora-espresso">
                    <h3 className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-velmora-espresso">{item.name}</h3>
                    <p className="mt-1 text-sm text-velmora-charcoal">{item.variant} tone · {formatPrice(item.price)}</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <div className="flex items-center rounded-full border border-velmora-mist bg-velmora-ivory">
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} className="velmora-focus rounded-full p-2 text-velmora-espresso transition hover:text-velmora-goldDeep" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} className="velmora-focus rounded-full p-2 text-velmora-espresso transition hover:text-velmora-goldDeep" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.variant)} className="text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe transition hover:text-velmora-goldDeep">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-mist p-5 text-velmora-espresso">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em]">
            <span>Subtotal</span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-sm text-velmora-charcoal">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p>
          <button type="button" className="velmora-focus mt-5 w-full rounded-full bg-velmora-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-goldDeep hover:text-velmora-ivory">Checkout Preview</button>
        </div>
      </aside>
    </div>
  )
}
