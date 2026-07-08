import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, removeFromCart, updateQuantity, total }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={onClose}
        />
      )}
      
      {/* Drawer */}
      <div className={`cart-drawer fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[60] shadow-2xl flex flex-col ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5DFD3]">
          <div className="font-serif text-xl tracking-[0.1em]">YOUR CART</div>
          <button onClick={onClose} className="p-2 hover:text-[#B89778] transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F5F2EB] flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="product-name text-sm tracking-wider pr-6">{item.name}</div>
                    <div className="text-xs text-[#6B665F] mt-0.5">{item.variant} tone</div>
                    <div className="text-sm mt-1">${item.price}</div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
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
                      <button 
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-xs text-[#6B665F] hover:text-[#2C2825]"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-[#E5DFD3] p-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span>SUBTOTAL</span>
                <span className="font-medium">${total}</span>
              </div>
              <div className="text-xs text-[#6B665F] tracking-wide">Shipping calculated at checkout</div>
              <button className="btn-primary w-full">CHECKOUT</button>
              <button 
                onClick={onClose}
                className="w-full text-sm tracking-[0.05em] py-3 hover:text-[#B89778] transition-colors"
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-[#E5DFD3] mb-4" />
            <div className="font-serif text-xl mb-2">Your cart is empty</div>
            <p className="text-sm text-[#6B665F] mb-8">Discover our collection of fine jewelry</p>
            <button onClick={onClose} className="btn-outline">BROWSE COLLECTION</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;