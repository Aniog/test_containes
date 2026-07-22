import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, resolveImgUrl } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()

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
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] h-full w-full max-w-md bg-ivory shadow-editorial flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-[0.14em] uppercase text-espresso">
            Your Cart {count > 0 && <span className="text-taupe text-base">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-espresso hover:text-gold-deep transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag size={36} className="text-sand" strokeWidth={1.2} />
            <p className="font-serif text-2xl text-espresso">Your cart is empty</p>
            <p className="text-sm text-taupe max-w-xs">
              Discover pieces crafted to be treasured — demi-fine gold jewelry for everyday wear.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 inline-flex items-center justify-center bg-gold text-ivory hover:bg-gold-deep px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-sand">
                {items.map((item) => (
                  <li key={item.lineId} className="flex gap-4 py-5">
                    <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                      <div className="relative h-24 w-20 overflow-hidden bg-cream">
                        <img
                          alt={item.name}
                          src={item.imgUrl || resolveImgUrl(item.imgId)}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <h3 id={`${item.lineId}-name`} className="font-serif text-base uppercase tracking-[0.1em] text-espresso leading-tight">
                          {item.name}
                        </h3>
                        <button
                          type="button"
                          onClick={() => removeItem(item.lineId)}
                          className="text-taupe hover:text-gold-deep transition-colors shrink-0"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="mt-1 text-xs text-taupe">{item.variant} tone</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center border border-sand">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                            className="px-2.5 py-1.5 text-espresso hover:bg-cream transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="px-3 text-sm text-espresso min-w-[2ch] text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                            className="px-2.5 py-1.5 text-espresso hover:bg-cream transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <p className="font-serif text-base text-cocoa">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-taupe">Subtotal</span>
                <span className="font-serif text-2xl text-espresso">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-taupe">Shipping & taxes calculated at checkout.</p>
              <button
                type="button"
                className="w-full bg-gold text-ivory hover:bg-gold-deep py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-center text-[11px] uppercase tracking-[0.2em] text-espresso hover:text-gold-deep transition-colors"
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
