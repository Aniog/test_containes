import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart, useCartActions } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import Button from "@/components/ui/Button"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CartDrawer({ open, onClose }) {
  React.useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, document.body)
  }, [])
  const { lines, subtotal, count, hydrated } = useCart()
  const { updateQuantity, removeItem } = useCartActions()
  const panelRef = useRef(null)
  const previousFocusRef = useRef(null)

  // Lock body scroll, save last focus, restore on close
  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement
      document.body.style.overflow = "hidden"
      // Focus the close button after mount
      const t = setTimeout(() => {
        const closeBtn = panelRef.current?.querySelector("[data-cart-close]")
        closeBtn?.focus()
      }, 60)
      return () => {
        clearTimeout(t)
        document.body.style.overflow = ""
        if (previousFocusRef.current && previousFocusRef.current.focus) {
          previousFocusRef.current.focus()
        }
      }
    }
    return undefined
  }, [open])

  // Close on escape
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] transition-opacity duration-400 ease-out-soft",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <span
        id="cart-line-thumb-anchor"
        className="sr-only"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        warm gold jewelry thumbnail product bag cart close-up
      </span>
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        className={cn(
          "absolute top-0 right-0 h-full w-full sm:w-[440px] bg-bone shadow-drawer",
          "flex flex-col",
          "transition-transform duration-500 ease-out-soft",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <header className="flex items-center justify-between px-6 md:px-8 h-16 border-b border-line">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Bag
            <span className="ml-2 text-muted text-sm font-sans">
              {hydrated ? `(${count})` : ""}
            </span>
          </h2>
          <button
            data-cart-close
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="w-10 h-10 inline-flex items-center justify-center text-ink hover:text-champagne-deep transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
          {!hydrated ? (
            <p className="text-muted text-sm">Loading…</p>
          ) : lines.length === 0 ? (
            <EmptyState onClose={onClose} />
          ) : (
            <ul className="space-y-6">
              {lines.map((line) => (
                <li
                  key={line.key}
                  className="flex gap-4 pb-6 border-b border-line last:border-b-0"
                >
                  <Link
                    to={`/product/${line.product.id}`}
                    onClick={onClose}
                    className="shrink-0 w-20 h-24 bg-bone-soft overflow-hidden"
                  >
                    <img
                      alt={line.product.name}
                      data-strk-img-id="cart-line-thumb"
                      data-strk-img="[cart-line-thumb-anchor]"
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="240"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          to={`/product/${line.product.id}`}
                          onClick={onClose}
                          className="block"
                        >
                          <h3
                            id={`cart-product-${line.product.id}-name`}
                            className="font-sans text-[11px] tracking-widest2 uppercase text-ink font-medium truncate"
                          >
                            {line.product.name}
                          </h3>
                        </Link>
                        <p className="text-xs text-muted mt-1">
                          {line.variantId === "silver" ? "Silver" : "Gold"}
                        </p>
                      </div>
                      <p className="font-sans text-sm text-ink whitespace-nowrap">
                        {formatPrice(line.product.price * line.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(line.key, line.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="w-8 h-8 inline-flex items-center justify-center text-ink hover:text-champagne-deep"
                        >
                          <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink tabular-nums">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(line.key, line.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="w-8 h-8 inline-flex items-center justify-center text-ink hover:text-champagne-deep"
                        >
                          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        className="text-[11px] tracking-widest2 uppercase text-muted hover:text-ink transition-colors"
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

        {hydrated && lines.length > 0 && (
          <footer className="border-t border-line px-6 md:px-8 py-6 bg-bone-soft">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[11px] tracking-widest3 uppercase text-muted">
                Subtotal
              </p>
              <p className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </p>
            </div>
            <p className="text-xs text-muted mb-5">
              Shipping & taxes calculated at checkout.
            </p>
            <Button
              as={Link}
              to="/checkout"
              variant="primary"
              size="lg"
              fullWidth
              onClick={onClose}
            >
              Checkout
            </Button>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 w-full text-center text-[11px] tracking-widest3 uppercase text-muted hover:text-ink transition-colors"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  )
}

function EmptyState({ onClose }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center py-16">
      <div className="w-14 h-14 border border-line rounded-full inline-flex items-center justify-center text-ink mb-6">
        <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-2xl text-ink mb-2">Your bag is empty</h3>
      <p className="text-muted text-sm max-w-xs">
        Nothing here yet. Discover our hand-finished demi-fine pieces, made to
        be worn every day.
      </p>
      <Button
        as={Link}
        to="/shop"
        onClick={onClose}
        variant="outline"
        size="md"
        className="mt-8"
      >
        Shop the Collection
      </Button>
    </div>
  )
}
