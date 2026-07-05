import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'

export default function CartDrawer({ open, items, onClose, onRemove, onQuantityChange }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-velmora-obsidian/55 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-pearl/100 text-velmora-obsidian shadow-[-24px_0_80px_rgba(32,25,19,0.22)] transition-transform duration-300 sm:w-[28rem] ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-champagne/25 p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-velmora-taupe">Velmora Bag</p>
            <h2 className="mt-1 font-serif text-3xl text-velmora-obsidian">Your Cart</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close cart" className="rounded-full border border-velmora-champagne/30 p-3 text-velmora-obsidian transition hover:bg-velmora-champagne/20">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <ShoppingBag className="mx-auto h-10 w-10 text-velmora-champagneDark" />
                <h3 className="mt-5 font-serif text-3xl text-velmora-obsidian">Your bag is waiting</h3>
                <p className="mt-3 text-sm leading-6 text-velmora-ink/75">Add a piece of warm gold shine to begin your Velmora ritual.</p>
              </div>
            </div>
          ) : (
            <ul className="grid gap-5">
              {items.map((item) => (
                <li key={`${item.id}-${item.tone}`} className="rounded-3xl border border-velmora-champagne/25 bg-velmora-ivory/100 p-4 text-velmora-obsidian shadow-[0_12px_36px_rgba(32,25,19,0.08)]">
                  <div className="flex gap-4">
                    <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-velmora-champagne/35 via-velmora-pearl to-velmora-obsidian/10 text-[10px] font-bold uppercase tracking-[0.2em] text-velmora-obsidian ring-1 ring-velmora-champagne/25">VM</div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-lg font-semibold uppercase tracking-[0.15em] text-velmora-obsidian">{item.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-velmora-taupe">{item.tone} tone</p>
                      <p className="mt-2 font-serif text-xl text-velmora-obsidian">${item.price}</p>
                    </div>
                    <button type="button" onClick={() => onRemove(item.id, item.tone)} aria-label={`Remove ${item.name}`} className="self-start rounded-full p-2 text-velmora-taupe transition hover:bg-velmora-champagne/20 hover:text-velmora-obsidian">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-champagne/30 bg-velmora-pearl text-velmora-obsidian">
                      <button type="button" className="p-3" onClick={() => onQuantityChange(item.id, item.tone, item.quantity - 1)} aria-label="Decrease quantity">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button type="button" className="p-3" onClick={() => onQuantityChange(item.id, item.tone, item.quantity + 1)} aria-label="Increase quantity">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-serif text-xl text-velmora-obsidian">${item.price * item.quantity}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-velmora-champagne/25 p-6">
          <div className="mb-5 flex items-center justify-between font-serif text-2xl text-velmora-obsidian">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <button type="button" className="w-full rounded-full bg-velmora-obsidian px-6 py-4 text-sm font-bold uppercase tracking-[0.24em] text-velmora-ivory transition hover:bg-velmora-champagneDark hover:text-velmora-obsidian">
            Checkout Later
          </button>
          <p className="mt-4 text-center text-xs leading-5 text-velmora-taupe">Checkout is ready to connect when you add a payment provider.</p>
        </div>
      </aside>
    </div>
  )
}
