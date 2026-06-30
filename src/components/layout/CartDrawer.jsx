import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal, count } = useCart()
  const drawerRef = useRef(null)

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

  // Load images for cart line items whenever the drawer opens or items change
  useEffect(() => {
    if (!isOpen) return
    const frameId = window.requestAnimationFrame(() => {
      if (drawerRef.current) {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      }
    })
    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal={isOpen ? "true" : undefined}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-espresso/10 px-6 py-5">
          <h2 className="font-serif text-xl tracking-widest text-espresso uppercase">
            Your Cart
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-espresso/60 transition-colors hover:text-espresso"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="text-espresso/20" strokeWidth={1} />
            <p className="mt-4 font-serif text-xl text-espresso">Your cart is empty</p>
            <p className="mt-2 text-sm text-espresso/50">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 bg-gold px-8 py-3 text-[11px] uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[cart-name-${item.key}]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      className="h-24 w-20 object-cover bg-stone"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p
                          id={`cart-name-${item.key}`}
                          className="font-serif text-base uppercase tracking-widest text-espresso"
                        >
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-xs text-espresso/50">
                          {item.tone} tone
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        className="text-espresso/40 transition-colors hover:text-espresso"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-espresso/15">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2 py-1.5 text-espresso/60 transition-colors hover:text-espresso"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-sm text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2 py-1.5 text-espresso/60 transition-colors hover:text-espresso"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <p className="text-sm text-espresso">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-espresso/10 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-espresso/60">
                Subtotal
              </span>
              <span className="font-serif text-xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-xs text-espresso/50">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 text-[11px] uppercase tracking-widest text-cream transition-colors hover:bg-gold-dark"
            >
              Checkout · {count} {count === 1 ? "item" : "items"}
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 text-[11px] uppercase tracking-widest text-espresso/60 transition-colors hover:text-espresso"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
