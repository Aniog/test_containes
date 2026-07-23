import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { productById } from "@/data/products"
import { formatPrice, cn } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, close, setQty, removeItem, summary } = useCart()
  const listRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === "Escape" && close()
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, close])

  useEffect(() => {
    if (!isOpen || !listRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, listRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isOpen, items])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] transition-opacity duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={close}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 h-full w-full sm:w-[440px] bg-ink text-bone border-l border-bone/10 transition-transform duration-400 flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-bone/10">
          <h2 className="font-serif text-lg tracking-widest2 uppercase">
            Your Bag
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="p-2 -mr-2 hover:text-gold transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
            <ShoppingBag className="w-10 h-10 text-bone/40 mb-6" />
            <p className="font-serif text-2xl text-bone">Your bag is empty</p>
            <p className="mt-2 text-[14px] text-bone/65">
              Begin with one of our bestsellers.
            </p>
            <Link
              to="/shop"
              onClick={close}
              className="mt-8 inline-flex items-center justify-center px-6 h-11 border border-gold text-bone hover:bg-gold hover:text-ink transition-colors text-[12px] tracking-widest2 uppercase"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <ul ref={listRef} className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-bone/10">
              {items.map((i) => {
                const p = productById(i.productId)
                if (!p) return null
                const variant = p.variants.find((v) => v.id === i.variantId) || p.variants[0]
                return (
                  <li key={`${i.productId}-${i.variantId}`} className="py-5 flex gap-4">
                    <Link
                      to={`/product/${p.id}`}
                      onClick={close}
                      className="block w-20 h-24 bg-umber flex-shrink-0 overflow-hidden"
                    >
                      <img
                        alt={p.name}
                        data-strk-img-id={`cart-${p.id}-${variant.id}`}
                        data-strk-img={`[${p.name}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="200"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            to={`/product/${p.id}`}
                            onClick={close}
                            className="block font-serif text-[15px] tracking-widest2 uppercase text-bone hover:text-gold transition-colors"
                          >
                            {p.name}
                          </Link>
                          <p className="mt-1 text-[12px] text-bone/60">
                            {variant.label}
                          </p>
                        </div>
                        <p className="font-serif text-[15px] text-bone whitespace-nowrap">
                          {formatPrice(p.price * i.qty)}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center border border-bone/15">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => setQty(i.productId, i.variantId, i.qty - 1)}
                            className="w-8 h-8 flex items-center justify-center text-bone/80 hover:text-gold"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-[13px] tabular-nums">
                            {i.qty}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => setQty(i.productId, i.variantId, i.qty + 1)}
                            className="w-8 h-8 flex items-center justify-center text-bone/80 hover:text-gold"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(i.productId, i.variantId)}
                          className="text-[12px] tracking-widest2 uppercase text-bone/60 hover:text-gold transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="border-t border-bone/10 px-6 py-6">
              <div className="flex items-center justify-between text-bone">
                <span className="text-[12px] tracking-widest2 uppercase text-bone/70">
                  Subtotal
                </span>
                <span className="font-serif text-xl">
                  {formatPrice(summary.subtotal)}
                </span>
              </div>
              <p className="mt-2 text-[12px] text-bone/55">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="mt-5 w-full h-12 bg-gold text-ink text-[12px] tracking-widest2 uppercase hover:bg-gold-soft transition-colors"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={close}
                className="mt-2 w-full h-12 text-[12px] tracking-widest2 uppercase text-bone/70 hover:text-bone"
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
