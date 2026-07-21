import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

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
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-[90]"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#D4C9B8]">
            <span className="text-sm tracking-[0.1em] uppercase">Your Cart</span>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4 py-4 border-b border-[#D4C9B8]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="flex-1 text-sm">
                      <div className="font-medium tracking-[0.05em]">{item.name}</div>
                      <div className="text-[#6B655C] mt-0.5">{item.selectedVariant}</div>
                      <div className="mt-1">${item.price}</div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#D4C9B8]">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#F8F5F1]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-xs">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#F8F5F1]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-xs text-[#6B655C] hover:text-[#2C2823]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[#D4C9B8]">
                <div className="flex justify-between text-sm mb-4">
                  <span>Subtotal</span>
                  <span className="font-medium">${cartTotal}</span>
                </div>
                <button className="btn btn-primary w-full mb-3">
                  Checkout
                </button>
                <p className="text-center text-xs text-[#6B655C]">
                  Shipping calculated at checkout
                </p>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-[#D4C9B8] mb-4" />
              <p className="text-sm text-[#6B655C]">Your cart is empty</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline mt-6"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;