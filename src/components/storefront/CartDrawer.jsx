import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AccentButton, OutlineButton } from './StoreButtons'

export default function CartDrawer({ open, cartItems, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 text-velmora-cocoa" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <button type="button" aria-label="Close cart" onClick={onClose} className="absolute inset-0 bg-velmora-espresso/60 backdrop-blur-sm" />
      <aside className="cart-drawer-surface absolute right-0 top-0 z-10 flex h-dvh w-full max-w-md flex-col overflow-hidden shadow-glow">
        <div className="shrink-0 flex items-center justify-between border-b border-velmora-champagne/25 p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-antique">Your edit</p>
            <h2 className="mt-1 font-serif text-3xl font-semibold text-velmora-cocoa">Cart</h2>
          </div>
          <button type="button" aria-label="Close cart" onClick={onClose} className="rounded-full p-2 transition hover:bg-velmora-champagne/15">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <ShoppingBag className="mx-auto h-10 w-10 text-velmora-champagne" />
                <p className="mt-5 font-serif text-3xl text-velmora-cocoa">Your cart is waiting.</p>
                <p className="mt-3 text-sm leading-6 text-velmora-taupe">Add a luminous piece for gifting, layering, or keeping all to yourself.</p>
                <Link to="/shop" onClick={onClose} className="mt-6 inline-flex rounded-full border border-velmora-champagne/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cocoa transition hover:bg-velmora-champagne/20">
                  Shop Jewelry
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4 border-b border-velmora-champagne/20 pb-5">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-velmora-ivory text-center font-serif text-2xl text-velmora-antique">
                    {item.name.slice(0, 1)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-lg font-semibold uppercase tracking-[0.15em] text-velmora-cocoa">{item.name}</h3>
                    <p className="mt-1 text-sm text-velmora-taupe">${item.price} · {item.tone || 'Gold tone'}</p>
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div className="flex items-center rounded-full border border-velmora-champagne/35">
                        <button type="button" aria-label="Decrease quantity" onClick={() => onDecrement(item.id, item.tone)} className="p-2 text-velmora-cocoa hover:text-velmora-antique">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => onIncrement(item.id, item.tone)} className="p-2 text-velmora-cocoa hover:text-velmora-antique">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button type="button" aria-label="Remove item" onClick={() => onRemove(item.id, item.tone)} className="p-2 text-velmora-taupe hover:text-velmora-antique">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="shrink-0 border-t border-velmora-champagne/25 bg-velmora-porcelain p-6">
            <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-velmora-cocoa">
              <span>Subtotal</span>
              <span className="font-bold">${subtotal}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-velmora-taupe">Shipping and taxes are calculated at checkout. Free worldwide shipping applies to every order.</p>
            <AccentButton className="mt-5 w-full">Continue to Checkout</AccentButton>
            <OutlineButton className="mt-3 w-full" onClick={onClose}>Keep Shopping</OutlineButton>
          </div>
        )}
      </aside>
    </div>
  )
}
