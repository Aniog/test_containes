import { useEffect } from "react"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"
import { useCart } from "@/hooks/useCart"
import { formatPrice, cn } from "@/lib/utils"
import ProductImage from "@/components/product/ProductImage"

export default function CartDrawer() {
  const { items, isOpen, closeCart, setQuantity, removeItem, subtotal } =
    useCart()

  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = original
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen, closeCart])

  return (
    <div
      aria-hidden={!isOpen}
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="absolute inset-0 bg-ink/40" onClick={closeCart} />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={cn(
          "absolute inset-y-0 right-0 w-full max-w-md bg-cream shadow-drawer flex flex-col transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <header className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <h2 className="label text-ink">Your Bag</h2>
          <button
            type="button"
            onClick={closeCart}
            className="p-2 text-ink hover:text-ink/70 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" strokeWidth={1.25} />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <p className="font-serif text-2xl text-ink mb-2">Your bag is quiet.</p>
            <p className="text-sm text-mist mb-7">
              Find a piece that speaks to you.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-outline"
            >
              Discover Jewelry
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-6 divide-y divide-hairline">
              {items.map((item) => (
                <li
                  key={item.key}
                  className="py-5 flex gap-4"
                >
                  <div className="w-20 h-24 bg-bone overflow-hidden flex-shrink-0">
                    <ProductImage
                      query={item.imageQuery}
                      ratio="4x5"
                      width={160}
                      imgId={`cart-${item.key}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="product-name text-xs truncate">
                          {item.name}
                        </p>
                        <p className="label-2 text-mist mt-1.5">
                          {item.variant === "default"
                            ? "Gold Tone"
                            : item.variant}
                        </p>
                      </div>
                      <p className="text-sm text-ink tabular-nums whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(item.key, item.quantity - 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-bone transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm tabular-nums text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(item.key, item.quantity + 1)
                          }
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-bone transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-mist hover:text-ink transition-colors p-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.25} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <footer className="border-t border-hairline px-6 py-6">
              <div className="flex items-center justify-between mb-1">
                <span className="label-2 text-mist">Subtotal</span>
                <span className="text-base text-ink tabular-nums">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-mist mb-5">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                onClick={() => {
                  /* would route to checkout in real backend */
                }}
                className="btn-primary w-full"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="btn-ghost w-full justify-center mt-3"
              >
                Continue Shopping
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}
