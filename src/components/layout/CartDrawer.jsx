import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { useStrkImages } from "@/hooks/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, count } =
    useCart()
  const containerRef = useStrkImages([items, isOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    if (isOpen) window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closeCart])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        ref={containerRef}
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-ivory-soft shadow-soft transition-transform duration-400 ease-elegant ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-ink" strokeWidth={1.5} />
            <h2 className="font-sans text-xs uppercase tracking-widest text-ink">
              Your Cart {count > 0 && `(${count})`}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="text-ink transition-colors hover:text-gold"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-stone-light" strokeWidth={1} />
            <p className="font-serif text-2xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-accent mt-2"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4">
                  <Link
                    to={`/product/${item.productId}`}
                    onClick={closeCart}
                    className="relative h-24 w-20 shrink-0 overflow-hidden bg-ivory-deep"
                  >
                    <img
                      src={PLACEHOLDER}
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      className="h-full w-full object-cover"
                    />
                    <span className="sr-only" id={item.titleId}>
                      {item.name}
                    </span>
                    <span className="sr-only" id={item.descId}>
                      {item.name} {item.tone} tone gold jewelry
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="product-name text-ink">{item.name}</p>
                        <p className="mt-1 text-xs text-stone">
                          {item.tone} tone
                        </p>
                      </div>
                      <p className="font-sans text-sm text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-ink/15">
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity - 1)
                          }
                          className="px-2.5 py-1.5 text-ink transition-colors hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                        <span className="min-w-[2rem] text-center font-sans text-xs text-ink">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.key, item.quantity + 1)
                          }
                          className="px-2.5 py-1.5 text-ink transition-colors hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs uppercase tracking-widest text-stone transition-colors hover:text-gold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5">
            <div className="flex items-center justify-between pb-4">
              <span className="font-sans text-xs uppercase tracking-widest text-stone">
                Subtotal
              </span>
              <span className="font-serif text-2xl text-ink">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="pb-4 text-xs text-stone">
              Shipping & taxes calculated at checkout. Free worldwide shipping.
            </p>
            <button className="btn-accent w-full">Proceed to Checkout</button>
            <button
              onClick={closeCart}
              className="mt-3 w-full text-center text-xs uppercase tracking-widest text-stone transition-colors hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
