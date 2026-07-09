import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../../context/CartContext';
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
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-[#E5E0D8]">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-[#6B665F]">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
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
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F8F5F1] flex-shrink-0">
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
                        <p className="text-xs text-[#6B665F] mt-0.5">{item.selectedVariant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#6B665F] hover:text-[#2C2823]"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E0D8]">
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
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5E0D8]">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">
                Checkout
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