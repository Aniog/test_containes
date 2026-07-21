import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, Check } from "lucide-react"
import { useCart } from "../../lib/cart"
import { formatPrice, cn } from "../../lib/utils"
import ProductThumb from "../product/ProductThumb"

export default function CartDrawer() {
  const { lines, subtotal, isOpen, justAdded, closeCart, updateQty, removeItem } = useCart()
  const [showConfirmed, setShowConfirmed] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    if (justAdded) {
      setShowConfirmed(true)
      const t = setTimeout(() => setShowConfirmed(false), 2200)
      return () => clearTimeout(t)
    }
  }, [justAdded, isOpen])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping bag"
    >
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={closeCart}
      />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-[440px] flex-col bg-bone-50 shadow-lift transition-transform duration-500 ease-soft",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <header className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <div>
            <h2 className="font-serif text-2xl text-ink">Your Bag</h2>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.22em] text-ink/60">
              {lines.length === 0
                ? "Nothing here yet"
                : `${lines.length} ${lines.length === 1 ? "piece" : "pieces"}`}
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-ink/5"
            aria-label="Close bag"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </header>

        {/* Confirmation toast */}
        <div
          className={cn(
            "mx-6 mt-4 flex items-center gap-2 border border-champagne/40 bg-champagne/10 px-4 py-3 text-[12px] uppercase tracking-[0.18em] text-ink transition-all duration-300",
            showConfirmed ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          )}
        >
          <Check className="h-4 w-4 text-champagne-700" strokeWidth={1.75} />
          <span>Added to bag</span>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="font-serif text-3xl text-ink">A quiet bag.</div>
              <p className="mt-3 max-w-[260px] text-sm text-ink/60">
                Pieces you add will rest here until you're ready to check out.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 inline-flex items-center justify-center border border-ink px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-ink hover:text-bone"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-ink/10">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${line.product.id}`}
                    onClick={closeCart}
                    className="block w-20 flex-shrink-0"
                  >
                    <ProductThumb product={line.product} aspect="4x5" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${line.product.id}`}
                          onClick={closeCart}
                          className="block text-[12px] font-medium uppercase tracking-[0.18em] text-ink"
                        >
                          {line.product.name}
                        </Link>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-ink/50">
                          {line.variant === "silver" ? "Sterling silver" : "18K gold plated"}
                        </p>
                      </div>
                      <span className="text-sm tabular-nums text-ink">
                        {formatPrice(line.lineTotal)}
                      </span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="inline-flex items-center border border-ink/15 text-ink">
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center hover:bg-ink/5"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(line.key, line.qty - 1)}
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums">{line.qty}</span>
                        <button
                          type="button"
                          className="flex h-8 w-8 items-center justify-center hover:bg-ink/5"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(line.key, line.qty + 1)}
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="text-[11px] uppercase tracking-[0.18em] text-ink/60 underline-offset-4 hover:text-ink hover:underline"
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

        {lines.length > 0 && (
          <footer className="border-t border-ink/10 bg-bone px-6 py-6">
            <div className="mb-1 flex items-center justify-between text-sm text-ink">
              <span className="uppercase tracking-[0.18em] text-[11px] text-ink/60">Subtotal</span>
              <span className="tabular-nums">{formatPrice(subtotal)}</span>
            </div>
            <p className="mb-4 text-[11px] text-ink/50">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="block w-full bg-ink py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-bone transition-opacity duration-300 hover:opacity-90"
            >
              Checkout · {formatPrice(subtotal)}
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 block w-full py-2 text-[11px] uppercase tracking-[0.22em] text-ink/60 hover:text-ink"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  )
}
