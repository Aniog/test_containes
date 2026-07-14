import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useStrikinglyImages } from '../../lib/useStrikinglyImages'

const placeholder = '/velmora-jewelry-fallback.svg'

export default function CartDrawer({ open, items, onClose, onUpdateQuantity, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const drawerRef = useStrikinglyImages([open, items.length])

  return (
    <div ref={drawerRef} className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-velmora-espresso/55 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-2xl transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-sand px-6 py-5">
          <div><p className="text-[0.68rem] uppercase tracking-[0.28em] text-velmora-bronze">Velmora</p><h2 className="font-serif text-3xl text-velmora-espresso">Your Cart</h2></div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-sand p-2 text-velmora-espresso transition hover:border-velmora-bronze hover:text-velmora-bronze" aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center"><p className="font-serif text-3xl text-velmora-espresso">Your jewelry box is empty.</p><p className="mt-3 max-w-xs text-sm leading-6 text-velmora-ink/70">Add a luminous piece from the collection and it will appear here.</p></div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="grid grid-cols-[84px_1fr] gap-4 border-b border-velmora-sand/70 pb-5">
                  <div className="bg-velmora-sand/40"><img className="aspect-square w-full object-cover" alt={item.name} data-strk-img-id={`cart-${item.id}-${item.variant.replace(/[^a-zA-Z0-9]/g, '-')}`} data-strk-img={`[cart-title-${item.id}]`} data-strk-img-ratio="1x1" data-strk-img-width="220" src={placeholder} /></div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3"><div><h3 id={`cart-title-${item.id}`} className="font-serif text-lg uppercase tracking-[0.16em] text-velmora-espresso">{item.name}</h3><p className="mt-1 text-xs uppercase tracking-[0.2em] text-velmora-ink/60">{item.variant}</p></div><button type="button" onClick={() => onRemove(item.id, item.variant)} className="text-velmora-ink/55 transition hover:text-velmora-bronze" aria-label={`Remove ${item.name}`}><Trash2 className="h-4 w-4" /></button></div>
                    <div className="mt-4 flex items-center justify-between"><div className="inline-flex items-center border border-velmora-sand text-velmora-espresso"><button type="button" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)} className="p-2 transition hover:bg-velmora-sand/40" aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button><span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span><button type="button" onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)} className="p-2 transition hover:bg-velmora-sand/40" aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button></div><p className="text-sm font-semibold text-velmora-espresso">${item.price * item.quantity}</p></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="border-t border-velmora-sand bg-velmora-parchment px-6 py-6"><div className="flex items-center justify-between font-sans text-sm uppercase tracking-[0.22em] text-velmora-espresso"><span>Subtotal</span><span>${subtotal}</span></div><p className="mt-3 text-xs leading-5 text-velmora-ink/65">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p><button type="button" className="mt-5 w-full bg-velmora-espresso px-5 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-ivory transition hover:bg-velmora-bronze disabled:cursor-not-allowed disabled:opacity-50" disabled={items.length === 0}>Checkout</button></div>
      </aside>
    </div>
  )
}
