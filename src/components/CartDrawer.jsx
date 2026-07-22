import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, total }) => {
  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h2 className="serif text-xl tracking-[0.1em]">Your Cart</h2>
          <button onClick={onClose} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <p className="text-[#8A847D] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={onClose}
              className="btn btn-accent"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1 overflow-auto">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F0EDE6] flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-[0.1em] pr-2">{item.name}</p>
                        <p className="text-xs text-[#8A847D] mt-0.5">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-[#8A847D] hover:text-[#2C2825]"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F8F6F3]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F8F6F3]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-medium">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t mt-auto">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">${total}</span>
              </div>
              <button className="btn btn-accent w-full mb-3">
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-[#8A847D]">
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