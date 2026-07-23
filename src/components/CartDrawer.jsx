import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setCartOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-stone-200">
          <h2 className="font-serif text-xl tracking-wider">YOUR CART</h2>
          <button onClick={() => setCartOpen(false)} className="text-stone-500 hover:text-stone-800">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-stone-300 mb-4" />
              <p className="text-stone-500 mb-6">Your cart is empty</p>
              <button
                onClick={() => setCartOpen(false)}
                className="bg-stone-900 text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-stone-100 rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-sm tracking-wider">{item.name}</h3>
                    <p className="text-xs text-stone-500 mt-1 capitalize">{item.variant}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-stone-200 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-stone-500 hover:text-stone-800"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-stone-500 hover:text-stone-800"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="text-xs text-stone-400 hover:text-red-600 underline"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="text-sm mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-stone-200 p-6 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-stone-600">Subtotal</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-stone-500">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-stone-900 text-white py-4 text-sm tracking-widest uppercase hover:bg-stone-800 transition-colors">
              Checkout
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full border border-stone-300 text-stone-800 py-3 text-sm tracking-widest uppercase hover:bg-stone-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
