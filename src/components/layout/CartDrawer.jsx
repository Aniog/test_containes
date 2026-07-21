import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { formatPrice, cn } from "@/lib/utils"


export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } = useCart()
  const containerRef = useRef(null)

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
    if (!isOpen) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items.length])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-espresso/40 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={containerRef}
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand/60 px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-gold" />
            <h2 className="font-sans text-xs uppercase tracking-[0.22em] text-ink">
              Your Cart {count > 0 && `(${count})`}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink transition-colors hover:text-gold"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag size={40} className="text-sand" strokeWidth={1} />
              <p className="mt-4 font-serif text-xl text-ink">Your cart is empty</p>
              <p className="mt-2 font-sans text-sm text-muted">
                Discover pieces crafted to be treasured.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="mt-6 inline-flex items-center justify-center bg-gold px-8 py-4 font-sans text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-gold-deep"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-sand/60">
              {items.map((line) => (
                <li key={line.id} className="flex gap-4 py-5">
                  <Link
                    to={`/product/${line.productId}`}
                    onClick={closeCart}
                    className="shrink-0"
                  >
                    <div className="h-24 w-20 overflow-hidden bg-sand/40">
                      <img
                        alt={line.name}
                        data-strk-img-id={line.imgId}
                        data-strk-img={`[${line.descId}] [${line.titleId}]`}
                        data-strk-img-ratio="4x5"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${line.productId}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-[0.1em] text-ink hover:text-gold"
                      >
                        {line.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id)}
                        className="text-muted transition-colors hover:text-gold"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    {line.variant && (
                      <p className="mt-1 font-sans text-xs text-muted">
                        {line.variant}
                      </p>
                    )}
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.id, line.quantity - 1)}
                          className="px-2.5 py-1.5 text-ink transition-colors hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="min-w-8 text-center font-sans text-xs text-ink">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(line.id, line.quantity + 1)}
                          className="px-2.5 py-1.5 text-ink transition-colors hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <p className="font-sans text-sm text-ink">
                        {formatPrice(line.price * line.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-sand/60 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 font-sans text-xs text-muted">
              Shipping & taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-5 w-full bg-gold py-4 font-sans text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-gold-deep"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full py-3 font-sans text-[11px] uppercase tracking-[0.18em] text-ink transition-colors hover:text-gold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
