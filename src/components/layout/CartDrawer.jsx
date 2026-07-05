import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#faf8f5] shadow-2xl animate-slide-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e8e2db]">
          <h2 className="font-serif text-2xl tracking-wide">YOUR BAG</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:text-[#b8860b] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <ShoppingBag className="w-16 h-16 text-[#e8e2db] mb-4" />
              <p className="font-serif text-xl text-[#6b6560] mb-2">Your bag is empty</p>
              <p className="text-sm text-[#6b6560] mb-6">Discover our collection of demi-fine jewelry</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 bg-[#b8860b] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#9a7209] transition-colors"
              >
                SHOP NOW
              </Link>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-serif text-sm tracking-wider uppercase">{item.name}</h3>
                    <p className="text-xs text-[#6b6560] mt-1 capitalize">{item.variant}</p>
                    <p className="text-sm font-medium mt-2">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 border border-[#e8e2db] flex items-center justify-center hover:border-[#b8860b] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 border border-[#e8e2db] flex items-center justify-center hover:border-[#b8860b] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-[#6b6560] hover:text-[#b8860b] transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#e8e2db] p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm tracking-wide">SUBTOTAL</span>
              <span className="font-serif text-xl">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#6b6560]">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-4 bg-[#1a1a1a] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#333] transition-colors">
              CHECKOUT
            </button>
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="block text-center text-xs tracking-[0.15em] uppercase text-[#6b6560] hover:text-[#b8860b] transition-colors underline"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
