import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const { items, isOpen, closeCart, totalPrice, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-border-light">
            <h2 className="text-xl font-serif text-text-primary">Your Cart</h2>
            <button onClick={closeCart} className="text-text-body hover:text-text-primary transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-text-muted text-sm mb-4">Your cart is empty</p>
                <Link to="/shop" onClick={closeCart} className="btn-primary text-xs">
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-border-light last:border-0">
                    <div className="w-20 h-20 bg-cream-dark flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="product-name">{item.name}</p>
                          {item.variant && (
                            <p className="text-xs text-text-muted mt-0.5">{item.variant}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-text-muted hover:text-text-primary transition-colors ml-2"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="price mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 border border-border-light flex items-center justify-center hover:bg-cream-dark transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 border border-border-light flex items-center justify-center hover:bg-cream-dark transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border-light px-6 py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-text-body">Subtotal</span>
                <span className="text-lg font-serif text-text-primary">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-text-muted mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center text-xs">Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}