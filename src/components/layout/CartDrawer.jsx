import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { resolveStrkImgUrl } from "@/lib/strkImg"

const PLACEHOLDER = ""
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal, count } = useCart()

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

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-2xl transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand/60 px-6 py-5">
          <p className="font-serif text-xl tracking-wide text-ink">
            Your Bag <span className="text-muted text-sm">({count})</span>
          </p>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-gold-deep transition-colors"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} className="text-sand" />
              <p className="mt-4 font-serif text-xl text-ink">Your bag is empty</p>
              <p className="mt-2 text-sm text-muted">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex items-center justify-center bg-gold px-8 py-4 text-xs uppercase tracking-[0.2em] text-ivory hover:bg-gold-deep transition-colors"
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
                    onClick={closeCart}
                    className="h-24 w-20 flex-shrink-0 overflow-hidden bg-cream"
                  >
                    <img
                      alt={item.imageAlt}
                      src={resolveStrkImgUrl(`${item.imageId}-card`) || PLACEHOLDER}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p
                          id={`cart-name-${item.key}`}
                          className="font-serif text-base uppercase tracking-[0.12em] text-ink leading-tight"
                        >
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">
                          {item.variant}
                        </p>
                      </div>
                      <p className="font-sans text-sm text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold-deep"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold-deep"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-xs uppercase tracking-[0.15em] text-muted hover:text-gold-deep transition-colors"
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
          <div className="border-t border-sand/60 px-6 py-5">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Subtotal</p>
              <p className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</p>
            </div>
            <p className="mt-1 text-xs text-muted">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-5 w-full bg-gold py-4 text-xs uppercase tracking-[0.2em] text-ivory hover:bg-gold-deep transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-xs uppercase tracking-[0.2em] text-ink hover:text-gold-deep transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
