import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../lib/utils";
import { Link } from "react-router-dom";

export function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    closeCart,
  } = useCart();

  const handleCheckout = () => {
    // Placeholder for future checkout integration
    alert("Thank you for shopping with Velmora. Checkout would be implemented here.");
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isCartOpen ? "open" : ""}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="font-semibold tracking-[0.05em] uppercase text-sm">Your Cart</span>
          </div>
          <button onClick={closeCart} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[var(--color-border)] mb-4" />
            <p className="text-[var(--color-text-muted)] mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn btn-primary"
            >
              Browse Collection
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--color-bg-alt)] flex-shrink-0">
                    <div className="w-full h-full img-placeholder text-[10px]">
                      {item.name.split(" ").slice(0, 2).join(" ")}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-widest pr-4">{item.name}</p>
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.variant}</p>
                      </div>
                      <p className="text-sm font-medium whitespace-nowrap">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-[var(--color-border)]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="qty-btn border-r"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="qty-input border-x-0 pointer-events-none">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="qty-btn border-l"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] uppercase tracking-widest"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--color-border)] px-6 py-6">
              <div className="flex justify-between text-sm mb-4">
                <span className="text-[var(--color-text-muted)]">Subtotal</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-[10px] text-[var(--color-text-muted)] mb-4 tracking-wide">
                Shipping calculated at checkout. Free worldwide shipping on orders over $75.
              </p>
              <button
                onClick={handleCheckout}
                className="btn btn-primary w-full mb-3"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={closeCart}
                className="btn btn-outline w-full"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
