import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products'

export default function CartDrawer({ isOpen, items, subtotal, onClose, onRemove, onUpdateQuantity }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-espresso/45 transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-ivory text-velmora-espresso shadow-soft transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Cart drawer"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-line px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Velmora Cart</p>
            <h2 className="font-serifDisplay text-3xl font-semibold text-velmora-espresso">Your pieces</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-velmora-line p-2 text-velmora-espresso transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-5 rounded-full border border-velmora-line bg-velmora-parchment p-5 text-velmora-gold">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h3 className="font-serifDisplay text-3xl font-semibold text-velmora-espresso">Your cart is waiting</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-taupe">
                Add a pair of huggies, a necklace, or a gift set to begin your Velmora ritual.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="border-b border-velmora-line pb-6">
                  <div className="flex gap-4">
                    <div className="flex h-24 w-20 shrink-0 items-center justify-center bg-velmora-parchment text-center font-serifDisplay text-xs uppercase tracking-luxe text-velmora-gold">
                      {item.category}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serifDisplay text-lg font-semibold uppercase tracking-luxe text-velmora-espresso">{item.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-velmora-taupe">{item.tone} tone</p>
                      <p className="mt-2 text-sm font-bold text-velmora-espresso">{formatPrice(item.price)}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center border border-velmora-line bg-velmora-pearl text-velmora-espresso">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity - 1)}
                            className="p-2 transition hover:bg-velmora-parchment"
                            aria-label={`Decrease ${item.name} quantity`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-10 text-center text-sm font-bold">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.id, item.tone, item.quantity + 1)}
                            className="p-2 transition hover:bg-velmora-parchment"
                            aria-label={`Increase ${item.name} quantity`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemove(item.id, item.tone)}
                          className="text-velmora-taupe transition hover:text-velmora-espresso"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-line bg-velmora-pearl px-6 py-6 text-velmora-espresso">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em]">
            <span>Subtotal</span>
            <span className="font-bold">{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-3 text-xs leading-5 text-velmora-taupe">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p>
          <button
            type="button"
            className="mt-5 w-full bg-velmora-gold px-5 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-espresso transition hover:bg-velmora-softGold disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Checkout Coming Soon
          </button>
        </div>
      </aside>
    </>
  )
}
