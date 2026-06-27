import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cart, onRemove, onUpdateQuantity, total }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        className={`overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#E5DFD3] flex items-center justify-between">
          <div className="serif text-xl tracking-[0.15em]">Your Cart</div>
          <button onClick={onClose} className="p-2">
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] px-6 text-center">
            <p className="text-[#6B665F] mb-6">Your cart is empty</p>
            <Link 
              to="/shop" 
              onClick={onClose}
              className="btn btn-gold"
            >
              Shop the Collection
            </Link>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1 overflow-auto">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
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
                        <div className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</div>
                        <div className="text-xs text-[#6B665F] mt-0.5">{item.variant}</div>
                      </div>
                      <button onClick={() => onRemove(index)} className="text-[#6B665F] hover:text-[#2C2825]">
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5DFD3]">
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="p-1.5 hover:bg-[#F5F2ED]"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="price text-sm">${(item.price * item.quantity).toFixed(0)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5DFD3] bg-[#F8F5F1]">
              <div className="flex justify-between mb-6 text-sm">
                <span>Subtotal</span>
                <span className="price">${total}</span>
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
