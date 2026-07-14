import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between p-6 border-b border-divider">
          <h3 className="serif text-xl">Your Cart</h3>
          <button onClick={onClose} className="text-charcoal hover:text-gold">
            <X className="w-5 h-5" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center px-6">
            <p className="text-taupe mb-4">Your cart is empty</p>
            <button onClick={onClose} className="btn-outline text-sm">
              CONTINUE SHOPPING
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-soft-gray flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="product-name text-xs tracking-[0.1em]">{item.name}</p>
                        <p className="text-xs text-taupe mt-0.5">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(index)}
                        className="text-taupe hover:text-charcoal"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-divider">
                        <button 
                          onClick={() => onUpdateQuantity(index, Math.max(1, item.quantity - 1))}
                          className="p-1.5 hover:bg-soft-gray"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-soft-gray"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-medium">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-divider bg-cream">
              <div className="flex justify-between mb-4 text-sm">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <p className="text-xs text-taupe mb-4">Shipping calculated at checkout</p>
              <button className="btn-primary w-full mb-3">
                CHECKOUT
              </button>
              <button onClick={onClose} className="btn-outline w-full text-sm">
                CONTINUE SHOPPING
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;