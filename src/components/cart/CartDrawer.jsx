import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl transition-transform duration-300 ${
          isCartOpen ? 'cart-drawer-open' : 'cart-drawer-closed'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E8E2D9]">
            <h2
              className="text-lg font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Your Cart ({cartCount})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-[#1A1A1A] hover:text-[#C9A96E] transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag size={40} className="mx-auto text-[#E8E2D9] mb-4" />
                <p className="text-[#8A8580]">Your cart is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 text-[#C9A96E] text-sm uppercase tracking-[0.15em] font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-24 object-cover bg-[#F5F0EB]"
                      onError={(e) => { e.target.src = 'https://placehold.co/80x96/C9A96E/FAF8F5?text=V'; }}
                    />
                    <div className="flex-1">
                      <h3
                        className="text-sm font-light product-name"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#8A8580] mt-1">{item.variant}</p>
                      <p className="text-sm mt-1">${item.price}</p>

                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-6 h-6 border border-[#E8E2D9] flex items-center justify-center hover:border-[#C9A96E] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-6 h-6 border border-[#E8E2D9] flex items-center justify-center hover:border-[#C9A96E] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-[10px] uppercase tracking-[0.1em] text-[#8A8580] hover:text-red-500 transition-colors ml-2"
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
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#E8E2D9]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-[0.1em]">Total</span>
                <span className="text-lg font-light" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-[#1A1A1A] text-white text-center py-3 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#2D2D2D] transition-colors"
              >
                Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="block w-full text-center py-3 text-sm text-[#8A8580] hover:text-[#1A1A1A] transition-colors mt-2"
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
