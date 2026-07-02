import React from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cart, onUpdateQuantity, onRemove }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <div 
        className={`cart-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />
      
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[var(--color-border)] flex items-center justify-between">
          <h2 className="text-lg tracking-[0.1em] uppercase">Your Cart</h2>
          <button onClick={onClose} className="p-2 -mr-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <p className="text-[var(--color-text-muted)] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={onClose}
              className="btn btn-primary"
            >
              Shop Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-[var(--color-bg)] flex-shrink-0">
                    <img 
                      src={item.images.primary} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="product-name text-sm pr-2">{item.name}</h4>
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.variant}</p>
                      </div>
                      <button 
                        onClick={() => onRemove(index)}
                        className="text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[var(--color-border)]">
                        <button 
                          onClick={() => onUpdateQuantity(index, Math.max(1, item.quantity - 1))}
                          className="p-1.5 hover:bg-[var(--color-bg)]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-[var(--color-bg)]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-sm font-medium">${item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
              <div className="flex justify-between mb-6 text-sm tracking-[0.05em]">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] mb-4 text-center">
                Shipping calculated at checkout
              </p>
              <button className="btn btn-primary w-full mb-3">
                Checkout
              </button>
              <Link 
                to="/shop" 
                onClick={onClose}
                className="btn btn-outline w-full text-xs"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;