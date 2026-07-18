import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { useCart, PLACEHOLDER } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { useStrkImages } from "@/lib/useStrkImages"
import strkImgConfig from "@/strk-img-config.json"

function resolveImgUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (!entry?.results?.length) return null
  const picked = entry.picked
    ? entry.results.find((r) => String(r.id) === String(entry.picked))
    : entry.results[0]
  return picked?.url || null
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, setQuantity, removeItem, count } = useCart()
  const drawerRef = useStrkImages([isOpen, items])

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
          "fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          "fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-cream shadow-drawer flex flex-col transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <div className="flex items-center gap-2">
            <ShoppingBag width={18} height={18} className="text-espresso" />
            <h2 className="font-serif text-xl text-espresso">
              Your Cart {count > 0 && <span className="text-muted text-base">({count})</span>}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="text-espresso hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X width={20} height={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag width={40} height={40} className="text-line mb-4" />
              <p className="font-serif text-xl text-espresso">Your cart is empty</p>
              <p className="text-sm text-muted mt-2 max-w-xs">
                Discover pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 bg-gold text-espresso text-[11px] uppercase tracking-widest2 px-8 py-3.5 hover:bg-gold-600 transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <Link to={`/products/${item.product.id}`} onClick={closeCart} className="shrink-0">
                    <div className="w-20 h-24 bg-cream-100 overflow-hidden">
                      <img
                        alt={item.product.name}
                        src={resolveImgUrl(item.imgId) || PLACEHOLDER}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/products/${item.product.id}`}
                      onClick={closeCart}
                      className="font-serif text-base text-espresso uppercase tracking-widest2 leading-tight hover:text-gold transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-[11px] uppercase tracking-widest2 text-muted mt-1">
                      {item.variant === "gold" ? "Gold Tone" : "Silver Tone"}
                    </p>
                    <p className="text-sm text-espresso-700 mt-1">{formatPrice(item.product.price)}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1.5 text-espresso hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus width={13} height={13} />
                        </button>
                        <span className="px-3 text-sm text-espresso-700 min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1.5 text-espresso hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus width={13} height={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-muted hover:text-espresso transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 width={16} height={16} />
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
              <span className="text-[11px] uppercase tracking-widest2 text-muted">Subtotal</span>
              <span className="font-serif text-2xl text-espresso">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-gold text-espresso text-[11px] uppercase tracking-widest2 py-4 hover:bg-gold-600 transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-widest2 text-espresso-700 hover:text-gold transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
