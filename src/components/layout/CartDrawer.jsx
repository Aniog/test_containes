import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import strkImgConfig from "@/strk-img-config.json"
import { formatPrice } from "@/lib/utils"

function resolveImgUrl(imgId) {
  const entry = strkImgConfig[imgId]
  if (entry && entry.picked) {
    const picked = (entry.results || []).find((r) => r.id === entry.picked)
    return picked ? picked.url : null
  }
  return null
}

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, subtotal } = useCart()

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />
      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-400 ease-smooth flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink-200/40">
          <h2 className="font-serif text-2xl text-ink-800">
            Your Bag{" "}
            <span className="text-ink-400 text-base align-middle">
              ({items.length})
            </span>
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink-600 hover:text-gold">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={40} className="text-ink-300" strokeWidth={1} />
            <p className="font-serif text-xl text-ink-700">Your bag is empty</p>
            <p className="text-sm text-ink-500">Discover pieces made to be treasured.</p>
            <button
              onClick={closeCart}
              className="mt-2 text-xs uppercase tracking-widest2 border border-ink-300 text-ink-800 px-6 py-3 hover:bg-ink-800 hover:text-cream transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((item) => (
                <div key={item.lineId} className="flex gap-4">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={closeCart}
                    className="shrink-0 w-20 h-24 bg-sand overflow-hidden"
                  >
                    <img
                      alt={item.name}
                      src={resolveImgUrl(item.imgId) || ""}
                      onError={(e) => { e.currentTarget.style.visibility = "hidden" }}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <Link
                        id={item.titleId}
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="font-serif text-base text-ink-800 uppercase tracking-wide leading-tight hover:text-gold"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.lineId)}
                        className="text-ink-400 hover:text-gold text-xs"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p id={item.descId} className="sr-only">
                      {item.name} gold jewelry
                    </p>
                    <p className="text-xs text-ink-500 mt-0.5">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-ink-200">
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2 py-1 text-ink-600 hover:text-gold"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-sm text-ink-800 min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2 py-1 text-ink-600 hover:text-gold"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-ink-800">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ink-200/40 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-ink-600">Subtotal</span>
                <span className="font-medium text-ink-800">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-ink-500">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-ink-800 text-cream text-xs uppercase tracking-widest2 py-4 hover:bg-gold transition-colors">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-xs uppercase tracking-widest2 text-ink-600 hover:text-gold"
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
