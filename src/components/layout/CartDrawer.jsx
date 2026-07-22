import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, drawerRef.current)
    })
    return () => cancelAnimationFrame(frame)
  }, [isOpen, items])

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-ivory shadow-card transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Bag {count > 0 && <span className="text-stone">({count})</span>}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={40} className="text-sand" />
            <p className="font-serif text-xl text-ink">Your bag is empty</p>
            <p className="text-sm text-stone">
              Discover pieces crafted to be treasured.
            </p>
            <button
              onClick={closeCart}
              className="mt-2 bg-ink px-8 py-3 text-[11px] uppercase tracking-widest2 text-ivory transition-colors hover:bg-gold hover:text-ink"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div key={item.lineId} className="flex gap-4 border-b border-ink/10 py-5">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={item.name}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      className="h-28 w-21 bg-cream object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-widest3 text-ink hover:text-gold"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-[10px] uppercase tracking-widest2 text-stone hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="mt-1 text-[11px] uppercase tracking-widest2 text-stone">
                      {item.tone}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-ink/15">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="w-8 text-center text-xs text-ink">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2 py-1.5 text-ink hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <p className="text-sm text-ink">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/10 px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest2 text-stone">Subtotal</span>
                <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-stone">Shipping & taxes calculated at checkout.</p>
              <button className="mt-4 w-full bg-gold py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-deep hover:text-ivory">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="mt-2 w-full py-3 text-[11px] uppercase tracking-widest2 text-stone hover:text-ink"
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
