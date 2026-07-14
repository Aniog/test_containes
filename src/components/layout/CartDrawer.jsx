import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function CartDrawer() {
  const { lines, isOpen, closeCart, removeItem, setQuantity, subtotal, count } =
    useCart()

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const onKey = (e) => {
        if (e.key === "Escape") closeCart()
      }
      window.addEventListener("keydown", onKey)
      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", onKey)
      }
    }
    document.body.style.overflow = ""
  }, [isOpen, closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-serif text-xl text-ink">
            Your Bag{" "}
            <span className="text-base text-taupe">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-espresso transition-colors hover:text-champagne"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Lines */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-10 w-10 text-taupe" strokeWidth={1} />
              <p className="mt-4 font-serif text-xl text-ink">Your bag is empty</p>
              <p className="mt-2 text-sm text-taupe">
                Discover pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 bg-champagne px-8 py-3 text-xs uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-champagne-deep hover:text-cream"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4">
                  <Link
                    to={`/product/${line.slug}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <img
                      alt={line.name}
                      src={line.imageUrl}
                      className="h-24 w-24 bg-sand object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="font-serif text-base uppercase tracking-[0.12em] text-ink">
                          {line.name}
                        </p>
                        <p className="mt-0.5 text-xs uppercase tracking-wider text-taupe">
                          {line.variant}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.key)}
                        aria-label={`Remove ${line.name}`}
                        className="text-taupe transition-colors hover:text-champagne-deep"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-ink/15">
                        <button
                          type="button"
                          onClick={() => setQuantity(line.key, line.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="px-2.5 py-1.5 text-espresso transition-colors hover:text-champagne"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(line.key, line.quantity + 1)}
                          aria-label="Increase quantity"
                          className="px-2.5 py-1.5 text-espresso transition-colors hover:text-champagne"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-ink">
                        {formatPrice(line.price * line.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.18em] text-taupe">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-taupe">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-champagne py-4 text-xs uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-champagne-deep hover:text-cream"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-xs uppercase tracking-[0.18em] text-taupe transition-colors hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
