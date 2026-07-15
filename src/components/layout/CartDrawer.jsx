import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { getImageUrl } from "@/lib/images"

const SHIPPING_THRESHOLD = 75

export default function CartDrawer() {
  const { isOpen, closeCart, itemsDetailed, subtotal, setQty, removeItem } = useCart()

  // Body scroll lock + esc to close
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e) => {
      if (e.key === "Escape") closeCart()
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener("keydown", onKey)
    }
  }, [isOpen, closeCart])

  if (!isOpen) return null

  const remainingForFreeShipping = Math.max(0, SHIPPING_THRESHOLD - subtotal)
  const progressPct = Math.min(100, (subtotal / SHIPPING_THRESHOLD) * 100)

  return (
    <div className="fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
        aria-hidden
      />
      <aside
        className="absolute top-0 right-0 bottom-0 w-full sm:w-[440px] bg-cream shadow-elevated flex flex-col animate-fade-in"
        role="dialog"
        aria-label="Shopping bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 h-20 border-b border-taupe-300/50">
          <h2 className="font-serif text-2xl text-espresso">Your Bag</h2>
          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="p-2 -mr-2 text-espresso hover:text-gold-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free-shipping progress */}
        <div className="px-6 sm:px-8 py-4 bg-taupe-100/60 border-b border-taupe-300/50">
          {remainingForFreeShipping > 0 ? (
            <>
              <p className="text-[12px] tracking-wider-2 uppercase text-mocha-400">
                {formatPrice(remainingForFreeShipping)} away from free shipping
              </p>
              <div className="mt-3 h-[2px] w-full bg-taupe-300/60 overflow-hidden">
                <div
                  className="h-full bg-gold-500 transition-all duration-500 ease-editorial"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </>
          ) : (
            <p className="text-[12px] tracking-wider-2 uppercase text-gold-600">
              You've unlocked free shipping
            </p>
          )}
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6">
          {itemsDetailed.length === 0 ? (
            <EmptyState onClose={closeCart} />
          ) : (
            <ul className="space-y-6">
              {itemsDetailed.map((item) => {
                const lineImg = getImageUrl(item.product.imgId) || getImageUrl(item.product.imgId2)
                return (
                <li key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="relative w-20 h-24 bg-taupe-100 overflow-hidden flex-shrink-0">
                    {lineImg ? (
                      <img
                        src={lineImg}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full grid place-items-center text-mocha-300 text-[10px] uppercase tracking-wider-2">
                        {item.product.name.slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="product-name text-[12px] truncate">
                          {item.product.name}
                        </p>
                        <p className="mt-1 text-[11px] uppercase tracking-wider-2 text-mocha-400">
                          {item.variant}
                        </p>
                      </div>
                      <p className="font-serif text-[16px] text-espresso whitespace-nowrap">
                        {formatPrice(item.lineTotal)}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-taupe-300">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => setQty(item.id, item.variant, item.qty - 1)}
                          className="w-8 h-8 grid place-items-center text-espresso hover:text-gold-600 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-[13px] font-medium text-espresso">
                          {item.qty}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => setQty(item.id, item.variant, item.qty + 1)}
                          className="w-8 h-8 grid place-items-center text-espresso hover:text-gold-600 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-[11px] uppercase tracking-wider-2 text-mocha-400 hover:text-gold-600 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
                )
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {itemsDetailed.length > 0 && (
          <div className="border-t border-taupe-300/50 px-6 sm:px-8 py-6 bg-sand">
            <div className="flex items-center justify-between">
              <span className="text-[12px] uppercase tracking-wider-3 text-mocha-400">Subtotal</span>
              <span className="font-serif text-2xl text-espresso">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-mocha-400">
              Shipping & taxes calculated at checkout.
            </p>
            <button className="btn-primary w-full mt-5">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full text-center mt-3 text-[12px] uppercase tracking-wider-3 text-mocha-400 hover:text-espresso transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}

function EmptyState({ onClose }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center py-12">
      <ShoppingBag className="w-10 h-10 text-mocha-300" strokeWidth={1.2} />
      <p className="mt-6 font-serif text-2xl text-espresso">Your bag is empty</p>
      <p className="mt-2 text-[13px] text-mocha-400 max-w-xs">
        A little something for yourself, or someone you love. Begin with our
        bestsellers.
      </p>
      <Link
        to="/shop"
        onClick={onClose}
        className="btn-outline mt-6"
      >
        Shop the Collection
      </Link>
    </div>
  )
}
