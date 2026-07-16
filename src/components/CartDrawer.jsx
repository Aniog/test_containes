import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <span className="text-sm tracking-[0.1em] uppercase">Your Cart</span>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-[#6B655E] mb-6">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline"
              >
                Browse Collection
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto px-6 py-4 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F5F1EA] flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <div className="product-name text-xs tracking-[0.1em] pr-4">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#6B655E] mt-0.5">
                            {item.selectedVariant}
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[#9A9287] hover:text-[#2C2824]"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E5DFD4]">
                          <button
                            onClick={() => updateQuantity(item.cartId, (item.quantity || 1) - 1)}
                            className="p-1.5 hover:bg-[#F5F1EA]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity || 1}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, (item.quantity || 1) + 1)}
                            className="p-1.5 hover:bg-[#F5F1EA]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm">${item.price * (item.quantity || 1)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t px-6 py-6">
                <div className="flex justify-between mb-6 text-sm">
                  <span>Total</span>
                  <span className="font-medium">${cartTotal}</span>
                </div>
                <button
                  onClick={() => {
                    alert('Checkout would open here. Cart state is ready for integration.');
                  }}
                  className="btn btn-primary w-full mb-3"
                >
                  Checkout
                </button>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center text-xs tracking-[0.08em] text-[#6B655E] hover:text-[#2C2824]"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
