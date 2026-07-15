import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {isCartOpen && <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setIsCartOpen(false)} />}
      
      <div className={`cart-drawer fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F5F3EF] z-[60] flex flex-col ${isCartOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between px-6 h-20 border-b border-[#E5E2DC]">
          <span className="font-serif text-xl tracking-[0.1em]">Your Cart</span>
          <button onClick={() => setIsCartOpen(false)}><X size={20} /></button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-[#8B8178] mb-6">Your cart is empty</p>
            <Link to="/shop" onClick={() => setIsCartOpen(false)} className="btn-primary">Shop Collection</Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto px-6 py-6 space-y-6">
              {cart.map(item => (
                <div key={item.cartId} className="flex gap-4">
                  <div className="w-20 h-20 bg-[#F0EDE7] flex-shrink-0">
                    <img src={item.image1} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="product-name text-sm tracking-[0.1em] pr-2">{item.name}</div>
                        <div className="text-xs text-[#8B8178] mt-0.5">{item.variant}</div>
                      </div>
                      <button onClick={() => removeFromCart(item.cartId)} className="text-[#8B8178] hover:text-[#1C1C1C]"><X size={14} /></button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#E5E2DC]">
                        <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="p-1.5"><Minus size={14} /></button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="p-1.5"><Plus size={14} /></button>
                      </div>
                      <div className="text-sm font-medium">${(item.price * item.quantity).toFixed(0)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-[#E5E2DC] bg-white">
              <div className="flex justify-between mb-6 text-sm">
                <span>Total</span>
                <span className="font-medium">${cartTotal.toFixed(0)}</span>
              </div>
              <button className="btn-primary w-full mb-3">Checkout</button>
              <Link to="/shop" onClick={() => setIsCartOpen(false)} className="block text-center text-sm text-[#8B8178] hover:text-[#1C1C1C]">Continue Shopping</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;