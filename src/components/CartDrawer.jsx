import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { StrkImage, useStrkImages, PLACEHOLDER } from "@/components/ui/StrkImage"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const drawerRef = useRef(null)

  // Load images inside the drawer whenever it opens or items change
  useStrkImages(drawerRef, [isOpen, items.length])

  // Lock body scroll when open
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

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink-900/50 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          "fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-cream-50 shadow-2xl flex flex-col transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink-200/50">
          <h2 className="font-serif text-xl text-ink-900">
            Your Cart{" "}
            <span className="text-sm text-ink-400 font-sans">
              ({count})
            </span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-ink-500 hover:text-ink-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-ink-300 mb-4" strokeWidth={1} />
            <p className="font-serif text-xl text-ink-800 mb-2">Your cart is empty</p>
            <p className="text-sm text-ink-500 mb-6">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-block text-xs uppercase tracking-widest2 font-medium border border-ink-800 text-ink-800 px-8 py-3 hover:bg-ink-800 hover:text-cream-50 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <StrkImage
                      imgId={`${item.imageId}-card`}
                      query={`[cart-name-${item.lineId}]`}
                      ratio="1x1"
                      width={160}
                      alt={item.imageAlt}
                      src={PLACEHOLDER}
                      className="w-20 h-20 object-cover bg-cream-200"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <h3
                        id={`cart-name-${item.lineId}`}
                        className="font-serif text-base text-ink-900 uppercase tracking-wide leading-tight"
                      >
                        {item.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        className="text-ink-400 hover:text-ink-900 transition-colors shrink-0"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-ink-500 mt-1 capitalize">
                      {item.tone} tone
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-ink-300">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2 py-1 text-ink-600 hover:text-ink-900 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-ink-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2 py-1 text-ink-600 hover:text-ink-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink-900">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-ink-200/50 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest2 text-ink-600">
                Subtotal
              </span>
              <span className="font-serif text-xl text-ink-900">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="text-xs text-ink-500">
              Shipping & taxes calculated at checkout. Free worldwide shipping.
            </p>
            <button
              type="button"
              className="w-full bg-gold-500 text-cream-50 text-xs uppercase tracking-widest2 font-medium py-4 hover:bg-gold-600 transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-xs uppercase tracking-widest2 text-ink-600 hover:text-ink-900 transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
