import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StrkImage from "@/components/ui/StrkImage"
import { cn } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const timer = window.setTimeout(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    }, 50)
    return () => window.clearTimeout(timer)
  }, [isOpen, items.length])

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
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        ref={ref}
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream text-ink shadow-card flex flex-col transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-line">
          <h2 className="font-serif text-xl tracking-widest2 uppercase">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="hover:text-gold transition-colors"
          >
            <X width={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag width={36} className="text-line" strokeWidth={1} />
            <p className="font-serif text-2xl">Your cart is empty</p>
            <p className="text-sm text-muted">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 inline-flex items-center justify-center bg-gold text-cream uppercase tracking-widest2 text-[11px] px-7 py-3.5 hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-line">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-sand overflow-hidden"
                  >
                    <StrkImage
                      imgId={item.imgId}
                      query={`[${item.descId}] [${item.titleId}]`}
                      ratio="3x4"
                      width={160}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-wider leading-tight hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label="Remove item"
                        className="text-muted hover:text-ink transition-colors"
                      >
                        <Trash2 width={16} />
                      </button>
                    </div>
                    <p className="text-xs text-muted mt-1">{item.tone} tone</p>
                    <p className="text-xs text-muted">{item.tagline}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="px-2 py-1.5 hover:bg-sand transition-colors"
                        >
                          <Minus width={13} />
                        </button>
                        <span className="px-3 text-sm tabular-nums">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="px-2 py-1.5 hover:bg-sand transition-colors"
                        >
                          <Plus width={13} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-widest2 text-muted">
                  Subtotal
                </span>
                <span className="font-serif text-2xl">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted">
                Shipping & taxes calculated at checkout. Free worldwide shipping.
              </p>
              <button
                type="button"
                className="w-full bg-gold text-cream uppercase tracking-widest2 text-[11px] py-4 hover:bg-gold-deep transition-colors"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="w-full text-center text-xs uppercase tracking-widest2 text-muted hover:text-ink transition-colors"
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
