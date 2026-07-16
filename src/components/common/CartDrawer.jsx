import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartDrawer({ isOpen, items, onClose, onRemove, onUpdateQuantity }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[70] bg-velmora-espresso/55 text-velmora-espresso backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <aside className="ml-auto flex h-full w-full max-w-md animate-drawer-in flex-col bg-velmora-porcelain shadow-editorial">
        <div className="flex items-center justify-between border-b border-velmora-sand px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-velmora-champagne">Velmora Bag</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Your Cart</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-velmora-sand text-velmora-espresso transition-colors hover:border-velmora-champagne hover:text-velmora-champagne"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-velmora-champagne" />
            <h3 className="mt-5 font-serif text-3xl text-velmora-espresso">Your bag is waiting.</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-cocoa/75">Add a luminous everyday piece or a gift-boxed set to begin.</p>
            <Link
              to="/shop"
              onClick={onClose}
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-velmora-espresso px-7 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ivory transition-colors hover:bg-velmora-champagne hover:text-velmora-espresso"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.id} className="border-b border-velmora-sand pb-5">
                    <div className="flex gap-4">
                      <div className="grid h-24 w-20 shrink-0 place-items-center rounded-t-full bg-velmora-sand/55 text-center font-serif text-xl text-velmora-cocoa">
                        V
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-base uppercase tracking-[0.18em] text-velmora-espresso">{item.name}</h3>
                        <p className="mt-1 text-sm text-velmora-cocoa/72">{item.tone} · ${item.price}</p>
                        <div className="mt-4 flex items-center justify-between gap-4">
                          <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-ivory text-velmora-espresso">
                            <button
                              type="button"
                              aria-label={`Decrease ${item.name} quantity`}
                              className="grid h-9 w-9 place-items-center"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-6 text-center text-sm">{item.quantity}</span>
                            <button
                              type="button"
                              aria-label={`Increase ${item.name} quantity`}
                              className="grid h-9 w-9 place-items-center"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <button type="button" onClick={() => onRemove(item.id)} className="text-xs uppercase tracking-[0.22em] text-velmora-cocoa/70 underline-offset-4 hover:text-velmora-clay hover:underline">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-velmora-sand bg-velmora-ivory px-5 py-5 sm:px-7">
              <div className="flex items-center justify-between font-serif text-2xl text-velmora-espresso">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-velmora-cocoa/70">Shipping and taxes calculated at checkout. Free worldwide shipping included.</p>
              <button className="mt-5 h-14 w-full rounded-full bg-velmora-champagne px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-velmora-espresso transition-colors hover:bg-velmora-espresso hover:text-velmora-ivory" type="button">
                Checkout Later
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
