import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, setQuantity, subtotal, count } = useCart()
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [items, isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-500",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-editorial transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest3 text-ink">
            Your Cart {count > 0 && <span className="text-stone text-base">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-champagne-deep"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={36} strokeWidth={1} className="text-line" />
            <p className="font-serif text-2xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone max-w-xs">
              Discover pieces crafted to be treasured — start with our bestsellers.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 border border-ink px-8 py-3.5 text-[11px] uppercase tracking-widest2 text-ink hover:bg-ink hover:text-cream transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 border-b border-line py-5 last:border-0"
              >
                <Link to={`/products/${item.slug}`} onClick={closeCart} className="shrink-0">
                  <div className="h-24 w-20 overflow-hidden bg-sand">
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`${item.shortDescription} ${item.name}`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>

                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-2">
                    <div>
                      <Link
                        to={`/products/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-widest3 text-ink hover:text-champagne-deep"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-0.5 text-[11px] uppercase tracking-widest2 text-stone">
                        {item.variant}
                      </p>
                    </div>
                    <p className="text-sm text-champagne-deep">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center border border-line">
                      <button
                        type="button"
                        onClick={() => setQuantity(item.key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="px-2.5 py-1.5 text-ink hover:text-champagne-deep"
                      >
                        <Minus size={13} strokeWidth={1.5} />
                      </button>
                      <span className="min-w-8 text-center text-sm text-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(item.key, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="px-2.5 py-1.5 text-ink hover:text-champagne-deep"
                      >
                        <Plus size={13} strokeWidth={1.5} />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.key)}
                      className="text-[11px] uppercase tracking-widest2 text-stone hover:text-ink underline-offset-4 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest2 text-stone">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-champagne py-4 text-[11px] uppercase tracking-widest2 text-cream hover:bg-champagne-deep transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 text-[11px] uppercase tracking-widest2 text-stone hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
