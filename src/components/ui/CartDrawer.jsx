import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/50 z-40 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-warmblack" />
            <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
            <span className="text-sm text-charcoal-500">({cartCount})</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-charcoal-50 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-charcoal-200 mb-4" />
              <p className="text-charcoal-500 mb-6">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-outline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  <div className="w-24 h-24 bg-charcoal-50 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm mb-1">{item.name}</h3>
                    <p className="text-sm text-charcoal-500 mb-2">
                      {item.variant}
                    </p>
                    <p className="font-medium mb-3">${item.price}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-charcoal-200 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-2 hover:bg-charcoal-50 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-2 hover:bg-charcoal-50 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-sm text-charcoal-500 hover:text-red-500 transition-colors"
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
          <div className="border-t border-charcoal-100 px-6 py-6 bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-charcoal-600">Subtotal</span>
              <span className="text-xl font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal-500 mb-4 text-center">
              Shipping and taxes calculated at checkout
            </p>
            <button className="w-full btn-primary mb-3">
              Checkout
            </button>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full text-sm text-charcoal-600 hover:text-warmblack transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
