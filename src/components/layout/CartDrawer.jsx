import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

const FREE_SHIPPING_THRESHOLD = 80

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, setQuantity, removeItem } =
    useCart()
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

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
    function onKey(e) {
      if (e.key === "Escape") closeCart()
    }
    if (isOpen) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closeCart])

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const progress = Math.min(
    100,
    Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100),
  )

  return (
    <div
      className={`fixed inset-0 z-[60] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-espresso/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
        aria-label="Close cart"
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-linen shadow-soft transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-sand-200 px-6 py-5">
          <h2 className="font-serif text-2xl text-espresso">Your Bag</h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center text-espresso transition-colors hover:text-champagne-400 focus-ring"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </header>

        {hydrated && remaining > 0 && (
          <div className="border-b border-sand-200 bg-ivory-50 px-6 py-4 text-[12px] text-stone-300">
            <p>
              You're{" "}
              <span className="font-medium text-espresso">
                {formatPrice(remaining)}
              </span>{" "}
              away from free shipping.
            </p>
            <div className="mt-2 h-[2px] w-full bg-sand-200">
              <div
                className="h-full bg-champagne transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {!hydrated ? (
            <div className="flex h-full items-center justify-center">
              <p className="text-stone-300">Loading your bag…</p>
            </div>
          ) : items.length === 0 ? (
            <EmptyState onClose={closeCart} />
          ) : (
            <ul className="divide-y divide-sand-200">
              {items.map((line) => (
                <li key={line.lineId} className="flex gap-4 px-6 py-5">
                  <Link
                    to={`/product/${line.product.id}`}
                    onClick={closeCart}
                    className="block h-24 w-20 shrink-0 overflow-hidden bg-ivory"
                  >
                    <img
                      alt={line.product.name}
                      data-strk-img-id={`cart-${line.product.id}-${line.variant.id}`}
                      data-strk-img={`[${line.product.descId}] [${line.product.titleId}]`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="240"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to={`/product/${line.product.id}`}
                          onClick={closeCart}
                          className="product-name hover:text-champagne-400"
                        >
                          {line.product.name}
                        </Link>
                        <p className="mt-1 text-[12px] uppercase tracking-widest2 text-stone-300">
                          {line.variant?.label}
                        </p>
                      </div>
                      <span className="price shrink-0">
                        {formatPrice(line.lineTotal)}
                      </span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-sand-200">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            setQuantity(line.lineId, line.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:text-champagne-400 focus-ring"
                        >
                          <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center font-sans text-[13px] tabular-nums text-espresso">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            setQuantity(line.lineId, line.quantity + 1)
                          }
                          className="flex h-8 w-8 items-center justify-center text-espresso transition-colors hover:text-champagne-400 focus-ring"
                        >
                          <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.lineId)}
                        className="font-sans text-[11px] uppercase tracking-widest2 text-stone-300 underline-offset-4 transition-colors hover:text-espresso hover:underline focus-ring"
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

        {hydrated && items.length > 0 && (
          <footer className="border-t border-sand-200 bg-linen px-6 py-5">
            <div className="flex items-baseline justify-between">
              <span className="font-sans text-[12px] uppercase tracking-widest2 text-stone-300">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-[12px] text-stone-300">
              Shipping & taxes calculated at checkout
            </p>
            <button
              type="button"
              className="btn-primary mt-5 w-full"
              onClick={() => {
                closeCart()
                window.alert(
                  "Checkout is a preview-only flow in this demo. In production this would route to the secure checkout.",
                )
              }}
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full font-sans text-[12px] uppercase tracking-widest2 text-stone-300 underline-offset-4 transition-colors hover:text-espresso hover:underline focus-ring"
            >
              Continue shopping
            </button>
          </footer>
        )}
      </aside>
    </div>
  )
}

function EmptyState({ onClose }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ivory">
        <ShoppingBag className="h-6 w-6 text-stone-300" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-2xl text-espresso">Your bag is empty</h3>
      <p className="mt-2 max-w-[28ch] text-[14px] text-stone-300">
        Discover pieces crafted to be treasured, from our demi-fine gold edit.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="btn-primary mt-6"
      >
        Shop the Collection
      </Link>
    </div>
  )
}
