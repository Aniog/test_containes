import React from "react"
import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import Button from "@/components/ui/Button"
import { formatPrice } from "@/data/products"

export default function CartDrawer({ open, items, onClose, onIncrement, onDecrement, onRemove }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto">
      <div
        className={`absolute inset-0 bg-velmora-espresso/45 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-velmora-porcelain text-velmora-espresso shadow-soft transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-velmora-espresso/10 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-clay">Cart</p>
            <h2 className="font-serif text-3xl text-velmora-espresso">Your Treasures</h2>
          </div>
          <button
            type="button"
            className="rounded-full border border-velmora-espresso/15 p-2 text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-velmora-espresso">
              <ShoppingBag className="mb-5 h-10 w-10 text-velmora-champagne" />
              <h3 className="font-serif text-3xl">Your cart is quiet.</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-velmora-taupe">
                Add a favorite piece and keep it close while you browse.
              </p>
              <Button as={Link} to="/shop" variant="accent" className="mt-7" onClick={onClose}>
                Shop Velmora
              </Button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="rounded-3xl border border-velmora-espresso/10 bg-velmora-ivory p-4 text-velmora-espresso">
                  <div className="flex gap-4">
                    <div className="flex h-24 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-velmora-champagne/45 via-velmora-pearl to-velmora-ivory text-velmora-espresso">
                      <span className="font-serif text-3xl font-semibold">V</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p id={`cart-${item.id}-category`} className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-velmora-clay">
                        {item.category}
                      </p>
                      <h3 id={`cart-${item.id}-name`} className="mt-1 font-serif text-lg font-semibold uppercase tracking-[0.16em] text-velmora-espresso">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-velmora-taupe">{formatPrice(item.price)}</p>
                    </div>
                    <button
                      type="button"
                      className="self-start rounded-full p-2 text-velmora-taupe transition hover:bg-velmora-pearl hover:text-velmora-espresso"
                      onClick={() => onRemove(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-velmora-espresso/15 text-velmora-espresso">
                      <button type="button" className="p-2" onClick={() => onDecrement(item.id)} aria-label={`Decrease ${item.name}`}>
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button type="button" className="p-2" onClick={() => onIncrement(item.id)} aria-label={`Increase ${item.name}`}>
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-serif text-xl font-semibold text-velmora-espresso">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-velmora-espresso/10 bg-velmora-porcelain px-6 py-6 text-velmora-espresso">
            <div className="mb-4 flex items-center justify-between text-sm text-velmora-taupe">
              <span>{itemCount} item{itemCount === 1 ? "" : "s"}</span>
              <span>Shipping calculated at checkout</span>
            </div>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-clay">Subtotal</span>
              <span className="font-serif text-3xl font-semibold text-velmora-espresso">{formatPrice(subtotal)}</span>
            </div>
            <Button type="button" variant="accent" className="w-full" onClick={onClose}>
              Continue to Checkout
            </Button>
          </div>
        )}
      </aside>
    </div>
  )
}
