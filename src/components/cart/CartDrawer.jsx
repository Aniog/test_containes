import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import { Button, ButtonLink } from "@/components/ui/Buttons.jsx"

export default function CartDrawer({ open, onClose, items, updateQuantity, removeItem }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className={open ? "fixed inset-0 z-50" : "pointer-events-none fixed inset-0 z-50"} aria-hidden={!open}>
      <button
        type="button"
        className={`absolute inset-0 bg-velmora-ink/45 backdrop-blur-sm transition duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-label="Close cart overlay"
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-velmora-hairline bg-velmora-parchment text-velmora-ink shadow-soft transition duration-500 sm:w-[28rem] ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-hairline px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-clay">Velmora Cart</p>
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Your Treasures</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring rounded-full border border-velmora-hairline p-2 text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center text-velmora-ink">
            <div className="mb-6 rounded-full border border-velmora-hairline bg-velmora-cream p-6 text-velmora-gold">
              <ShoppingBag className="h-9 w-9" />
            </div>
            <h3 className="font-serif text-3xl font-semibold text-velmora-ink">Your cart is waiting</h3>
            <p className="mt-3 text-sm leading-6 text-velmora-clay">
              Add luminous everyday pieces and gifting favorites from the collection.
            </p>
            <ButtonLink to="/shop" onClick={onClose} className="mt-8">
              Begin Shopping
            </ButtonLink>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-2 sm:px-7">
              {items.map((item) => (
                <div key={item.cartKey} className="flex gap-4 border-b border-velmora-hairline py-5 text-velmora-ink">
                  <Link to={`/product/${item.id}`} onClick={onClose} className="flex h-24 w-20 flex-shrink-0 items-center justify-center overflow-hidden bg-velmora-espresso text-center text-[10px] font-bold uppercase tracking-luxe text-velmora-champagne">
                    <span className="px-2">{item.category}</span>
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link to={`/product/${item.id}`} onClick={onClose} className="block font-serif text-lg font-semibold uppercase tracking-luxe text-velmora-ink hover:text-velmora-gold">
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-velmora-clay">{item.selectedVariant} · ${item.price}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-velmora-hairline text-velmora-ink">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartKey, item.quantity - 1)}
                          className="focus-ring p-2 text-velmora-ink hover:text-velmora-gold"
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold text-velmora-ink">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.cartKey, item.quantity + 1)}
                          className="focus-ring p-2 text-velmora-ink hover:text-velmora-gold"
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.cartKey)}
                        className="focus-ring rounded-full p-2 text-velmora-clay hover:text-velmora-gold"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-velmora-hairline bg-velmora-cream px-5 py-5 text-velmora-ink sm:px-7">
              <div className="flex items-center justify-between text-sm uppercase tracking-luxe text-velmora-clay">
                <span>{itemCount} item{itemCount === 1 ? "" : "s"}</span>
                <span>Subtotal</span>
              </div>
              <div className="mt-2 flex items-center justify-between font-serif text-3xl font-semibold text-velmora-ink">
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-velmora-clay">Shipping and taxes are calculated at checkout.</p>
              <Button type="button" className="mt-5 w-full" onClick={onClose}>
                Continue to Checkout
              </Button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
