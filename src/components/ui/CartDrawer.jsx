import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <span className="text-lg serif">Your Cart</span>
            </div>
            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag className="w-12 h-12 text-gray-300 mb-4" />
              <p className="text-lg text-gray-500">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline mt-6"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4 py-4 border-b">
                    <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                      <img 
                        src={item.images[item.selectedVariant]?.primary} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-wider">{item.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5 capitalize">{item.selectedVariant} tone</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border">
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="p-1.5 hover:bg-gray-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="p-1.5 hover:bg-gray-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t px-6 py-6 bg-gray-50">
                <div className="flex justify-between mb-4 text-lg">
                  <span>Total</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">Shipping calculated at checkout</p>
                <button className="btn btn-primary w-full mb-3">
                  Proceed to Checkout
                </button>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="btn btn-outline w-full"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;