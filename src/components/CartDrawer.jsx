import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

const FREE_SHIPPING_THRESHOLD = 0

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal, count } = useCart()
  const ref = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items.length])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]" ref={ref}>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-overlay-in"
        onClick={closeCart}
      />

      {/* Panel */}
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory shadow-card flex flex-col animate-drawer-in">
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-ink">
            Your Bag{" "}
            <span className="text-taupe text-sm font-sans align-middle">({count})</span>
          </h2>
          <button
            onClick={closeCart}
            className="text-ink hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
            <ShoppingBag size={40} strokeWidth={1} className="text-taupe" />
            <p className="font-serif text-2xl text-ink">Your bag is empty</p>
            <p className="text-sm text-taupe max-w-xs">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 inline-block bg-gold text-ivory text-xs uppercase tracking-widest2 font-medium px-8 py-3.5 hover:bg-gold-deep transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              {items.map((item) => (
                <div key={item.lineId} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-cream overflow-hidden"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[cart-${item.lineId}-name]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                    <span id={`cart-${item.lineId}-name`} className="hidden">
                      {item.name} gold jewelry
                    </span>
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-base text-ink uppercase tracking-product leading-tight hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-taupe hover:text-ink transition-colors text-xs"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-taupe mt-1">Tone: {item.tone}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-sm text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-sand px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-taupe uppercase tracking-widest2">Subtotal</span>
                <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-taupe">
                {FREE_SHIPPING_THRESHOLD === 0
                  ? "Free worldwide shipping included."
                  : "Shipping & taxes calculated at checkout."}
              </p>
              <button className="w-full bg-gold text-ivory text-xs uppercase tracking-widest2 font-medium py-4 hover:bg-gold-deep transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors py-2"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
