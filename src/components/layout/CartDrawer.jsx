import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn, resolveImg } from "@/lib/utils"

export default function CartDrawer() {
  const { isOpen, closeCart, lines, setQty, removeLine, subtotal, count } = useCart()

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

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Cart {count > 0 && <span className="text-stone">({count})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="text-ink hover:text-gold transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Lines */}
        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-line" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your cart is empty</p>
            <p className="text-sm text-stone">Discover pieces made to be treasured.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-3 text-xs uppercase tracking-[0.15em] text-cream transition-colors hover:bg-gold-soft"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-line">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 py-5">
                  <Link to={`/product/${line.id}`} onClick={closeCart} className="shrink-0">
                    <div className="relative h-24 w-20 overflow-hidden bg-sand">
                      <img
                        alt={line.name}
                        src={resolveImg(line.imgId1)}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${line.id}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-[0.12em] text-ink hover:text-gold"
                      >
                        {line.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeLine(line.key)}
                        className="text-xs text-stone hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs uppercase tracking-wider text-stone">
                      {line.color}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-line">
                        <button
                          type="button"
                          onClick={() => setQty(line.key, line.qty - 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-8 text-center text-sm text-ink">{line.qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(line.key, line.qty + 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm text-ink">{formatPrice(line.price * line.qty)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-line px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-stone">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button
              type="button"
              className="mt-4 w-full bg-gold py-3.5 text-xs uppercase tracking-[0.15em] text-cream transition-colors hover:bg-gold-soft"
            >
              Proceed to Checkout
            </button>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 w-full py-2 text-xs uppercase tracking-[0.15em] text-stone hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
