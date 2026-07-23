import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { ButtonLink } from '../ui/Buttons.jsx'

export default function CartDrawer({ isOpen, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <div className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`} onClick={onClose} aria-hidden="true" />
      <aside className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-ink shadow-editorial transition duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-sand px-5 py-5">
          <div><p className="text-xs uppercase tracking-[0.24em] text-velmora-gold-deep">Velmora</p><h2 className="font-serif text-3xl font-semibold">Your Cart</h2></div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-sand p-2 text-velmora-ink hover:bg-velmora-sand/50" aria-label="Close cart"><X className="h-5 w-5" /></button>
        </div>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 rounded-full bg-velmora-sand/60 p-5 text-velmora-gold-deep"><ShoppingBag className="h-8 w-8" /></div>
            <h3 className="font-serif text-3xl font-semibold text-velmora-ink">Your jewelry box is empty</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-charcoal/75">Add a piece from the collection and it will appear here.</p>
            <ButtonLink to="/shop" onClick={onClose} className="mt-8">Shop Collection</ButtonLink>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-2">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4 border-b border-velmora-sand/80 py-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-velmora-sand/50 font-serif text-2xl text-velmora-gold-deep">V</div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-base font-semibold uppercase tracking-[0.18em] text-velmora-ink">{item.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-velmora-charcoal/70">{item.tone} Tone</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-sand bg-velmora-cream">
                        <button type="button" onClick={() => onDecrement(item.id, item.tone)} className="p-2 text-velmora-ink hover:text-velmora-gold-deep" aria-label={`Decrease ${item.name}`}><Minus className="h-3.5 w-3.5" /></button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onIncrement(item.id, item.tone)} className="p-2 text-velmora-ink hover:text-velmora-gold-deep" aria-label={`Increase ${item.name}`}><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                      <button type="button" onClick={() => onRemove(item.id, item.tone)} className="text-velmora-charcoal/70 hover:text-velmora-rose" aria-label={`Remove ${item.name}`}><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-velmora-ink">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-sand bg-velmora-cream px-5 py-5">
              <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.18em] text-velmora-charcoal"><span>Subtotal · {itemCount} item{itemCount === 1 ? '' : 's'}</span><span className="font-semibold text-velmora-ink">${subtotal}</span></div>
              <button type="button" className="w-full rounded-full bg-velmora-ink px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-pearl transition hover:bg-velmora-gold-deep">Checkout Preview</button>
              <p className="mt-3 text-center text-xs leading-5 text-velmora-charcoal/70">Checkout connection can be added after design approval.</p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
