import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-velmora-cream shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
            <h2 className="font-serif text-xl tracking-wider">Your Cart</h2>
            <button
              onClick={onClose}
              className="text-velmora-muted hover:text-velmora-dark transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={40} className="text-velmora-muted mb-4" />
                <p className="text-velmora-muted mb-2">Your cart is empty</p>
                <p className="text-sm text-velmora-muted/70 mb-6">
                  Add some pieces to get started
                </p>
                <Link
                  to="/collection"
                  onClick={onClose}
                  className="btn-primary inline-block"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-5 border-b border-velmora-border/50"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover bg-velmora-dark/5"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name truncate">{item.name}</h3>
                      <p className="text-xs text-velmora-muted mt-1">
                        {item.variant}
                      </p>
                      <p className="text-sm font-medium text-velmora-dark mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-velmora-border">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.variant,
                                item.quantity - 1
                              )
                            }
                            className="p-1.5 hover:bg-velmora-gold/10 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.variant,
                                item.quantity + 1
                              )
                            }
                            className="p-1.5 hover:bg-velmora-gold/10 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-velmora-muted hover:text-velmora-dark underline underline-offset-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-velmora-border px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-velmora-muted">Subtotal</span>
                <span className="font-serif text-lg text-velmora-dark">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-velmora-muted">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-primary w-full text-center">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-xs text-velmora-muted hover:text-velmora-dark underline underline-offset-2 text-center"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}