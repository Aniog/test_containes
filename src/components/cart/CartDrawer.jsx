import React from 'react';
import { useCart } from '../../context/CartContext.jsx';

function CartDrawer() {
  const { cartItems, cartCount, cartTotal, removeFromCart, updateQuantity, isCartOpen, closeCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={closeCart}
      ></div>

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-96 bg-white z-50 shadow-xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-['Cormorant_Garamond'] text-2xl">
              Your Cart ({cartCount})
            </h2>
            <button onClick={closeCart} className="text-2xl text-[#2C2C2C] hover:text-[#C9A96E]">
              &times;
            </button>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-20">Your cart is empty</p>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div className="w-20 h-20 bg-[#F5F0EB] flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm tracking-wider uppercase mb-1">{item.name}</h3>
                      <p className="text-[#2C2C2C] font-['Cormorant_Garamond'] text-lg mb-2">
                        ${item.price}.00
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center text-sm hover:border-[#C9A96E]"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border border-gray-300 flex items-center justify-center text-sm hover:border-[#C9A96E]"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-sm text-gray-500 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex justify-between mb-4">
                  <span className="font-['Cormorant_Garamond'] text-xl">Total</span>
                  <span className="font-['Cormorant_Garamond'] text-xl">${cartTotal}.00</span>
                </div>
                <button className="w-full bg-[#2C2C2C] text-white py-3 text-sm tracking-wider uppercase hover:bg-[#C9A96E] transition-colors">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
