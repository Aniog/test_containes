import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, cartTotal, cartCount, removeItem, updateQuantity } = useCart();

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[#141414] border-l border-[#2a2a2a] transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#2a2a2a]">
            <h2 className="font-serif text-lg tracking-[0.12em] text-[#f5f0eb]">
              Cart ({cartCount})
            </h2>
            <button
              className="text-[#a09890] hover:text-[#f5f0eb] transition-colors"
              onClick={onClose}
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-[#2a2a2a] mb-4" />
                <p className="text-[#a09890] text-sm">Your cart is empty</p>
                <Link
                  to="/shop"
                  className="btn-primary mt-6"
                  onClick={onClose}
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-[#2a2a2a] last:border-0">
                    <div className="w-20 h-20 bg-[#1a1a1a] rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm tracking-[0.08em] text-[#f5f0eb] uppercase truncate">
                        {item.name}
                      </h3>
                      <p className="text-gold text-sm font-medium mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          className="text-[#a09890] hover:text-[#f5f0eb] transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm text-[#f5f0eb] w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          className="text-[#a09890] hover:text-[#f5f0eb] transition-colors"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          className="ml-auto text-xs text-[#a09890] hover:text-[#b85c4a] transition-colors"
                          onClick={() => removeItem(item.id)}
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
            <div className="border-t border-[#2a2a2a] px-6 py-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#a09890]">Subtotal</span>
                <span className="text-lg font-serif text-[#f5f0eb]">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#a09890] mb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                className="w-full text-center text-xs text-[#a09890] hover:text-[#f5f0eb] transition-colors mt-3 uppercase tracking-wider"
                onClick={onClose}
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