import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn, TRANSPARENT_PIXEL } from "@/lib/utils"
import { useStrkImages } from "@/lib/useStrkImages"

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, setQuantity, subtotal } = useCart()
  const ref = useStrkImages([drawerOpen, items.length])

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [drawerOpen])

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e) => {
      if (e.key === "Escape") closeDrawer()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [drawerOpen, closeDrawer])

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-500 ease-luxury",
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={ref}
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-luxury",
          drawerOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-champagne px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Bag <span className="text-stone">({items.length})</span>
          </h2>
          <button type="button" onClick={closeDrawer} aria-label="Close cart" className="text-ink hover:text-gold">
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="h-10 w-10 text-champagne" strokeWidth={1} />
            <p className="font-serif text-xl text-ink">Your bag is empty</p>
            <p className="text-sm text-stone">Discover pieces crafted to be treasured.</p>
            <button
              type="button"
              onClick={closeDrawer}
              className="mt-2 bg-gold px-8 py-3 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4">
                    <Link to={`/product/${item.id}`} onClick={closeDrawer} className="shrink-0">
                      <img
                        alt={item.name}
                        data-strk-img-id={item.imgId}
                        data-strk-img={`[${item.titleId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                        src={TRANSPARENT_PIXEL}
                        className="h-20 w-20 bg-sand object-cover"
                      />
                      <span id={item.titleId} className="sr-only">
                        {item.name} {item.variant} tone gold jewelry
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="font-serif text-base uppercase tracking-[0.12em] text-ink">{item.name}</p>
                          <p className="text-xs text-stone">{item.variant} tone</p>
                        </div>
                        <p className="text-sm text-ink">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center border border-champagne">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            className="px-2 py-1 text-ink hover:text-gold"
                            onClick={() => setQuantity(item.key, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-8 text-center text-sm text-ink">{item.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            className="px-2 py-1 text-ink hover:text-gold"
                            onClick={() => setQuantity(item.key, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.key)}
                          className="text-[11px] uppercase tracking-widest2 text-stone underline-offset-4 hover:text-gold hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-champagne px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-widest2 text-stone">Subtotal</span>
                <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-stone">Shipping & taxes calculated at checkout.</p>
              <button
                type="button"
                className="mt-4 w-full bg-gold py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
              >
                Checkout
              </button>
              <button
                type="button"
                onClick={closeDrawer}
                className="mt-2 w-full py-3 text-[11px] uppercase tracking-widest2 text-ink underline-offset-4 hover:text-gold hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
