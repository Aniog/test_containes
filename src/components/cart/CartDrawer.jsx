import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ open, items, onClose, onRemove, onQuantityChange }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-velmora-ink/55 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-editorial transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b hairline px-5 py-5">
          <div>
            <p className="eyebrow">Velmora Bag</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border hairline p-2 text-velmora-ink transition hover:bg-velmora-sand" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center rounded-[2rem] border hairline bg-velmora-sand/60 p-8 text-center text-velmora-ink">
              <ShoppingBag className="h-10 w-10 text-velmora-gold" />
              <h3 className="mt-4 font-serif text-3xl font-semibold">Your bag is quiet for now.</h3>
              <p className="mt-3 text-sm leading-6 text-velmora-taupe">Add a pair of huggies, a delicate necklace, or a gift-ready set.</p>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.variant}`} className="border-b hairline pb-5">
                  <div className="flex gap-4">
                    <div className="h-20 w-16 rounded-t-full bg-velmora-sand" />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-lg font-semibold uppercase tracking-luxury text-velmora-ink">{item.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-luxury text-velmora-taupe">{item.variant} Tone</p>
                      <p className="mt-2 text-sm font-semibold text-velmora-ink">{formatPrice(item.price)}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.id, item.variant)} className="self-start rounded-full p-2 text-velmora-taupe transition hover:bg-velmora-sand hover:text-velmora-ink" aria-label={`Remove ${item.name}`}>
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border hairline bg-velmora-ivory">
                      <button type="button" className="p-2 text-velmora-ink" onClick={() => onQuantityChange(item.id, item.variant, item.quantity - 1)} aria-label="Decrease quantity">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-9 text-center text-sm font-semibold text-velmora-ink">{item.quantity}</span>
                      <button type="button" className="p-2 text-velmora-ink" onClick={() => onQuantityChange(item.id, item.variant, item.quantity + 1)} aria-label="Increase quantity">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-sm font-semibold text-velmora-ink">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t hairline bg-velmora-blush px-5 py-5 text-velmora-ink">
          <div className="flex items-center justify-between text-sm uppercase tracking-luxury text-velmora-taupe">
            <span>Subtotal</span>
            <span className="font-bold text-velmora-ink">{formatPrice(subtotal)}</span>
          </div>
          <button type="button" className="premium-button mt-4 w-full" disabled={items.length === 0}>
            Checkout Coming Soon
          </button>
          <p className="mt-3 text-center text-xs text-velmora-taupe">Shipping and taxes calculated at checkout.</p>
        </div>
      </aside>
    </div>
  )
}
