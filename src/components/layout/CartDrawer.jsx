import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [isOpen, items])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
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
        ref={drawerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-serif text-xl uppercase tracking-widest2 text-ink">
            Your Bag {count > 0 && <span className="text-stone">({count})</span>}
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold">
            <X width={22} height={22} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <ShoppingBag width={40} height={40} className="text-stone/50" />
            <p className="mt-4 font-serif text-xl text-ink">Your bag is empty</p>
            <p className="mt-2 font-sans text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 bg-gold px-8 py-3 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.map((item) => {
              const product = products.find((p) => p.id === item.id)
              return (
              <div key={item.lineId} className="flex gap-4 border-b border-ink/10 py-5">
                <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                  <img
                    alt={item.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-28 w-21 bg-sand object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={closeCart}
                      className="font-serif text-base uppercase tracking-widest2 text-ink hover:text-gold"
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => removeItem(item.lineId)}
                      className="text-stone hover:text-gold"
                      aria-label="Remove item"
                    >
                      <X width={16} height={16} />
                    </button>
                  </div>
                  <p className="mt-1 font-sans text-xs text-stone">Tone: {item.tone}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-ink/15">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                        className="px-2 py-1.5 text-ink hover:text-gold"
                        aria-label="Decrease quantity"
                      >
                        <Minus width={14} height={14} />
                      </button>
                      <span className="px-3 font-sans text-sm text-ink">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                        className="px-2 py-1.5 text-ink hover:text-gold"
                        aria-label="Increase quantity"
                      >
                        <Plus width={14} height={14} />
                      </button>
                    </div>
                    <p className="font-sans text-sm text-ink">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm uppercase tracking-widest2 text-ink">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 font-sans text-xs text-stone">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-3 font-sans text-xs uppercase tracking-widest2 text-ink underline-offset-4 hover:underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
