import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import JewelryArt from "@/components/ui/JewelryArt"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

const CartDrawer = () => {
  const { isOpen, closeCart, items, subtotal, shipping, total, updateQty, removeItem, justAdded } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      const t = setTimeout(() => setMounted(true), 30)
      return () => {
        clearTimeout(t)
        document.body.style.overflow = ""
      }
    }
    setMounted(false)
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className={`absolute inset-0 bg-ink/45 backdrop-blur-sm transition-opacity duration-500 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-lift transition-transform duration-500 ${
          mounted ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-hairline">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} strokeWidth={1.5} className="text-ink" />
            <h2 className="font-serif text-xl text-ink">Your Bag</h2>
            <span className="text-[12px] text-muted font-sans">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center text-ink hover:text-gold-deep transition-colors duration-300"
            aria-label="Close cart"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </header>

        {justAdded ? (
          <div
            key={justAdded}
            className="px-6 py-3 bg-cream/70 border-b border-hairline text-[12px] font-sans text-ink animate-fadeUp"
            role="status"
          >
            <span className="text-muted">Added — </span>
            {justAdded}
          </div>
        ) : null}

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center px-8 py-20">
              <div className="h-20 w-20 rounded-full bg-cream flex items-center justify-center mb-6">
                <ShoppingBag size={24} strokeWidth={1.3} className="text-ink/70" />
              </div>
              <h3 className="font-serif text-2xl text-ink">Your bag is empty</h3>
              <p className="mt-2 text-[14px] text-muted max-w-xs">
                Pieces you fall in love with will wait for you here.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-outline mt-6"
              >
                Discover the collection
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-hairline">
              {items.map((it) => (
                <li key={`${it.id}-${it.variant}`} className="flex gap-4 px-6 py-5">
                  <Link
                    to={`/product/${it.product.slug}`}
                    onClick={closeCart}
                    className="h-24 w-24 shrink-0 overflow-hidden bg-ink"
                  >
                    <JewelryArt
                      art={it.product.art}
                      palette={it.product.palette}
                      ratio="1/1"
                      className="h-full w-full"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="product-name">
                          <Link
                            to={`/product/${it.product.slug}`}
                            onClick={closeCart}
                            className="hover:text-gold-deep"
                          >
                            {it.product.name}
                          </Link>
                        </h4>
                        <p className="mt-1 text-[12px] text-muted">{it.product.material}</p>
                      </div>
                      <span className="product-name shrink-0">
                        {formatPrice(it.lineTotal)}
                      </span>
                    </div>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-hairline">
                        <button
                          type="button"
                          onClick={() => updateQty(it.id, it.qty - 1, it.variant)}
                          className="flex h-8 w-8 items-center justify-center text-ink hover:text-gold-deep"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} strokeWidth={1.5} />
                        </button>
                        <span className="w-8 text-center text-[12px] font-sans text-ink">
                          {it.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQty(it.id, it.qty + 1, it.variant)}
                          className="flex h-8 w-8 items-center justify-center text-ink hover:text-gold-deep"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} strokeWidth={1.5} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(it.id, it.variant)}
                        className="text-[11px] font-sans uppercase tracking-[0.18em] text-muted hover:text-ink"
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

        {items.length > 0 ? (
          <footer className="border-t border-hairline px-6 py-6 bg-ivory">
            <dl className="space-y-2 text-[14px] font-sans">
              <div className="flex justify-between">
                <dt className="text-muted">Subtotal</dt>
                <dd className="text-ink">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Shipping</dt>
                <dd className="text-ink">
                  {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
                </dd>
              </div>
              <div className="hairline mt-3" />
              <div className="flex justify-between pt-3 text-[15px]">
                <dt className="text-ink">Total</dt>
                <dd className="text-ink font-medium">{formatPrice(total)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-[11px] text-muted">
              {subtotal >= 75
                ? "You qualify for free worldwide shipping."
                : `Add ${formatPrice(75 - subtotal)} more for free shipping.`}
            </p>
            <Link
              to="/checkout"
              onClick={closeCart}
              className="btn-primary mt-5 w-full"
            >
              Checkout · {formatPrice(total)}
            </Link>
            <button
              type="button"
              onClick={closeCart}
              className="mt-3 w-full text-center text-[12px] font-sans uppercase tracking-[0.18em] text-muted hover:text-ink"
            >
              Continue shopping
            </button>
          </footer>
        ) : null}
      </aside>
    </div>
  )
}

export default CartDrawer
