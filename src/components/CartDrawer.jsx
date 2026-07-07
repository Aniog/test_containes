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
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 z-[90]"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#e5e0d8]">
            <span className="text-sm tracking-[0.1em] uppercase">Your Cart</span>
            <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-auto px-6 py-4 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#f0ede6] flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <div className="product-name text-xs tracking-[0.1em] pr-4">{item.name}</div>
                          <div className="text-xs text-[#6b635e] mt-0.5">{item.selectedVariant}</div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[#8a8178] hover:text-[#2c2522]"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#e5e0d8]">
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                            className="p-1.5 hover:bg-[#f8f5f1]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.cartQuantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                            className="p-1.5 hover:bg-[#f8f5f1]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-medium">
                          ${(item.price * item.cartQuantity).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#e5e0d8] p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span className="font-medium">${cartTotal}</span>
                </div>
                <p className="text-xs text-[#6b635e]">Shipping calculated at checkout</p>
                <button className="btn-primary w-full">
                  Checkout
                </button>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-xs tracking-[0.08em] uppercase py-3 hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBag size={48} className="text-[#e5e0d8] mb-4" />
              <p className="text-sm text-[#6b635e]">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 btn-outline text-xs"
              >
                Browse Collection
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
