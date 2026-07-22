import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, setQuantity, subtotal, lastAdded } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isDrawerOpen) {
      // lock body scroll
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      // small delay before showing for animation
      requestAnimationFrame(() => setMounted(true))
      return () => {
        document.body.style.overflow = prev
      }
    } else {
      setMounted(false)
    }
  }, [isDrawerOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeDrawer()
    }
    if (isDrawerOpen) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isDrawerOpen, closeDrawer])

  if (!isDrawerOpen) return null

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Shopping bag">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-espresso-800/40 transition-opacity duration-300 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeDrawer}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-cream-50 shadow-drawer flex flex-col transform transition-transform duration-400 ${
          mounted ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-espresso-800/10">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-espresso-800" strokeWidth={1.4} />
            <h2 className="font-serif text-xl text-espresso-800">
              Your Bag
              <span className="ml-2 text-sm text-ink-muted font-sans">
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeDrawer}
            className="inline-flex h-10 w-10 items-center justify-center text-espresso-800 hover:text-espresso-700"
          >
            <X className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Last added note */}
        {lastAdded && items.length > 0 && items[items.length - 1]?.id === lastAdded.product.id && (
          <div className="mx-6 mt-4 rounded-sm border border-gold-300/40 bg-gold-50 px-4 py-3">
            <p className="text-xs text-espresso-800">
              <span className="font-medium">Added to bag</span>
              <span className="text-ink-muted"> — {lastAdded.product.name}</span>
            </p>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center px-4">
              <p className="eyebrow text-ink-muted">Your bag is empty</p>
              <p className="mt-3 font-serif text-2xl text-espresso-800 text-balance">
                Begin with a piece that lasts.
              </p>
              <Link
                to="/shop"
                onClick={closeDrawer}
                className="mt-8 btn-primary"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeDrawer}
                    className="block w-20 h-24 flex-shrink-0 bg-cream-200 overflow-hidden"
                  >
                    <img
                      data-strk-img-id={`cart-${item.id}`}
                      data-strk-img={item.imageQuery}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="160"
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeDrawer}
                          className="block product-name text-[12px] text-espresso-800 hover:text-gold-500 truncate"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-xs text-ink-muted">
                          {item.variant.label}
                        </p>
                      </div>
                      <p className="text-sm text-espresso-800 whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          className="qty-btn"
                          disabled={item.quantity <= 1}
                          style={item.quantity <= 1 ? { opacity: 0.4, cursor: "not-allowed" } : undefined}
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.6} />
                        </button>
                        <span className="w-6 text-center text-sm text-espresso-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          className="qty-btn"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.6} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-[11px] uppercase tracking-widest2 text-ink-muted hover:text-espresso-800 transition-colors"
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

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t border-espresso-800/10 px-6 py-5 bg-cream-100/50">
            <div className="flex items-center justify-between mb-4">
              <span className="eyebrow text-ink-muted">Subtotal</span>
              <span className="font-serif text-2xl text-espresso-800">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-ink-muted mb-5 text-center">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="btn-primary w-full"
              onClick={() => alert("Checkout coming soon — this is a preview storefront.")}
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeDrawer}
              className="mt-3 w-full text-center text-[11px] uppercase tracking-widest2 text-ink-muted hover:text-espresso-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
