import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ArrowRight } from "lucide-react"
import { useCart } from "@/context/CartContext"
import StrkImage from "@/components/ui/StrkImage"
import { formatPrice, cn } from "@/lib/utils"

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    increment,
    decrement,
    removeItem,
  } = useCart()

  // Lock body scroll when the drawer is open
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closeCart])

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-50 bg-ink/45 backdrop-blur-[2px] transition-opacity duration-500 ease-editorial",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping bag"
        aria-modal="true"
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-[440px] flex-col bg-elevated shadow-drawer transition-transform duration-500 ease-editorial",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-hairline px-7 py-6">
          <p className="font-serif text-2xl tracking-[0.05em] text-ink">
            Your Bag
          </p>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="text-inkSoft transition-colors hover:text-ink"
          >
            <X className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-3xl text-ink">Your bag is empty</p>
            <p className="mt-3 max-w-[280px] text-sm font-light leading-relaxed text-inkSoft">
              Discover the Velmora collection — demi-fine pieces made to wear every day.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary mt-8"
            >
              Shop the Collection
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-7 py-6">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="flex gap-5 border-b border-hairline py-5 last:border-b-0"
                >
                  <div className="h-24 w-20 flex-shrink-0">
                    <StrkImage
                      id={`cart-${item.key}`}
                      query={`[${item.descId}] [${item.titleId}] gold jewelry`}
                      ratio="4x5"
                      width={240}
                      alt={item.name}
                      fallback="bg-hairline/60"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="product-name text-ink">{item.name}</p>
                        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-inkSoft">
                          {item.tone === "gold" ? "18K Gold" : "Sterling Silver"}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-[11px] font-medium uppercase tracking-[0.2em] text-inkSoft underline-offset-4 hover:text-ink hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto flex items-end justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => decrement(item.key)}
                          aria-label="Decrease quantity"
                          className="flex h-8 w-8 items-center justify-center text-inkSoft transition-colors hover:text-ink"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="flex h-8 w-8 items-center justify-center text-[13px] font-medium text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increment(item.key)}
                          aria-label="Increase quantity"
                          className="flex h-8 w-8 items-center justify-center text-inkSoft transition-colors hover:text-ink"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-hairline bg-surface px-7 py-7">
              <div className="flex items-center justify-between text-[13px] text-inkSoft">
                <span className="uppercase tracking-[0.18em]">Subtotal</span>
                <span className="font-medium text-ink">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-[11px] font-light text-inkSoft">
                Shipping & taxes calculated at checkout. Free worldwide shipping
                on orders over $75.
              </p>
              <button type="button" className="btn-primary mt-5 w-full">
                Checkout
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="btn-ghost mt-3 w-full"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
