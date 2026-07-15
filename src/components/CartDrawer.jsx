import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
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
      <div 
        className="fixed inset-0 bg-black/40 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="serif text-xl">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-[#6B6763]">
            Your cart is empty
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F8F6F3] flex-shrink-0">
                    <img 
                      src={item.images.primary} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-wider">{item.name}</p>
                        <p className="text-xs text-[#6B6763] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)}>
                        <X size={16} className="text-[#6B6763]" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E1DB]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity - 1)}
                          className="p-1.5 hover:bg-[#F8F6F3]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.cartQuantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.cartQuantity + 1)}
                          className="p-1.5 hover:bg-[#F8F6F3]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm">${(item.price * item.cartQuantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t">
              <div className="flex justify-between mb-6 text-sm">
                <span>Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-full">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#6B6763] mt-4 tracking-wide">
                Free worldwide shipping on orders over $75
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;