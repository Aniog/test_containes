import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import ProductImage from "@/components/ui/ProductImage"
import strkImgConfig from "@/strk-img-config.json"

export default function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    subtotal,
    setQuantity,
    removeFromCart,
  } = useCart()
  const drawerRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, closeCart])

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      const t = window.setTimeout(() => closeButtonRef.current?.focus(), 60)
      return () => window.clearTimeout(t)
    }
  }, [isOpen])

  // The strk-img runtime watches document.body, but the cart drawer mounts
  // after a user gesture; the MutationObserver occasionally misses the
  // initial paint. Re-run the helper on every open / every items change to
  // guarantee the cart thumbnails are populated.
  useEffect(() => {
    if (!isOpen) return
    const t = window.setTimeout(() => {
      if (drawerRef.current) {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      }
    }, 30)
    return () => window.clearTimeout(t)
  }, [isOpen, items])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      <div
        className="absolute inset-0 bg-espresso/40"
        onClick={closeCart}
      />
      <div
        ref={drawerRef}
        className="absolute inset-y-0 right-0 w-full max-w-md bg-cream shadow-soft animate-slideInRight flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-taupe">
          <h2 className="font-serif text-2xl text-espresso">Your Bag</h2>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="p-1 text-espresso"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <div className="h-14 w-14 rounded-full border border-taupe flex items-center justify-center mb-6">
              <ShoppingBag className="h-5 w-5 text-espresso" strokeWidth={1.5} />
            </div>
            <p className="font-serif text-2xl text-espresso mb-2">
              Your bag is empty
            </p>
            <p className="editorial-body max-w-xs">
              Discover pieces designed to be worn every day — and kept forever.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary mt-8"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-taupe">
              {items.map((line) => (
                <li
                  key={line.lineId}
                  className="flex gap-4 px-6 py-5"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden bg-sand">
                    <ProductImage
                      slug={line.slug}
                      imgId={line.imageId}
                      ratio="1x1"
                      width={240}
                      titleId={`cart-${line.slug}-title`}
                      alt={line.name}
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3
                          id={`cart-${line.slug}-title`}
                          className="product-name text-[11px]"
                        >
                          {line.name}
                        </h3>
                        <p className="mt-1 font-sans text-[11px] tracking-[0.18em] uppercase text-mink">
                          {line.tone === "gold" ? "18K Gold" : "Sterling Silver"}
                        </p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${line.name}`}
                        onClick={() => removeFromCart(line.lineId)}
                        className="text-mink hover:text-espresso p-1 -m-1"
                      >
                        <X className="h-4 w-4" strokeWidth={1.5} />
                      </button>
                    </div>
                    <div className="mt-auto flex items-end justify-between">
                      <div className="inline-flex items-center border border-taupe">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            setQuantity(line.lineId, line.quantity - 1)
                          }
                          className="h-8 w-8 inline-flex items-center justify-center text-espresso hover:bg-sand"
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                        <span className="h-8 min-w-[32px] inline-flex items-center justify-center font-sans text-xs text-espresso">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            setQuantity(line.lineId, line.quantity + 1)
                          }
                          className="h-8 w-8 inline-flex items-center justify-center text-espresso hover:bg-sand"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <p className="font-serif text-[17px] text-espresso">
                        {formatPrice(line.price * line.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-taupe px-6 py-6 bg-cream-deep">
              <div className="flex items-baseline justify-between mb-1">
                <span className="kicker">Subtotal</span>
                <span className="font-serif text-2xl text-espresso">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="font-sans text-xs text-mink mt-1 mb-5">
                Shipping & taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full"
              >
                Checkout
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center font-sans text-[11px] uppercase tracking-[0.24em] text-espresso hover:opacity-70"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
