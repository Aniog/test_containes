import { Link } from "react-router-dom"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { useEffect } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useStrkImages } from "@/lib/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal, count } = useCart()
  // Re-scan cart images whenever items change or the drawer opens.
  const ref = useStrkImages([items, isOpen])

  useEffect(() => {
    if (!isOpen || !ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items, ref])

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
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-soft transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest2 text-ink">
            Your Cart {count > 0 && <span className="text-stone">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-ink transition-colors hover:text-gold"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={40} className="text-hairline" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="font-sans text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-soft"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 border-b border-hairline py-5"
              >
                <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                  <img
                    alt={item.name}
                    data-strk-img-id={`cart-${item.key}`}
                    data-strk-img={`[${item.descId}] [${item.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    className="h-24 w-20 object-cover bg-sand"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-2">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-widest2 text-ink hover:text-gold"
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-stone transition-colors hover:text-gold"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="mt-1 font-sans text-xs uppercase tracking-widest2 text-stone">
                    {item.tone}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center border border-hairline">
                      <button
                        type="button"
                        onClick={() => setQuantity(item.key, item.quantity - 1)}
                        className="px-2.5 py-1.5 text-ink transition-colors hover:text-gold"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="min-w-8 text-center font-sans text-sm text-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(item.key, item.quantity + 1)}
                        className="px-2.5 py-1.5 text-ink transition-colors hover:text-gold"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                    <p className="font-sans text-sm text-ink">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5">
            <div className="flex items-center justify-between pb-4">
              <span className="font-sans text-sm uppercase tracking-widest2 text-ink">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="pb-4 font-sans text-xs text-stone">
              Shipping & taxes calculated at checkout. Free worldwide shipping.
            </p>
            <button
              type="button"
              className="w-full bg-gold py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-soft"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full py-2 font-sans text-xs uppercase tracking-widest2 text-stone transition-colors hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
