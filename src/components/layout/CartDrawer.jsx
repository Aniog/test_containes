import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { X, Minus, Plus, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"

export default function CartDrawer() {
  const { items, isOpen, subtotal, closeCart, removeItem, updateQuantity } =
    useCart()
  const overlayRef = useRef(null)

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

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-400 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-velvet-100">
            <h2 className="font-serif text-lg tracking-wide">
              Your Cart ({items.length})
            </h2>
            <button
              onClick={closeCart}
              className="p-1 hover:text-gold-600 transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-5 text-center">
              <ShoppingBag size={40} className="text-velvet-300 mb-4" />
              <p className="text-velvet-600 font-serif text-lg mb-2">
                Your cart is empty
              </p>
              <p className="text-xs text-velvet-400 mb-6">
                Add some pieces you&apos;ll love.
              </p>
              <button
                onClick={closeCart}
                className="px-6 py-2.5 bg-midnight-900 text-white text-xs tracking-widest uppercase hover:bg-midnight-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
                {items.map((item, i) => (
                  <div
                    key={item.key}
                    className="flex gap-4 pb-4 border-b border-velvet-100 last:border-0 animate-fade-in-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-24 bg-velvet-100 rounded flex-shrink-0" />

                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        onClick={closeCart}
                        className="text-xs tracking-widest uppercase font-medium hover:text-gold-600 transition-colors block mb-0.5"
                      >
                        {item.name}
                      </Link>
                      <p className="text-[11px] text-velvet-500 capitalize mb-1">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium">
                        ${item.price.toFixed(2)}
                      </p>

                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-velvet-200 rounded">
                          <button
                            className="p-1 hover:text-gold-600 transition-colors"
                            onClick={() =>
                              updateQuantity(item.key, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs">
                            {item.quantity}
                          </span>
                          <button
                            className="p-1 hover:text-gold-600 transition-colors"
                            onClick={() =>
                              updateQuantity(item.key, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="text-[11px] text-velvet-400 hover:text-red-500 transition-colors tracking-wide"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-velvet-100 px-5 py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-velvet-600">Subtotal</span>
                  <span className="text-base font-medium">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-[11px] text-velvet-400">
                  Shipping & taxes calculated at checkout
                </p>
                <button className="w-full py-3 bg-midnight-900 text-white text-xs tracking-widest uppercase hover:bg-midnight-800 transition-colors">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full py-2 text-xs tracking-widest uppercase text-velvet-600 hover:text-velvet-900 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}