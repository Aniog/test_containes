import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart()

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  // ESC to close
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closeCart])

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[100] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink-700/60 backdrop-blur-sm transition-opacity duration-500 ease-elegant ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory-100 shadow-card transition-transform duration-500 ease-elegant ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-taupe-200 px-6 py-5">
          <h2 className="font-serif text-2xl text-ink-500">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center text-ink-500 transition-colors hover:text-gold-500"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
              <ShoppingBag size={36} strokeWidth={1.2} className="text-taupe-400" />
              <p className="font-serif text-2xl text-ink-500">Your bag is empty</p>
              <p className="max-w-xs text-[14px] text-ink-200">
                Begin with a piece from our latest collection — each one is made to be lived in.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-outline mt-4"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-taupe-200">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4 py-5">
                  <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-ivory-200">
                    {item.image ? (
                      <img
                        alt={item.name}
                        data-strk-img-id={`cart-${item.lineId}-img`}
                        data-strk-img={`prod-${item.slug}-title`}
                        data-strk-img-ratio={item.image.ratio}
                        data-strk-img-width="240"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="product-name hover:text-gold-500"
                      >
                        {item.name}
                      </Link>
                      <span className="font-sans text-[13px] font-medium text-ink-500">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    <p className="mt-1 text-[12px] uppercase tracking-wider2 text-ink-200">
                      {item.tone === "gold" ? "Gold tone" : "Silver tone"}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-taupe-200">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center text-ink-500 transition-colors hover:text-gold-500"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-7 text-center text-[13px] font-medium text-ink-500">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center text-ink-500 transition-colors hover:text-gold-500"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        className="text-[11px] uppercase tracking-wider2 text-ink-200 underline-offset-4 transition-colors hover:text-ink-500 hover:underline"
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

        {items.length > 0 && (
          <footer className="border-t border-taupe-200 bg-ivory-50 px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[12px] font-semibold uppercase tracking-wider2 text-ink-200">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink-500">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-[12px] text-ink-200">
              Shipping & taxes calculated at checkout.
            </p>
            <button type="button" className="btn-primary w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 text-[11px] font-semibold uppercase tracking-wider2 text-ink-200 transition-colors hover:text-ink-500"
            >
              Continue Shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  )
}
