import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-deep/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
      />
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-light">
          <h2 className="font-serif text-lg tracking-widest uppercase">Your Bag</h2>
          <button onClick={closeCart} className="p-1 hover:text-accent-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-text-secondary">
              <p className="font-sans text-sm uppercase tracking-widest mb-2">Your bag is empty</p>
              <p className="text-xs">Add something beautiful</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-deep/5 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image_url || item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-widest uppercase truncate">{item.name}</p>
                    <p className="text-xs text-text-secondary mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="font-sans text-sm mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-border-light flex items-center justify-center hover:border-accent-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-border-light flex items-center justify-center hover:border-accent-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto p-1 text-text-secondary hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
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
          <div className="border-t border-border-light px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-sm uppercase tracking-widest">Subtotal</span>
              <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-text-secondary">Shipping & taxes calculated at checkout</p>
            <button className="w-full bg-accent-gold text-deep font-sans text-xs uppercase tracking-widest py-4 hover:bg-accent-gold-hover transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full border border-text-primary text-text-primary font-sans text-xs uppercase tracking-widest py-3 hover:bg-text-primary hover:text-cream transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
