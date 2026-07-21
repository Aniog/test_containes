import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

export default function CartDrawer() {
  const { lines, isOpen, closeCart, removeItem, setQuantity, subtotal, count } = useCart()

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-[2px] transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream flex flex-col transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl text-espresso">
            Your Cart{" "}
            <span className="text-muted text-sm align-middle">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Lines */}
        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag className="w-10 h-10 text-line" strokeWidth={1} />
            <p className="font-serif text-2xl text-espresso">Your cart is empty</p>
            <p className="text-sm text-muted max-w-xs">
              Discover pieces crafted to be treasured — earrings, necklaces and huggies in warm gold.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 inline-flex items-center uppercase tracking-wide2 text-xs font-medium bg-espresso text-cream px-8 py-4 hover:bg-ink transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col divide-y divide-line">
                {lines.map((line) => (
                  <li key={line.key} className="flex gap-4 py-5">
                    <Link
                      to={`/product/${line.id}`}
                      onClick={closeCart}
                      className="shrink-0 w-20 h-24 bg-stone overflow-hidden"
                    >
                      <img
                        src={line.image}
                        alt={line.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <Link
                          to={`/product/${line.id}`}
                          onClick={closeCart}
                          className="font-serif text-base text-espresso leading-tight hover:text-gold transition-colors"
                        >
                          {line.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(line.key)}
                          className="text-muted hover:text-gold transition-colors text-xs uppercase tracking-wide2"
                          aria-label={`Remove ${line.name}`}
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-xs text-muted mt-1 uppercase tracking-wide2">
                        {line.variant}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-line">
                          <button
                            type="button"
                            onClick={() => setQuantity(line.key, line.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-ink hover:bg-stone transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm text-ink">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQuantity(line.key, line.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-ink hover:bg-stone transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm text-ink font-medium">
                          {formatPrice(line.price * line.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-line px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wide2 text-muted">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-xs text-muted">
                Shipping and taxes calculated at checkout. Free worldwide shipping over $75.
              </p>
              <button
                type="button"
                className="w-full bg-espresso text-cream uppercase tracking-wide2 text-xs font-medium py-4 hover:bg-ink transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-center text-xs uppercase tracking-wide2 text-ink hover:text-gold transition-colors"
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
