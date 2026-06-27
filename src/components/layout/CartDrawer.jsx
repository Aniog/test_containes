import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, count, removeItem, setQuantity } =
    useCart()

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60]",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-ink/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={closeCart}
      />

      {/* Panel */}
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory text-ink shadow-2xl transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl tracking-[0.15em]">
            YOUR CART {count > 0 && <span className="text-muted">({count})</span>}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="hover:text-gold">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        {/* Lines */}
        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={40} strokeWidth={1} className="text-sand" />
            <p className="font-serif text-2xl text-ink">Your cart is empty</p>
            <p className="text-sm text-muted">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-deep hover:text-ivory"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {lines.map((line) => (
                <div
                  key={line.key}
                  className="flex gap-4 border-b border-sand py-5"
                >
                  <Link
                    to={`/product/${line.productId}`}
                    onClick={closeCart}
                    className="relative h-28 w-22 shrink-0 overflow-hidden bg-cream"
                  >
                    <img
                      data-strk-img-id={line.imgId}
                      data-strk-img={`[${line.descId}] [${line.titleId}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      alt={line.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${line.productId}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-[0.1em] hover:text-gold-deep"
                      >
                        {line.name}
                      </Link>
                      <button
                        onClick={() => removeItem(line.key)}
                        className="text-muted hover:text-gold"
                        aria-label={`Remove ${line.name}`}
                      >
                        <X size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs capitalize text-muted">
                      {line.material} tone
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => setQuantity(line.key, line.quantity - 1)}
                          className="px-2.5 py-1.5 hover:bg-cream"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-sm">{line.quantity}</span>
                        <button
                          onClick={() => setQuantity(line.key, line.quantity + 1)}
                          className="px-2.5 py-1.5 hover:bg-cream"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(line.price * line.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-sand px-6 py-5">
              <div className="flex items-center justify-between pb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  Subtotal
                </span>
                <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="pb-4 text-xs text-muted">
                Shipping & taxes calculated at checkout. Free worldwide shipping.
              </p>
              <button className="w-full bg-gold py-4 text-[11px] uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-deep hover:text-ivory">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full py-3 text-[11px] uppercase tracking-[0.2em] text-muted hover:text-ink"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
