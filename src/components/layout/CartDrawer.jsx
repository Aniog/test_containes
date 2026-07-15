import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useStrkImages, getStrkImageUrl } from "@/components/ui/StrkImage"
import { cn, formatPrice } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, subtotal, count } =
    useCart()
  const ref = useStrkImages([isOpen, items.length])

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
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-2xl tracking-wide">
            Your Cart{" "}
            <span className="text-stone text-base">({count})</span>
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div ref={ref} className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag className="w-10 h-10 text-stone" />
              <p className="font-serif text-xl text-ink">Your cart is empty</p>
              <p className="text-sm text-stone">
                Discover pieces crafted to be treasured.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-gold text-cream text-xs uppercase tracking-[0.2em] px-8 py-3 hover:bg-gold-soft transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="shrink-0"
                  >
                    <img
                      src={getStrkImageUrl(item.imgId)}
                      alt={item.name}
                      className="w-20 h-24 object-cover bg-sand"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <div>
                        <h3
                          id={`cart-${item.titleId}`}
                          className="font-serif text-lg uppercase tracking-[0.15em] leading-tight"
                        >
                          {item.name}
                        </h3>
                        <p
                          id={`cart-${item.descId}`}
                          className="text-xs text-stone mt-0.5"
                        >
                          {item.variant} · {item.subtitle}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-stone hover:text-ink transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity - 1)
                          }
                          className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity + 1)
                          }
                          className="px-2 py-1.5 text-ink hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-serif text-lg">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-stone">
                Subtotal
              </span>
              <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-gold text-cream text-xs uppercase tracking-[0.2em] py-4 hover:bg-gold-soft transition-colors">
              Proceed to Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-xs uppercase tracking-[0.2em] text-ink underline underline-offset-4 hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
