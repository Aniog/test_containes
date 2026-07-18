import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <span className="uppercase tracking-[0.15em] text-sm">Your Cart</span>
          <button onClick={closeCart} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <p className="text-[#6B665F] mb-4">Your cart is empty</p>
            <button onClick={closeCart} className="btn-outline text-sm">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
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
                    <div className="product-name text-xs tracking-[0.1em] pr-6 mb-1">
                      {item.name}
                    </div>
                    <div className="text-xs text-[#6B665F] mb-2">
                      {item.selectedVariant} · ${item.price}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F1EA]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F1EA]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-[#6B665F] hover:text-[#2C2823]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    ${(item.price * item.quantity).toFixed(0)}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t bg-[#F8F5F1]">
              <div className="flex justify-between mb-6 text-sm">
                <span className="uppercase tracking-[0.1em]">Total</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="btn-gold w-full mb-3">
                Proceed to Checkout
              </button>
              <button 
                onClick={closeCart}
                className="w-full text-xs tracking-[0.1em] uppercase py-3 text-[#6B665F]"
              >
                Continue Shopping
              </button>
              <p className="text-center text-[10px] text-[#A39B8F] mt-4 tracking-[0.05em]">
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
