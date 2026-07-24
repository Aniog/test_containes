import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Minus, Plus, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { getResolvedImageUrl } from "@/data/products"

const FREE_SHIPPING_THRESHOLD = 75

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, removeItem, updateQuantity } =
    useCart()
  const panelRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen, closeCart])

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100),
  )

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40"
      />

      {/* Panel */}
      <aside
        ref={panelRef}
        role="dialog"
        aria-label="Shopping bag"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper text-ink shadow-xl transition-transform duration-500 ease-out-soft ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line-light px-6 py-5">
          <div>
            <h2 className="font-display text-2xl">Your Bag</h2>
            <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-text-muted">
              {items.length} {items.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="inline-flex h-9 w-9 items-center justify-center text-ink/70 transition-colors hover:text-ink"
          >
            <X className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>

        {/* Free-shipping progress */}
        <div className="px-6 pt-5">
          {remaining > 0 ? (
            <p className="text-[11px] uppercase tracking-[0.28em] text-text-muted">
              You're {formatPrice(remaining)} away from free shipping
            </p>
          ) : (
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold-deep">
              Complimentary shipping unlocked
            </p>
          )}
          <div className="mt-3 h-px w-full bg-line-light">
            <div
              className="h-px bg-gold transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag
                className="h-8 w-8 text-ink/30"
                strokeWidth={1.25}
              />
              <p className="mt-6 font-display text-2xl">Your bag is empty</p>
              <p className="mt-2 max-w-[260px] text-sm text-text-muted">
                Discover demi-fine pieces, made to be worn and treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-block border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="flex gap-4 border-b border-line-light pb-6"
                >
                  <div className="h-24 w-20 flex-shrink-0 overflow-hidden bg-paper-2">
                    {(() => {
                      const cartSrc =
                        getResolvedImageUrl(`${item.productId}-primary`) ||
                        getResolvedImageUrl(`${item.productId}-secondary`) ||
                        (item.image?.query
                          ? getResolvedImageUrl(item.image.query)
                          : null)
                      return cartSrc ? (
                        <img
                          alt={item.name}
                          src={cartSrc}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-full w-full bg-paper-2" />
                      )
                    })()}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="product-name text-ink">{item.name}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-text-muted">
                          {item.colorLabel}
                        </p>
                      </div>
                      <p className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <div className="inline-flex items-center border border-line-light">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            updateQuantity(item.key, item.quantity - 1)
                          }
                          className="inline-flex h-8 w-8 items-center justify-center text-ink/70 transition-colors hover:text-ink"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            updateQuantity(item.key, item.quantity + 1)
                          }
                          className="inline-flex h-8 w-8 items-center justify-center text-ink/70 transition-colors hover:text-ink"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          removeItem(item.key)
                          toast.message(`Removed ${item.name} from bag`)
                        }}
                        className="text-[11px] uppercase tracking-[0.28em] text-text-muted transition-colors hover:text-ink"
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

        {/* Footer / checkout */}
        {items.length > 0 && (
          <div className="border-t border-line-light bg-bone px-6 py-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow text-text-muted">Subtotal</p>
              <p className="font-display text-2xl">{formatPrice(subtotal)}</p>
            </div>
            <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-text-muted">
              Taxes & shipping calculated at checkout
            </p>
            <button
              type="button"
              onClick={() =>
                toast.info(
                  "Checkout is coming soon. Your bag has been saved.",
                )
              }
              className="mt-5 block w-full bg-ink py-4 text-center text-[11px] uppercase tracking-[0.28em] text-paper transition-colors duration-300 hover:bg-ink-soft"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 block w-full text-center text-[11px] uppercase tracking-[0.28em] text-text-muted transition-colors hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
