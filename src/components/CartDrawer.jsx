import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/utils';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD6]">
            <h3 className="heading-serif text-xl">Your Cart</h3>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-[#C5A46E] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-[#F5F2ED] flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-wider">{item.name}</p>
                          <p className="text-xs text-[#6B665F] mt-0.5">{item.variant.label} Tone</p>
                        </div>
                        <p className="text-sm font-medium">{formatPrice(item.price)}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#E5DFD6]">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-[#F5F2ED] transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-[#F5F2ED] transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#6B665F] hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="border-t border-[#E5DFD6] px-6 py-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6B665F]">Subtotal</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-xs text-[#6B665F]">Shipping calculated at checkout</p>
                
                <button className="btn btn-primary w-full">
                  Proceed to Checkout
                </button>
                
                <Link 
                  to="/shop" 
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center text-sm text-[#6B665F] hover:text-[#C5A46E] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <ShoppingBagEmpty />
              <p className="mt-4 text-[#6B665F]">Your cart is empty</p>
              <Link 
                to="/shop" 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 btn btn-outline"
              >
                Browse Collection
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const ShoppingBagEmpty = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5A46E" strokeWidth="1.5">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export default CartDrawer;
