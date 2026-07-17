import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products.js'

export default function CartDrawer({ open, items, onClose, onUpdateQty, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-velmora-espresso/50 backdrop-blur-sm transition duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-ink shadow-editorial transition duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-line p-5">
          <div><p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-muted">Your Bag</p><h2 className="font-serif text-3xl text-velmora-ink">Cart</h2></div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-line p-2 text-velmora-ink transition hover:bg-velmora-parchment" aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-ink">
            <ShoppingBag className="mb-5 h-12 w-12 text-velmora-gold" />
            <h3 className="font-serif text-3xl">Your cart is waiting</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-muted">Add a keepsake piece and it will appear here.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5"><div className="space-y-5">
            {items.map((item) => (
              <div key={item.key} className="border-b border-velmora-line pb-5">
                <div className="flex items-start justify-between gap-4">
                  <div><h3 className="font-serif text-lg uppercase tracking-[0.16em] text-velmora-ink">{item.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.2em] text-velmora-muted">{item.tone} tone</p><p className="mt-2 font-semibold text-velmora-ink">{formatPrice(item.price)}</p></div>
                  <button type="button" onClick={() => onRemove(item.key)} className="rounded-full p-2 text-velmora-muted transition hover:bg-velmora-parchment hover:text-velmora-ink" aria-label={`Remove ${item.name}`}><Trash2 className="h-4 w-4" /></button>
                </div>
                <div className="mt-4 inline-flex items-center border border-velmora-line bg-velmora-parchment text-velmora-ink">
                  <button type="button" onClick={() => onUpdateQty(item.key, item.quantity - 1)} className="p-3 transition hover:bg-velmora-blush" aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button>
                  <span className="min-w-10 text-center text-sm font-semibold">{item.quantity}</span>
                  <button type="button" onClick={() => onUpdateQty(item.key, item.quantity + 1)} className="p-3 transition hover:bg-velmora-blush" aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button>
                </div>
              </div>
            ))}
          </div></div>
        )}
        <div className="border-t border-velmora-line p-5">
          <div className="mb-4 flex items-center justify-between font-semibold text-velmora-ink"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <button type="button" className="w-full bg-velmora-espresso px-5 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-ink">Checkout Coming Soon</button>
          <p className="mt-3 text-center text-xs text-velmora-muted">Taxes calculated at checkout. Free worldwide shipping included.</p>
        </div>
      </aside>
    </div>
  )
}
