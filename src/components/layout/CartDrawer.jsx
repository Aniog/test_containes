import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E2DB]">
          <h2 className="serif-heading text-xl tracking-wide">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:text-[#B8860B] transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <p className="serif-heading text-2xl text-[#6B6560] mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-[#E8E2DB]">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 px-6 py-5">
                  <div className="w-20 h-24 bg-[#F5F0EB] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm text-[#1A1A1A] truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6B6560] mt-1 capitalize">
                      {item.variant} tone
                    </p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 border border-[#E8E2DB] flex items-center justify-center hover:border-[#B8860B] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 border border-[#E8E2DB] flex items-center justify-center hover:border-[#B8860B] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-[#6B6560] underline hover:text-[#B8860B] transition-colors"
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
          <div className="border-t border-[#E8E2DB] px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[#6B6560]">Subtotal</span>
              <span className="serif-heading text-xl">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[#6B6560] mb-4">Shipping & taxes calculated at checkout</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-3 text-sm text-[#6B6560] underline hover:text-[#B8860B] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
