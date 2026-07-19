import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"


export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const ref = useRef(null)

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
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-serif text-xl text-ink">
            Your Cart{" "}
            <span className="text-sm text-stone">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-stone/50" strokeWidth={1} />
            <p className="mt-4 font-serif text-xl text-ink">Your cart is empty</p>
            <p className="mt-2 text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-deep"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="divide-y divide-ink/10">
                {items.map((item) => (
                  <li key={item.lineId} className="flex gap-4 py-5">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="shrink-0 overflow-hidden bg-sand"
                    >
                      <img
                        alt={item.name}
                        data-strk-img-id={`cart-${item.imgId}`}
                        data-strk-img={`[${item.descId}] [${item.titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="h-24 w-20 object-cover"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-[0.12em] text-ink">
                            {item.name}
                          </h3>
                          <p className="mt-0.5 text-[11px] uppercase tracking-[0.15em] text-stone">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.lineId)}
                          className="text-[10px] uppercase tracking-[0.15em] text-stone transition-colors hover:text-gold"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center border border-ink/20">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                            className="px-2 py-1.5 text-ink transition-colors hover:text-gold"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                          <span className="min-w-7 text-center text-xs text-ink">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                            className="px-2 py-1.5 text-ink transition-colors hover:text-gold"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" strokeWidth={1.5} />
                          </button>
                        </div>
                        <span className="font-serif text-base text-ink">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-ink/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.2em] text-stone">
                  Subtotal
                </span>
                <span className="font-serif text-2xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-stone">
                Shipping & taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-4 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-deep"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2 w-full py-3 text-[11px] uppercase tracking-[0.2em] text-stone transition-colors hover:text-ink"
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
