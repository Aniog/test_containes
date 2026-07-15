import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CartDrawer({ cartItems, isOpen, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 backdrop-blur-sm transition duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-velmora-cream text-velmora-ink shadow-glow transition duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-ink/10 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-brass">Velmora Bag</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Cart</h2>
          </div>
          <button
            className="rounded-full border border-velmora-ink/15 p-2 text-velmora-ink transition hover:bg-velmora-mist focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
            type="button"
            aria-label="Close cart"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 rounded-full bg-velmora-parchment p-5 text-velmora-brass">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-velmora-ink">Your bag is waiting</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-ink/70">
              Add a piece of everyday gold, or choose a gift that arrives beautifully wrapped.
            </p>
            <Button className="mt-8" type="button" onClick={onClose}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-[72px_1fr] gap-4 border-b border-velmora-ink/10 pb-5">
                  <div className="flex aspect-square items-center justify-center rounded-full bg-velmora-parchment font-serif text-2xl text-velmora-brass">
                    {item.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-serif text-lg font-semibold uppercase tracking-[0.16em] text-velmora-ink">{item.name}</p>
                        <p className="mt-1 text-sm text-velmora-ink/65">{item.variant} tone · ${item.price}</p>
                      </div>
                      <button
                        className="rounded-full p-1.5 text-velmora-ink/55 transition hover:bg-velmora-parchment hover:text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
                        type="button"
                        aria-label={`Remove ${item.name}`}
                        onClick={() => onRemove(item.id, item.variant)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-ink/15 bg-velmora-mist">
                        <button
                          className="p-2 text-velmora-ink transition hover:text-velmora-brass focus:outline-none"
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold text-velmora-ink">{item.quantity}</span>
                        <button
                          className="p-2 text-velmora-ink transition hover:text-velmora-brass focus:outline-none"
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => onUpdateQuantity(item.id, item.variant, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="font-bold text-velmora-ink">${item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-ink/10 bg-velmora-mist px-6 py-6">
              <div className="flex items-center justify-between text-sm uppercase tracking-[0.18em] text-velmora-ink/70">
                <span>Subtotal · {itemCount} items</span>
                <span className="font-bold text-velmora-ink">${subtotal}</span>
              </div>
              <Button className="mt-5 w-full focus:ring-velmora-brass" type="button">Checkout Preview</Button>
              <p className="mt-3 text-center text-xs leading-5 text-velmora-ink/60">Frontend preview only. Checkout can be connected after design approval.</p>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
