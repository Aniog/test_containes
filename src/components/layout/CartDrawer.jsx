import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, total } = useCart();

  const getProduct = (id) => products.find((p) => p.id === id);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-bg shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-xl uppercase tracking-widest">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-velmora-text hover:text-velmora-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-muted mb-4" />
                <p className="text-velmora-muted font-serif text-lg">Your cart is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 text-sm tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => {
                  const product = getProduct(item.id);
                  if (!product) return null;
                  return (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-velmora-border last:border-0">
                      {/* Image placeholder */}
                      <div className="w-20 h-20 bg-velmora-border/50 flex-shrink-0" />

                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-sm uppercase tracking-widest text-velmora-text">
                          {product.name}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-velmora-muted mt-1">{item.variant}</p>
                        )}
                        <p className="text-sm font-medium text-velmora-text mt-1">
                          ${product.price}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-3 border border-velmora-border px-2 py-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.variant, item.quantity - 1)
                              }
                              className="text-velmora-muted hover:text-velmora-text"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.variant, item.quantity + 1)
                              }
                              className="text-velmora-muted hover:text-velmora-text"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.variant)}
                            className="text-xs text-velmora-muted hover:text-velmora-text uppercase tracking-wider"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-velmora-border px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider text-velmora-text">Subtotal</span>
                <span className="font-serif text-xl font-semibold">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-muted">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-velmora-gold text-velmora-text py-3 text-sm uppercase tracking-widest font-medium hover:bg-velmora-gold-dark transition-colors">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-velmora-muted hover:text-velmora-text uppercase tracking-wider"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}