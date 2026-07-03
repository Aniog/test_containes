import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { PLACEHOLDER } from "@/components/ui/StrkImage"
import { useEffect } from "react"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal, count } = useCart()

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

  const FREE_SHIP_THRESHOLD = 50
  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal)
  const progress = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100)

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-soft transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-[0.15em] text-ink">
            Cart {count > 0 && `(${count})`}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink transition-colors hover:text-gold"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
            <ShoppingBag size={40} className="text-sand" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="text-sm text-taupe">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold-dark"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Free shipping progress */}
            <div className="border-b border-sand px-6 py-4">
              <p className="text-center text-xs text-taupe">
                {remaining > 0 ? (
                  <>
                    You're <span className="text-ink">{formatPrice(remaining)}</span> away from free shipping
                  </>
                ) : (
                  <span className="text-gold">You've unlocked free shipping</span>
                )}
              </p>
              <div className="mt-2 h-[2px] w-full bg-sand">
                <div
                  className="h-full bg-gold transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="flex flex-col gap-5">
                {items.map((line) => (
                  <li key={line.key} className="flex gap-4">
                    <Link
                      to={`/product/${line.productId}`}
                      onClick={closeCart}
                      className="shrink-0"
                    >
                      <img
                        alt={line.name}
                        className="h-24 w-20 object-cover"
                        data-strk-img-id={line.imgId}
                        data-strk-img={`[${line.descId}] [${line.titleId}]`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="200"
                        src={PLACEHOLDER}
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <Link
                          to={`/product/${line.productId}`}
                          onClick={closeCart}
                          className="font-serif text-base uppercase tracking-[0.1em] text-ink"
                        >
                          {line.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeItem(line.key)}
                          className="text-taupe transition-colors hover:text-gold"
                          aria-label={`Remove ${line.name}`}
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-taupe">
                        {line.tone === "gold" ? "18K Gold" : "Silver"}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center border border-sand">
                          <button
                            type="button"
                            onClick={() => updateQty(line.key, line.qty - 1)}
                            className="px-2 py-1 text-ink transition-colors hover:text-gold"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-8 text-center font-sans text-sm text-ink">
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQty(line.key, line.qty + 1)}
                            className="px-2 py-1 text-ink transition-colors hover:text-gold"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="font-sans text-sm text-ink">
                          {formatPrice(line.price * line.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-sand px-6 py-5">
              <div className="flex items-center justify-between pb-4">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-taupe">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="pb-4 text-xs text-taupe">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-gold py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold-dark"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-taupe transition-colors hover:text-ink"
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
