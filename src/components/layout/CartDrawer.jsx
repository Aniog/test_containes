import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/lib/useStrkImages"
import { resolveStrkImageUrl } from "@/lib/strkImages"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCart()
  const ref = useStrkImages([items, isOpen])

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
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl flex flex-col transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl tracking-widest3 uppercase">
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-champagne transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
              <ShoppingBag className="w-10 h-10 text-stone" strokeWidth={1} />
              <p className="font-serif text-xl text-ink">Your cart is empty</p>
              <p className="text-sm text-stone max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <button
                onClick={closeCart}
                className="mt-2 text-xs uppercase tracking-widest2 text-champagne border-b border-champagne pb-1 hover:text-champagne-deep transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="w-20 h-24 bg-sand shrink-0 overflow-hidden"
                  >
                    <img
                      src={resolveStrkImageUrl(item.imgId) || ""}
                      alt={item.name}
                      className="w-full h-full object-cover bg-sand"
                    />
                  </Link>

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <Link
                          to={`/product/${item.id}`}
                          onClick={closeCart}
                          className="font-serif text-base uppercase tracking-widest3 text-ink hover:text-champagne transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs text-stone mt-0.5">
                          {item.tone} · {item.subtitle}
                        </p>
                      </div>
                      <p className="text-sm text-ink whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 text-ink hover:text-champagne transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm text-ink min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.lineId, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 text-ink hover:text-champagne transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-xs uppercase tracking-wider text-stone hover:text-ink transition-colors"
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
          <div className="border-t border-line px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest2 text-stone">
                Subtotal
              </span>
              <span className="font-serif text-xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="w-full bg-champagne text-cream py-4 text-xs uppercase tracking-widest2 hover:bg-champagne-deep transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-widest2 text-ink border border-ink py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
