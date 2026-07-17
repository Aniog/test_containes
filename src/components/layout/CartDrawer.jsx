import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#FAF7F2] shadow-xl animate-slide-in">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E4DE]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" style={{ color: 'var(--color-gold)' }} />
              <span className="font-serif text-lg">Your Cart</span>
              <span className="text-sm text-[#8A8A8A]">({cart.length})</span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[#E8E4DE] mb-4" />
                <p className="font-serif text-lg mb-2">Your cart is empty</p>
                <p className="text-sm text-[#8A8A8A] mb-6">Add some beautiful jewelry to get started</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-[#F5F0E8] flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="product-name text-xs">{item.name}</h4>
                      <p className="text-sm text-[#8A8A8A] mt-1 capitalize">{item.variant} Tone</p>
                      <p className="font-serif mt-1" style={{ color: 'var(--color-gold-dark)' }}>
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[#E8E4DE] hover:border-[#C9A962] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[#E8E4DE] hover:border-[#C9A962] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-sm text-[#8A8A8A] hover:text-red-500 transition-colors"
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
            <div className="p-6 border-t border-[#E8E4DE] bg-[#F5F0E8]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-[#8A8A8A]">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#8A8A8A] mb-4">Shipping and taxes calculated at checkout</p>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-accent w-full justify-center"
              >
                Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 text-sm text-[#8A8A8A] hover:text-[#1A1A1A] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease;
        }
      `}</style>
    </div>
  );
}