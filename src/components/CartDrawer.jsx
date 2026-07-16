import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, updateCartItem, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      <div className={`cart-drawer fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 overflow-y-auto ${isOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl">Your Cart</h2>
            <button onClick={onClose} className="p-2">
              <X size={20} />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <button onClick={onClose} className="btn btn-primary">
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-6 border-b border-border">
                    <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <p className="product-name text-sm tracking-wider">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.variant}</p>
                        </div>
                        <button onClick={() => removeFromCart(index)} className="text-muted-foreground hover:text-text">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="mt-1 text-sm">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button 
                          onClick={() => updateCartItem(index, Math.max(1, item.quantity - 1))}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateCartItem(index, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between mb-6">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${total}</span>
                </div>
                <button className="btn btn-primary w-full mb-3">
                  Proceed to Checkout
                </button>
                <p className="text-xs text-center text-muted-foreground">
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
