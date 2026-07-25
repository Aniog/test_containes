import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ isOpen, items, subtotal, onClose, onIncrement, onDecrement, onRemove }) {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <button
        type="button"
        aria-label="Close cart overlay"
        onClick={onClose}
        className={`absolute inset-0 bg-velmora-espresso/55 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-espresso shadow-luxe transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="flex items-center justify-between border-b border-velmora-line px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-goldDeep">Velmora</p>
            <h2 className="font-serif text-3xl">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-velmora-line p-2 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-goldDeep" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-velmora-gold" />
            <h3 className="mt-5 font-serif text-3xl text-velmora-espresso">Your jewelry box is empty</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-taupe">Add a pair of huggies, a luminous necklace, or a gift-ready set to begin.</p>
            <button type="button" onClick={onClose} className="mt-7 bg-velmora-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-velmora-goldDeep">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6 sm:px-7">
              {items.map((item) => (
                <div key={item.cartKey} className="grid grid-cols-[72px_1fr] gap-4 border-b border-velmora-line pb-5">
                  <div className="flex h-[88px] items-center justify-center bg-velmora-sand text-center font-serif text-sm uppercase tracking-[0.16em] text-velmora-goldDeep">VM</div>
                  <div className="min-w-0 text-velmora-espresso">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-base uppercase tracking-[0.16em]">{item.name}</h3>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-taupe">{item.variant} tone</p>
                      </div>
                      <button type="button" onClick={() => onRemove(item.cartKey)} className="text-velmora-taupe transition hover:text-velmora-goldDeep" aria-label={`Remove ${item.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-velmora-line text-velmora-espresso">
                        <button type="button" onClick={() => onDecrement(item.cartKey)} className="p-2 text-velmora-espresso transition hover:bg-velmora-sand" aria-label={`Decrease ${item.name} quantity`}><Minus className="h-3.5 w-3.5" /></button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" onClick={() => onIncrement(item.cartKey)} className="p-2 text-velmora-espresso transition hover:bg-velmora-sand" aria-label={`Increase ${item.name} quantity`}><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                      <p className="text-sm font-semibold">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-line bg-velmora-ivory px-5 py-6 text-velmora-espresso sm:px-7">
              <div className="flex items-center justify-between font-serif text-2xl">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <p className="mt-2 text-sm text-velmora-taupe">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p>
              <button type="button" className="mt-5 w-full bg-velmora-espresso px-6 py-4 text-xs font-semibold uppercase tracking-[0.26em] text-white transition hover:bg-velmora-goldDeep">Checkout</button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
