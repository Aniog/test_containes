import { X, Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "../context/CartContext"
import { cn } from "../lib/utils"

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } =
    useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-[420px] bg-brand-white z-50 shadow-2xl transform transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-warm">
            <h2 className="font-serif text-xl tracking-[0.1em] uppercase text-brand-dark">
              Your Cart
            </h2>
            <button
              onClick={closeCart}
              className="p-2 hover:text-brand-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-brand-stone font-sans text-sm mb-2">
                  Your cart is empty
                </p>
                <p className="text-brand-stone font-sans text-xs">
                  Add some pieces to get started
                </p>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li
                    key={item.key}
                    className="flex gap-4 pb-6 border-b border-brand-warm last:border-0"
                  >
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-brand-warm rounded flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-[0.1em] text-brand-dark">
                            {item.product.name}
                          </h3>
                          <p className="text-xs text-brand-stone font-sans mt-0.5">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="p-1 hover:text-red-500 transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-brand-warm rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.key, item.quantity - 1)
                            }
                            className="p-1.5 hover:text-brand-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-sans text-brand-dark min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.key, item.quantity + 1)
                            }
                            className="p-1.5 hover:text-brand-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-sans text-sm font-medium text-brand-dark">
                          ${item.product.price}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-brand-warm px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-brand-stone uppercase tracking-wider">
                  Subtotal
                </span>
                <span className="font-sans text-lg font-semibold text-brand-dark">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-brand-stone font-sans">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full bg-brand-dark text-brand-white font-sans text-sm uppercase tracking-[0.15em] py-3.5 hover:bg-brand-charcoal transition-colors duration-300">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}