import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />
      )}

      {/* Drawer */}
      <div className={`cart-drawer fixed top-0 right-0 bottom-0 w-full md:w-96 bg-white z-50 flex flex-col ${isOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5DFD3]">
          <div className="serif text-xl tracking-[0.15em]">Your Cart</div>
          <button onClick={onClose} className="p-2 hover:text-[#8B7355]">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="text-[#8A8178] mb-4">Your cart is empty</div>
            <button onClick={onClose} className="btn btn-outline text-sm">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="product-name text-sm tracking-wider pr-6">{item.name}</div>
                    <div className="text-sm text-[#8A8178] mt-1">{item.variant}</div>
                    <div className="text-sm mt-1">${item.price}</div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)} className="p-1.5 hover:bg-[#F8F5F1]">
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="p-1.5 hover:bg-[#F8F5F1]">
                          <Plus size={14} />
                        </button>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-[#8A8178] hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[#E5DFD3]">
              <div className="flex justify-between mb-6 text-lg">
                <span>Total</span>
                <span className="font-medium">${total}</span>
              </div>
              <button className="btn btn-primary w-full mb-3">Checkout</button>
              <button onClick={onClose} className="btn btn-outline w-full text-sm">Continue Shopping</button>
              <p className="text-center text-xs text-[#8A8178] mt-4">Free worldwide shipping on orders over $75</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;