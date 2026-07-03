import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { cn, formatPrice } from "@/lib/utils"
import StrkImage from "@/components/StrkImage"

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    totals,
    setQuantity,
    removeItem,
  } = useCart()

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (typeof document === "undefined") return undefined
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return undefined
    function onKey(e) {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closeCart])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-black/70"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 w-full sm:w-[420px] bg-base border-l border-line",
          "flex flex-col transition-transform duration-500 ease-soft",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-line">
          <h2 className="font-sans text-[12px] uppercase tracking-name font-medium">
            Your Bag
            <span className="text-ink-muted"> ({totals.itemCount})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 -mr-2 text-ink-primary"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-4">
              <p className="font-serif text-2xl text-ink-primary">
                Your bag is empty
              </p>
              <p className="mt-3 text-sm text-ink-secondary max-w-xs">
                Discover pieces designed to be worn and kept. Begin with our
                bestsellers.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="btn-outline mt-8"
              >
                Shop the Collection
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => {
                const img = item.product.images?.[0]
                return (
                  <li
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-surface overflow-hidden flex-shrink-0">
                      {img && (
                        <StrkImage
                          id={img.id}
                          query={img.query}
                          ratio="4x5"
                          width={300}
                          alt={img.alt}
                          imgClassName="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="product-name truncate">
                            {item.product.name}
                          </h3>
                          <p className="mt-1 text-[11px] uppercase tracking-wider2 text-ink-muted">
                            {item.variant === "gold" ? "Gold" : "Silver"}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id, item.variant)}
                          className="p-1 text-ink-muted hover:text-clay transition-colors duration-300"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(item.id, item.variant, item.qty - 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-ink-primary hover:text-accent"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                          <span className="w-8 text-center text-sm tabular-nums">
                            {item.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(item.id, item.variant, item.qty + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center text-ink-primary hover:text-accent"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                          </button>
                        </div>
                        <span className="text-sm font-medium tabular-nums">
                          {formatPrice(item.lineTotal)}
                        </span>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-6 py-6 space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-ink-secondary">
                <span>Subtotal</span>
                <span className="tabular-nums">
                  {formatPrice(totals.subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-ink-secondary">
                <span>Shipping</span>
                <span className="tabular-nums">
                  {totals.shipping === 0 ? "Free" : formatPrice(totals.shipping)}
                </span>
              </div>
              <div className="hairline" />
              <div className="flex justify-between text-ink-primary text-base pt-1">
                <span>Total</span>
                <span className="tabular-nums font-medium">
                  {formatPrice(totals.total)}
                </span>
              </div>
            </div>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="btn-primary w-full"
            >
              Checkout
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="btn-ghost w-full"
            >
              Continue Shopping
            </button>
            {totals.subtotal < 75 && (
              <p className="text-[11px] text-center text-ink-muted tracking-wider2 uppercase">
                Add {formatPrice(75 - totals.subtotal)} more for free shipping
              </p>
            )}
          </div>
        )}
      </aside>
    </div>
  )
}
