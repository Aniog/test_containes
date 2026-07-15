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
        className={`overlay ${isCartOpen ? 'open' : ''}`} 
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#E5E0D8] flex items-center justify-between">
          <div className="font-serif text-xl">Your Cart</div>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="p-6 text-center text-[#6B6560]">
            <p className="mb-4">Your cart is empty</p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-outline text-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F3EF] flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-wider">{item.name}</div>
                        <div className="text-xs text-[#6B6560] mt-1">{item.selectedVariant}</div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B6560] hover:text-[#2C2825]"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E0D8]">
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
                      <div className="font-medium">${(item.price * item.cartQuantity).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5E0D8] mt-auto">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-accent w-full mb-3">
                Proceed to Checkout
              </button>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline w-full text-sm"
              >
                Continue Shopping
              </button>
              <p className="text-center text-xs text-[#6B6560] mt-4 tracking-wide">
                Free worldwide shipping • 30-day returns
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;