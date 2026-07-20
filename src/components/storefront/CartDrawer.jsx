import { X, ShoppingBag, Trash2 } from 'lucide-react'
import QuantityControl from './QuantityControl'
import { formatCurrency, getCartTotal } from '@/lib/storefront'

const CartDrawer = ({ open, items, onClose, onUpdateQuantity, onRemove }) => {
  const total = getCartTotal(items)

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-obsidian/50 transition ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col bg-parchment text-obsidian shadow-[0_20px_80px_rgba(33,24,22,0.25)] transition duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-sand px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-taupe">Shopping bag</p>
            <h2 className="mt-2 font-serif text-2xl text-obsidian">Your Velmora Edit</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand text-obsidian"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="mb-6 rounded-full bg-mist p-5 text-obsidian">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <p className="font-serif text-3xl text-obsidian">Your cart is empty</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-taupe">
              Add a few golden essentials and your curated bag will appear here.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <div className="space-y-4">
              {items.map((item) => (
                <article key={item.key} className="rounded-[1.6rem] border border-sand/70 bg-ivory p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.28em] text-taupe">{item.variant}</p>
                      <h3 className="mt-2 font-serif text-lg tracking-[0.22em] text-obsidian">{item.name}</h3>
                      <p className="mt-2 text-sm text-taupe">{formatCurrency(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.key)}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sand text-obsidian transition hover:bg-mist"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <QuantityControl
                      value={item.quantity}
                      onChange={(quantity) => onUpdateQuantity(item.key, quantity)}
                      size="compact"
                    />
                    <p className="text-sm font-medium text-obsidian">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-sand bg-ivory px-5 py-5">
          <div className="mb-4 flex items-center justify-between text-sm uppercase tracking-[0.2em] text-taupe">
            <span>Subtotal</span>
            <span className="text-obsidian">{formatCurrency(total)}</span>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-obsidian px-5 py-4 text-xs uppercase tracking-[0.28em] text-ivory transition hover:bg-espresso"
          >
            Proceed to Checkout
          </button>
        </div>
      </aside>
    </>
  )
}

export default CartDrawer
