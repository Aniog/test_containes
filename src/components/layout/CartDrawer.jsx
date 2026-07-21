import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { strkImgSrc } from "@/lib/images"
import { formatPrice } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal, count } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
      if (!drawerRef.current) return
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, drawerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }, [items, isOpen])

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
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [closeCart])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div
        className="absolute inset-0 bg-ink/50 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />
      <aside
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-ivory shadow-card flex flex-col animate-drawer-in"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl text-ink">
            Your Bag{" "}
            <span className="text-stone text-base align-middle">({count})</span>
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="p-1 text-ink hover:text-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-10 h-10 text-sand mb-4" strokeWidth={1.2} />
            <p className="font-serif text-2xl text-ink mb-2">Your bag is empty</p>
            <p className="text-sm text-stone mb-6">Discover pieces made to be treasured.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="inline-block bg-gold text-ink text-[11px] uppercase tracking-widest3 font-medium px-8 py-3.5 hover:bg-gold-deep hover:text-ivory transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="divide-y divide-sand/70">
              {items.map((it) => (
                <li key={it.key} className="flex gap-4 py-5">
                  <Link to={`/product/${it.id}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={it.name}
                      src={strkImgSrc(it.imgId, 200)}
                      className="w-20 h-24 object-cover bg-cream"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${it.id}`}
                      onClick={closeCart}
                      className="block font-serif text-base text-ink uppercase tracking-wider leading-tight hover:text-gold transition-colors"
                    >
                      {it.name}
                    </Link>
                    <p className="text-xs text-stone mt-1">{it.tone} tone</p>
                    <p className="text-sm text-ink mt-2">{formatPrice(it.price)}</p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          onClick={() => updateQuantity(it.key, it.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="p-1.5 text-ink hover:text-gold transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-sm text-ink min-w-[2rem] text-center">{it.quantity}</span>
                        <button
                          onClick={() => updateQuantity(it.key, it.quantity + 1)}
                          aria-label="Increase quantity"
                          className="p-1.5 text-ink hover:text-gold transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(it.key)}
                        className="text-[11px] uppercase tracking-widest3 text-stone hover:text-ink transition-colors"
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
          <div className="border-t border-sand px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm uppercase tracking-widest3 text-stone">Subtotal</span>
              <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-stone">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-gold text-ink text-[11px] uppercase tracking-widest3 font-medium py-4 hover:bg-gold-deep hover:text-ivory transition-colors duration-300">
              Proceed to Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-[11px] uppercase tracking-widest3 text-stone hover:text-ink transition-colors py-1"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}
