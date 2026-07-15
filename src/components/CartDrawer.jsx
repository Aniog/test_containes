import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      <div className={`overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)} />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="p-6 border-b border-[#E5E0D8] flex items-center justify-between">
          <h3 className="serif text-xl">Your Cart</h3>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart"><X size={20} /></button>
        </div>

        {cart.length === 0 ? (
          <div className="p-6 text-center text-[#6B665E]">
            <p className="mb-4">Your cart is empty</p>
            <button onClick={() => setIsCartOpen(false)} className="btn-accent-outline">Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="p-6 space-y-6 flex-1">
              {cart.map((item) => (
                <div key={item.cartId} className="flex gap-4">
                  <img src={item.images.primary} alt={item.name} className="w-20 h-20 object-cover" />
                  <div className="flex-1 text-sm">
                    <p className="product-name text-xs mb-1">{item.name}</p>
                    <p className="text-[#6B665E]">{item.selectedVariant} tone · ${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)} className="p-1"><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)} className="p-1"><Plus size={14} /></button>
                      <button onClick={() => removeFromCart(item.cartId)} className="ml-auto text-xs underline">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-[#E5E0D8]">
              <div className="flex justify-between mb-6 text-sm tracking-wider">
                <span>TOTAL</span>
                <span>${cartTotal}</span>
              </div>
              <button className="btn-primary w-full mb-3">CHECKOUT</button>
              <p className="text-center text-xs text-[#6B665E]">Shipping calculated at checkout</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
