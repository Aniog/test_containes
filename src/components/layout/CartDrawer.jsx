import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-[#0D0D0D] border-l border-[#333333] animate-slideInRight">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#333333]">
            <h2 className="font-serif text-xl text-[#F5F5F0] tracking-wide">
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
              aria-label="Close cart"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-[#333333] mb-4" />
                <p className="text-[#A8A8A0] mb-4">Your cart is empty</p>
                <Link
                  to="/collections"
                  onClick={() => setIsCartOpen(false)}
                  className="text-[#C9A962] text-sm uppercase tracking-wider hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-[#1A1A1A] flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider text-[#F5F5F0] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#A8A8A0] mb-2">{item.variant}</p>
                      <p className="text-[#C9A962] font-medium mb-3">${item.price}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-[#333333]">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} strokeWidth={2} />
                          </button>
                          <span className="w-8 text-center text-sm text-[#F5F5F0]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-[#A8A8A0] hover:text-[#F5F5F0] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} strokeWidth={2} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-[#A8A8A0] hover:text-[#9C4146] transition-colors uppercase tracking-wider"
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
            <div className="p-6 border-t border-[#333333]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#A8A8A0]">Subtotal</span>
                <span className="text-xl text-[#F5F5F0] font-serif">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#A8A8A0] mb-4">Shipping calculated at checkout</p>
              <button className="w-full btn-primary py-4">
                Checkout
              </button>
              <Link
                to="/collections"
                onClick={() => setIsCartOpen(false)}
                className="block text-center mt-4 text-sm text-[#A8A8A0] hover:text-[#C9A962] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;