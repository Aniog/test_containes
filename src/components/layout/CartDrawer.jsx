import { useEffect } from "react"
import { Link } from "react-router-dom"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { ProductImage } from "@/lib/imagery"
import { formatPrice } from "@/lib/utils"

export function CartDrawer() {
  const { items, summary, isOpen, closeCart, updateQty, removeFromCart } = useCart()

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === "Escape") closeCart() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, closeCart])

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-cocoa/50 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-bone shadow-drawer transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-line">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart"
              className="p-1 hover:text-gold-300 transition-colors"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-5 px-8 text-center">
              <ShoppingBag size={40} strokeWidth={1} className="text-cocoa-50" />
              <p className="font-serif text-2xl text-cocoa">Your cart is empty</p>
              <p className="text-sm text-cocoa-100 leading-relaxed max-w-xs">
                Discover our demi-fine pieces, designed to layer with everything you already wear.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="btn-accent"
              >
                Shop the Collection
              </Link>
            </div>
          ) : (
            <>
              <ul className="flex-1 overflow-y-auto divide-y divide-line">
                {items.map((item) => (
                  <li key={item.productId} className="flex gap-4 p-6">
                    <Link
                      to={`/product/${item.productId}`}
                      onClick={closeCart}
                      className="block w-20 h-24 flex-shrink-0 overflow-hidden bg-sand"
                    >
                      <ProductImage id={item.image} name={item.name} className="w-full h-full" />
                    </Link>
                    <div className="flex-1 min-w-0 flex flex-col">
                      <Link
                        to={`/product/${item.productId}`}
                        onClick={closeCart}
                        className="product-name text-cocoa hover:text-gold-300 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <span className="text-xs text-cocoa-50 mt-1">{item.material}</span>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="inline-flex items-center border border-line">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQty(item.productId, item.qty - 1)}
                            className="w-7 h-7 inline-flex items-center justify-center text-cocoa-100 hover:text-cocoa"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="w-7 text-center text-sm">{item.qty}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQty(item.productId, item.qty + 1)}
                            className="w-7 h-7 inline-flex items-center justify-center text-cocoa-100 hover:text-cocoa"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>
                        <span className="text-sm text-cocoa">{formatPrice(item.price * item.qty)}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.productId)}
                        className="self-start mt-2 text-[11px] tracking-widest2 uppercase text-cocoa-50 hover:text-cocoa"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="px-6 py-6 border-t border-line bg-bone-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="eyebrow text-cocoa-50">Subtotal</span>
                  <span className="font-serif text-2xl text-cocoa">
                    {formatPrice(summary.subtotal)}
                  </span>
                </div>
                <p className="text-xs text-cocoa-50 mb-4">
                  Shipping & taxes calculated at checkout. Free worldwide shipping over $75.
                </p>
                <button type="button" className="btn-primary w-full">
                  Checkout
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="block w-full text-center mt-3 eyebrow text-cocoa-100 hover:text-cocoa"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  )
}
