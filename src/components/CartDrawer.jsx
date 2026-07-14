import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={closeCart}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E5DFD6]">
            <h3 className="serif text-xl">Your Cart</h3>
            <button onClick={closeCart} className="text-[#6B6058]">
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <p className="text-[#6B6058] mb-4">Your cart is empty</p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn btn-outline text-sm"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto p-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.cartId} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F0EBE3] flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-widest">{item.name}</p>
                          <p className="text-xs text-[#6B6058] mt-0.5">{item.selectedVariant}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.cartId)}
                          className="text-[#6B6058] hover:text-[#2C2522]"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-sm mt-1">${item.price}</p>
                      
                      <div className="flex items-center gap-3 mt-3">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-[#E5DFD6]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-[#E5DFD6]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[#E5DFD6]">
                <div className="flex justify-between mb-6">
                  <span className="text-sm tracking-widest">TOTAL</span>
                  <span className="font-medium">${getCartTotal()}</span>
                </div>
                <button className="btn btn-primary w-full mb-3">
                  CHECKOUT
                </button>
                <p className="text-center text-xs text-[#6B6058]">
                  Shipping calculated at checkout
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;