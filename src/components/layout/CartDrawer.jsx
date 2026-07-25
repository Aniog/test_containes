import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, X } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, PLACEHOLDER_IMG } from "@/data/products"
import { cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CartDrawer() {
  const { items, subtotal, count, isCartOpen, closeCart, updateQuantity, removeItem } = useCart()
  const strkRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (strkRef.current) {
        ImageHelper.loadImages(strkImgConfig, strkRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [isCartOpen])

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isCartOpen])

  return (
    <div
      ref={strkRef}
      className={cn(
        "fixed inset-0 z-[80] transition-opacity duration-300",
        isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!isCartOpen}
    >
      <button aria-label="Close cart" onClick={closeCart} className="absolute inset-0 bg-noir/60 backdrop-blur-[2px]" />
      <aside
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-drawer transition-transform duration-500 ease-luxe",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
          <h2 className="font-serif text-base uppercase tracking-[0.25em] text-noir">
            Your Bag {count > 0 && <span className="text-muted">({count})</span>}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-muted transition-colors hover:text-noir">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <ShoppingBag className="h-10 w-10 text-sand" strokeWidth={1.2} />
            <div>
              <p className="font-serif text-xl text-noir">Your bag is empty</p>
              <p className="mt-2 text-sm text-muted">Pieces worth treasuring are waiting.</p>
            </div>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-2 border border-noir bg-noir px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory transition-colors hover:bg-gold hover:border-gold hover:text-noir"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="thin-scroll flex-1 overflow-y-auto px-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 border-b border-hairline py-5">
                  <Link to={`/product/${item.productId}`} onClick={closeCart} className="block h-24 w-20 shrink-0 overflow-hidden bg-cream">
                    <img
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.taglineId}] [${item.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="300"
                      src={PLACEHOLDER_IMG}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-serif text-[13px] uppercase tracking-[0.12em] text-noir">{item.name}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-muted">{item.variant} tone</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-muted transition-colors hover:text-noir"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-hairline">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="px-2.5 py-1.5 text-muted transition-colors hover:text-noir"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-7 text-center text-xs font-medium text-noir">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="px-2.5 py-1.5 text-muted transition-colors hover:text-noir"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-noir">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-hairline bg-cream/60 px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">Subtotal</span>
                <span className="font-serif text-xl text-noir">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-[11px] leading-relaxed text-muted">
                Complimentary worldwide shipping & 30-day returns on every order.
              </p>
              <button className="mt-5 w-full border border-noir bg-noir py-4 text-[11px] font-medium uppercase tracking-[0.25em] text-ivory transition-colors hover:border-gold hover:bg-gold hover:text-noir">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-3 w-full py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-muted transition-colors hover:text-noir"
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
