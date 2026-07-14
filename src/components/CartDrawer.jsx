import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

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
        <div className="p-6 border-b border-[#D4C9B8] flex items-center justify-between">
          <h3 className="serif text-xl tracking-[0.05em]">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <p className="text-[#6B665F] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 p-6 space-y-6 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F8F5F1] flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B665F] hover:text-[#2C2823]"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#D4C9B8]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F8F5F1]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#D4C9B8] bg-[#F8F5F1]">
              <div className="flex justify-between mb-6 text-sm tracking-[0.05em]">
                <span>TOTAL</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">
                CHECKOUT
              </button>
              <p className="text-center text-xs text-[#6B665F]">
                Shipping calculated at checkout
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;