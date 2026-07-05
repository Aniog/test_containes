import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
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
        className="overlay open" 
        onClick={() => setIsCartOpen(false)}
      />
      
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#E5DDD3] flex items-center justify-between">
          <div>
            <div className="serif text-xl tracking-[0.15em]">YOUR CART</div>
            <div className="text-xs text-[#8A7F75] mt-0.5">{cart.length} ITEMS</div>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <p className="text-[#8A7F75] mb-6">Your cart is empty</p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="btn btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y divide-[#E5DDD3]">
              {cart.map((item) => (
                <div key={item.cartId} className="p-6 flex gap-4">
                  <div className="w-20 h-20 bg-[#F4EDE4] flex-shrink-0">
                    <img 
                      src={item.images[item.selectedVariant.toLowerCase()]?.primary || item.images.gold.primary} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-xs tracking-[0.1em] pr-4">{item.name}</div>
                        <div className="text-xs text-[#8A7F75] mt-0.5">{item.selectedVariant}</div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#8A7F75] hover:text-[#2C2522]"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-[#E5DDD3]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F4EDE4]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F4EDE4]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="font-medium">${item.price * item.quantity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DDD3] mt-auto sticky bottom-0 bg-white">
              <div className="flex justify-between mb-6 text-sm">
                <span>SUBTOTAL</span>
                <span className="font-medium">${cartTotal}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">
                CHECKOUT
              </button>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="block text-center text-xs tracking-[0.1em] text-[#8A7F75] hover:text-[#2C2522]"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;