import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, setQty, removeItem, subtotal, count } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const shipping = subtotal > 0 && subtotal < 75 ? 8 : 0
  const total = subtotal + shipping

  return (
    <div
      className={[
        "fixed inset-0 z-[70] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={closeCart}
        aria-hidden="true"
      />
      <div
        className={[
          "absolute inset-y-0 right-0 w-full sm:w-[420px] bg-cream shadow-2xl flex flex-col transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-label="Shopping bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline shrink-0">
          <div className="flex items-baseline gap-2.5">
            <h2 className="font-serif text-xl text-ink">Your Bag</h2>
            <span className="eyebrow text-muted">{count} {count === 1 ? "item" : "items"}</span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-2 -mr-2 text-ink hover:text-gold"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-8 py-16">
              <div className="w-16 h-16 border border-hairline rounded-full flex items-center justify-center mb-6">
                <ShoppingBag size={22} strokeWidth={1.5} className="text-muted" />
              </div>
              <p className="font-serif text-2xl text-ink">Your bag is empty</p>
              <p className="mt-2 text-sm text-muted max-w-[260px]">
                Discover demi-fine pieces, hand-finished in 18K gold plating.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="btn btn-primary mt-7"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((item) => (
                <li key={item.key} className="px-6 py-5 flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-paper overflow-hidden relative"
                    aria-label={item.name}
                  >
                    <span
                      className="absolute inset-0 bg-gradient-to-br from-cream via-paper to-cream"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute inset-0 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="block w-10 h-10 rounded-full border border-gold-soft/70 bg-gold-soft/30 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.6)]" />
                    </span>
                    <span
                      className="absolute inset-0 flex items-end justify-center pb-2 text-[9px] tracking-widest text-muted uppercase"
                      aria-hidden="true"
                    >
                      {item.variantName}
                    </span>
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p
                          className="font-serif uppercase tracking-wider2 text-[13px] text-ink truncate"
                        >
                          {item.name}
                        </p>
                        <p className="mt-1 text-[11px] text-muted tracking-wider uppercase">{item.variantName}</p>
                      </div>
                      <p className="text-sm text-ink whitespace-nowrap">{formatPrice(item.price)}</p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => setQty(item.key, item.qty - 1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-gold"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(item.key, item.qty + 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center text-ink hover:text-gold"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] uppercase tracking-wider text-muted hover:text-ink underline-offset-4 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-6 bg-paper shrink-0">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted">
                <span>Subtotal</span>
                <span className="text-ink">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Shipping</span>
                <span className="text-ink">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
              </div>
              <div className="hairline my-3" />
              <div className="flex justify-between text-ink text-base font-medium">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            {subtotal < 75 && (
              <p className="mt-4 text-[11px] text-muted text-center tracking-wider">
                Add {formatPrice(75 - subtotal)} more for free shipping
              </p>
            )}
            <button type="button" className="btn btn-primary w-full mt-5">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="block w-full text-center mt-3 eyebrow text-muted hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
