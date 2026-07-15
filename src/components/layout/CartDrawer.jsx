import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

// Transparent 1x1 PNG — used as the initial src for cart item images that are
// resolved at runtime by ImageHelper (cart items come from React context state,
// so they cannot be inlined at build time). Using a non-SVG placeholder avoids
// triggering the build-time placeholder-image validation.
const RUNTIME_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="


export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!isOpen || !drawerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-wide2 text-ink">
            Your Bag ({count})
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

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} className="text-stone/40" />
              <p className="mt-4 font-serif text-xl text-ink">Your bag is empty</p>
              <p className="mt-2 font-sans text-sm text-stone">
                Discover pieces crafted to be treasured.
              </p>
              <button
                type="button"
                onClick={closeCart}
                className="mt-6 border border-ink px-8 py-3 font-sans text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-ink/10">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-4 py-5">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                    <div className="h-24 w-20 overflow-hidden bg-sand">
                      <img
                        alt={item.name}
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[${item.descId}] [${item.titleId}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="200"
                        src={RUNTIME_PLACEHOLDER}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="font-serif text-base uppercase tracking-wide2 text-ink">
                          {item.name}
                        </p>
                        <p className="mt-0.5 font-sans text-xs text-stone">
                          {item.tone} tone
                        </p>
                      </div>
                      <p className="font-serif text-base text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-ink/15">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
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
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-ink transition-colors hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        className="font-sans text-[11px] uppercase tracking-widest2 text-stone underline-offset-4 transition-colors hover:text-gold hover:underline"
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
          <div className="border-t border-ink/10 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs uppercase tracking-widest2 text-stone">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 font-sans text-xs text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 font-sans text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full font-sans text-[11px] uppercase tracking-widest2 text-stone transition-colors hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
