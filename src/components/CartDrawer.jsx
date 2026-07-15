import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { useStrkImages, getStrkImageUrl } from "@/lib/useStrkImages"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, count } = useCart()
  const drawerRef = useStrkImages([items, isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-400 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-sand px-6 py-5">
          <h2 className="font-serif text-xl text-charcoal">
            Your Cart {count > 0 && <span className="text-stone">({count})</span>}
          </h2>
          <button type="button" onClick={closeCart} aria-label="Close cart" className="text-charcoal">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag size={40} className="text-sand" strokeWidth={1} />
            <p className="font-serif text-xl text-charcoal">Your cart is empty</p>
            <p className="text-sm text-stone">Discover pieces crafted to be treasured.</p>
            <button
              type="button"
              onClick={closeCart}
              className="mt-2 bg-gold px-8 py-3 text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.map((item) => (
                <div key={item.lineId} className="flex gap-4 border-b border-sand py-5">
                  <Link to={`/product/${item.id}`} onClick={closeCart} className="shrink-0">
                    <div className="relative h-24 w-20 overflow-hidden bg-cream-deep">
                      <img
                        alt={item.name}
                        src={getStrkImageUrl(item.imgId)}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="text-xs uppercase tracking-widest2 text-charcoal"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeItem(item.lineId)}
                        className="text-stone hover:text-charcoal"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-stone">{item.tone} tone</p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                          className="px-2 py-1 text-charcoal hover:bg-cream-deep"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span className="px-3 text-xs text-charcoal">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                          className="px-2 py-1 text-charcoal hover:bg-cream-deep"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                      <span className="text-sm text-charcoal">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-sand px-6 py-5">
              <div className="flex items-center justify-between pb-4">
                <span className="text-xs uppercase tracking-widest2 text-stone">Subtotal</span>
                <span className="font-serif text-xl text-charcoal">{formatPrice(subtotal)}</span>
              </div>
              <p className="pb-4 text-xs text-stone">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="button"
                className="w-full bg-gold py-4 text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
              >
                Proceed to Checkout
              </button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-3 w-full text-center text-[11px] uppercase tracking-widest2 text-stone hover:text-charcoal"
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
