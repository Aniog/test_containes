import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import JewelryImage from '@/components/common/JewelryImage.jsx'

export default function CartDrawer({ open, items, onClose, onRemove, onQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={open ? 'fixed inset-0 z-50' : 'pointer-events-none fixed inset-0 z-50'} aria-hidden={!open}>
      <button className={open ? 'absolute inset-0 bg-velmora-espresso/40 backdrop-blur-sm transition-opacity' : 'absolute inset-0 bg-velmora-espresso/0 opacity-0'} onClick={onClose} aria-label="Close cart" />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-espresso shadow-drawer transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-refined text-velmora-gold">Velmora cart</p>
            <h2 className="font-display text-3xl">Your pieces</h2>
          </div>
          <button className="rounded-full border border-velmora-line p-2 text-velmora-espresso hover:bg-velmora-ivory" onClick={onClose} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <ShoppingBag className="mb-4 h-10 w-10 text-velmora-gold" />
              <p className="font-display text-3xl">Your cart is quiet for now.</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-taupe">Add a luminous everyday piece and it will appear here instantly.</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <article key={`${item.id}-${item.variant}`} className="grid grid-cols-[88px_1fr] gap-4 border-b border-velmora-line pb-5">
                  <JewelryImage alt={item.name} imgId={`cart-${item.imgId}`} query={`[${item.descId}] [${item.titleId}]`} ratio="1x1" width="300" className="h-24 w-24 rounded-xl bg-velmora-linen object-cover" />
                  <div className="min-w-0 text-velmora-espresso">
                    <h3 id={item.titleId} className="font-display text-lg uppercase tracking-product">{item.name}</h3>
                    <p id={item.descId} className="mt-1 text-xs uppercase tracking-refined text-velmora-taupe">{item.variant} tone · ${item.price}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-line bg-velmora-ivory">
                        <button className="p-2 text-velmora-espresso" onClick={() => onQuantity(item.id, item.variant, item.quantity - 1)} aria-label="Decrease quantity"><Minus className="h-3.5 w-3.5" /></button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button className="p-2 text-velmora-espresso" onClick={() => onQuantity(item.id, item.variant, item.quantity + 1)} aria-label="Increase quantity"><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                      <button className="text-xs uppercase tracking-refined text-velmora-taupe underline-offset-4 hover:text-velmora-espresso hover:underline" onClick={() => onRemove(item.id, item.variant)}>Remove</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line bg-velmora-ivory px-5 py-5 text-velmora-espresso">
          <div className="mb-4 flex items-center justify-between font-display text-2xl"><span>Subtotal</span><span>${subtotal}</span></div>
          <button className="w-full rounded-full bg-velmora-espresso px-6 py-4 text-sm font-semibold uppercase tracking-refined text-velmora-ivory transition hover:bg-velmora-cocoa">Checkout later</button>
          <p className="mt-3 text-center text-xs text-velmora-taupe">Frontend preview only. Checkout can be connected after approval.</p>
        </div>
      </aside>
    </div>
  )
}
