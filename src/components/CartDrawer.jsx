import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/40 z-50" onClick={onClose} />}
      <div className={`cart-drawer fixed top-0 right-0 h-full w-full md:w-[420px] bg-white z-[60] p-8 overflow-y-auto ${isOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center mb-8">
          <div className="font-serif text-xl tracking-[0.15em]">YOUR CART</div>
          <button onClick={onClose}><X size={20} /></button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#8B7E6F] mb-6">Your cart is empty</p>
            <Link to="/shop" onClick={onClose} className="btn-primary inline-block">SHOP COLLECTION</Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4 pb-6 border-b border-[#E5E0D8]">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  <div className="flex-1 text-sm">
                    <div className="product-name tracking-[0.1em] mb-1 pr-6">{item.name}</div>
                    <div className="text-[#8B7E6F] mb-3">{item.variant} · ${item.price}</div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[#E5E0D8]">
                        <button onClick={() => updateQuantity(index, Math.max(1, item.quantity - 1))} className="p-1.5"><Minus size={14} /></button>
                        <span className="px-3 text-xs">{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)} className="p-1.5"><Plus size={14} /></button>
                      </div>
                      <button onClick={() => removeFromCart(index)} className="text-xs text-[#8B7E6F] hover:text-[#1C1C1C]">REMOVE</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5E0D8]">
              <div className="flex justify-between text-sm mb-6">
                <span>SUBTOTAL</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <button className="btn-primary w-full mb-3">CHECKOUT</button>
              <p className="text-center text-xs text-[#8B7E6F]">Shipping calculated at checkout</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;