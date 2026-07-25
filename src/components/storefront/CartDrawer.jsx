import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { formatPrice } from '@/data/products.js'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onQuantityChange }) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-velmora-espresso/45 backdrop-blur-sm transition duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-pearl text-velmora-espresso shadow-editorial transition duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-velmora-champagne px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Velmora Bag</p>
            <h2 className="mt-1 font-serifDisplay text-3xl font-semibold">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close cart" className="text-velmora-espresso hover:text-velmora-gold">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-12 w-12 text-velmora-gold" />
              <h3 className="mt-5 font-serifDisplay text-3xl font-semibold text-velmora-espresso">Your bag is waiting</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-ink/70">
                Add a luminous everyday piece or a gift-ready set to begin your Velmora ritual.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              {items.map((item) => (
                <div key={item.product.id} className="grid grid-cols-[84px_1fr] gap-4 border-b border-velmora-champagne/80 pb-5">
                  <div className="flex aspect-square items-center justify-center bg-velmora-champagne text-center font-serifDisplay text-2xl text-velmora-bronze">
                    V
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serifDisplay text-lg font-semibold uppercase tracking-[0.16em] text-velmora-espresso">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 text-sm text-velmora-ink/70">{formatPrice(item.product.price)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemove(item.product.id)}
                        aria-label={`Remove ${item.product.name}`}
                        className="text-velmora-ink/60 transition hover:text-velmora-bronze"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 inline-flex items-center border border-velmora-champagne bg-velmora-ivory text-velmora-espresso">
                      <button
                        type="button"
                        onClick={() => onQuantityChange(item.product.id, item.quantity - 1)}
                        className="p-2 transition hover:bg-velmora-champagne"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onQuantityChange(item.product.id, item.quantity + 1)}
                        className="p-2 transition hover:bg-velmora-champagne"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-velmora-champagne bg-velmora-ivory px-6 py-6">
          <div className="flex items-center justify-between font-serifDisplay text-2xl font-semibold text-velmora-espresso">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-xs leading-5 text-velmora-ink/70">Shipping and taxes calculated at checkout. Free worldwide shipping is included.</p>
          <button
            type="button"
            className="mt-5 w-full bg-velmora-gold px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-pearl transition duration-300 hover:bg-velmora-bronze disabled:cursor-not-allowed disabled:opacity-60"
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  )
}
