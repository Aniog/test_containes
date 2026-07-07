import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice, getCartSubtotal } from '@/lib/cart'

export default function CartDrawer({ open, items, onClose, onRemove, onQuantityChange }) {
  const subtotal = getCartSubtotal(items)

  return (
    <div className={`fixed inset-0 z-[70] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-2xl transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-mist px-5 py-5">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-velmora-pearl p-2 text-velmora-ink"><ShoppingBag className="h-5 w-5" /></span>
            <div>
              <h2 className="font-serif text-2xl">Your Cart</h2>
              <p className="text-xs uppercase tracking-[0.2em] text-velmora-sable">{items.length} selected</p>
            </div>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-velmora-ink transition hover:bg-velmora-pearl" aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-3xl text-velmora-ink">Your jewelry box is empty.</p>
            <p className="mt-3 text-sm leading-6 text-velmora-sable">Add a pair of huggies, a delicate necklace, or a gift-ready set to begin.</p>
            <button onClick={onClose} className="mt-8 rounded-full bg-velmora-champagne px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink transition hover:bg-velmora-gold">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-5">
                {items.map((item) => (
                  <article key={item.id} className="grid grid-cols-[86px_1fr] gap-4 border-b border-velmora-mist pb-5">
                    <div className="overflow-hidden rounded-2xl bg-velmora-pearl">
                      <img
                        alt={item.product.name}
                        data-strk-img-id={`cart-${item.product.id}-${item.tone}`}
                        data-strk-img={`[${item.product.descId}] [${item.product.titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="220"
                        className="aspect-square h-full w-full object-cover"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-[0.22em] text-velmora-ink">{item.product.name}</h3>
                          <p className="mt-1 text-xs text-velmora-sable">{item.tone} tone · {formatPrice(item.product.price)}</p>
                        </div>
                        <button onClick={() => onRemove(item.id)} className="rounded-full p-1.5 text-velmora-sable transition hover:bg-velmora-pearl hover:text-velmora-ink" aria-label={`Remove ${item.product.name}`}><Trash2 className="h-4 w-4" /></button>
                      </div>
                      <div className="mt-4 inline-flex items-center rounded-full border border-velmora-mist bg-white/60 text-velmora-ink">
                        <button onClick={() => onQuantityChange(item.id, item.quantity - 1)} className="p-2 text-velmora-ink" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => onQuantityChange(item.id, item.quantity + 1)} className="p-2 text-velmora-ink" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="border-t border-velmora-mist p-5">
              <div className="flex items-center justify-between font-serif text-2xl text-velmora-ink">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-velmora-sable">Shipping, duties, and gift wrapping are calculated at checkout.</p>
              <button className="mt-5 w-full rounded-full bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-espresso">Checkout</button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
