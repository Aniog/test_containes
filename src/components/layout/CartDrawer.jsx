import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { getStrkImageUrl } from "@/lib/strk-images"
import { formatPrice } from "@/lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
      />
      <aside
        className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-soft-lg flex flex-col animate-slide-in"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide text-ink">
            Your Bag {count > 0 && `(${count})`}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold transition-colors">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={40} className="text-sand" strokeWidth={1} />
            <p className="mt-4 font-serif text-xl text-ink">Your bag is empty</p>
            <p className="mt-2 text-sm text-muted">Discover pieces crafted to be treasured.</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="mt-6 inline-block bg-gold text-cream text-xs uppercase tracking-widest2 px-8 py-3.5 rounded-full hover:bg-gold-deep transition-colors duration-300"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4 py-5 border-b border-sand/60">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                    <img
                      alt={item.name}
                      src={getStrkImageUrl(item.imgId) || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}
                      className="w-20 h-20 object-cover bg-cream-deep"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-base uppercase tracking-wide text-ink hover:text-gold transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-muted hover:text-ink transition-colors text-xs"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-muted mt-0.5">{item.color}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-sand rounded-full">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="px-2.5 py-1.5 text-ink hover:text-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-2 text-sm text-ink min-w-[1.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-ink hover:text-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 border-t border-sand bg-cream-deep/40">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-muted">Subtotal</span>
                <span className="font-serif text-xl text-ink">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted mb-4">
                Shipping & taxes calculated at checkout.
              </p>
              <button className="w-full bg-gold text-cream text-xs uppercase tracking-widest2 py-4 rounded-full hover:bg-gold-deep transition-colors duration-300">
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full mt-3 text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors py-2"
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
