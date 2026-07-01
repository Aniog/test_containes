import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { useStrkImages } from "@/hooks/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQty, removeItem, subtotal, count } = useCart()
  const containerRef = useStrkImages([items, isOpen])

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
        className={`fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-ivory shadow-2xl flex flex-col transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
        ref={containerRef}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <h2 className="font-serif text-xl tracking-wide text-espresso">
            Your Bag {count > 0 && <span className="text-stone text-base">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="p-1 text-espresso hover:opacity-60 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-10 h-10 text-stone" strokeWidth={1} />
            <p className="mt-4 font-serif text-2xl text-espresso">Your bag is empty</p>
            <p className="mt-2 text-sm text-stone">Discover pieces made to be treasured.</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-6 bg-gold text-ivory uppercase tracking-[0.15em] text-xs px-8 py-4 hover:bg-gold-deep transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-cream overflow-hidden"
                  >
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={item.imgQ}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src={PLACEHOLDER}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-[0.12em] text-espresso leading-tight hover:opacity-70"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-stone hover:text-espresso transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-xs uppercase tracking-[0.15em] text-stone">
                      {item.tone === "silver" ? "Silver Tone" : "Gold Tone"}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-hairline">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(item.key, item.qty - 1)}
                          className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-cream transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm text-espresso">{item.qty}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(item.key, item.qty + 1)}
                          className="w-8 h-8 flex items-center justify-center text-espresso hover:bg-cream transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm text-espresso">{formatPrice(item.price * item.qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-hairline px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-stone">Subtotal</span>
              <span className="font-serif text-xl text-espresso">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="w-full bg-gold text-ivory uppercase tracking-[0.15em] text-xs py-4 hover:bg-gold-deep transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-[0.2em] text-espresso underline underline-offset-4 hover:opacity-60"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
