import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
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
          <div className="flex items-center justify-between p-6 border-b border-[#E5DFD6]">
            <h3 className="text-lg tracking-[0.1em] uppercase">Your Cart</h3>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-[#6B635E] mb-4">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-sm"
              >
                Browse Collection
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F0EBE3] flex-shrink-0">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-wider pr-2">{item.name}</p>
                          <p className="text-xs text-[#6B635E] mt-0.5">{item.selectedVariant}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[#6B635E] hover:text-[#2C2522]"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E5DFD6]">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                            className="p-1.5 hover:bg-[#F0EBE3]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.cartQuantity}</span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                            className="p-1.5 hover:bg-[#F0EBE3]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-medium">${(item.price * item.cartQuantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[#E5DFD6] space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Total</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-[#6B635E] text-center">Shipping calculated at checkout</p>
                <button className="btn w-full">Proceed to Checkout</button>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center text-sm tracking-[0.05em] uppercase hover:text-[#8B7355]"
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