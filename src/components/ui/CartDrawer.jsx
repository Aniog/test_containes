import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
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
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#F8F5F0] z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4C5A9]">
          <div className="font-serif text-xl tracking-[2px]">YOUR CART</div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#2C2522] hover:text-[#8B7355]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="text-[#8B7355] mb-4">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <p className="text-[#2C2522] mb-2">Your cart is empty</p>
            <p className="text-sm text-[#8B7355] mb-6">Discover our collection of demi-fine jewelry</p>
            <Link
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="px-8 py-3 bg-[#2C2522] text-[#F8F5F0] text-sm tracking-[1.5px] hover:bg-[#8B7355] transition-colors"
            >
              SHOP COLLECTION
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#EDE7DC] flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-serif text-sm tracking-[1px] text-[#2C2522]">{item.name}</div>
                        <div className="text-xs text-[#8B7355] mt-0.5">{item.selectedVariant}</div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#8B7355] hover:text-[#2C2522]"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#D4C5A9]">
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#EDE7DC]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#EDE7DC]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="font-medium text-sm">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#D4C5A9] px-6 py-6 bg-white">
              <div className="flex justify-between mb-4 text-sm">
                <span>SUBTOTAL</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[#8B7355] mb-4">Shipping calculated at checkout</p>
              <button
                onClick={() => alert('Checkout would be implemented here')}
                className="w-full py-4 bg-[#8B7355] text-white text-sm tracking-[2px] hover:bg-[#6B553F] transition-colors mb-3"
              >
                CHECKOUT
              </button>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-sm text-[#8B7355] hover:text-[#2C2522]"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
