import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-2xl font-light tracking-wide">Your Cart</h2>
          <button onClick={closeCart} className="p-1 hover:opacity-60 transition-opacity">
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-12 h-12 text-muted mb-4" strokeWidth={1} />
            <p className="font-serif text-xl mb-2">Your cart is empty</p>
            <p className="text-muted text-sm mb-6">Discover something beautiful to add.</p>
            <button
              onClick={() => { closeCart(); navigate('/shop'); }}
              className="bg-accent text-white px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-accent-hover transition-colors"
            >
              Shop Now
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-20 h-24 object-cover bg-surface-muted"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base leading-tight truncate">{item.name}</p>
                    <p className="text-muted text-xs mt-0.5">{item.variant}</p>
                    <p className="text-sm mt-1">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="self-start p-1 text-muted hover:text-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Subtotal ({totalItems} items)</span>
                <span className="font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted">Shipping & taxes calculated at checkout.</p>
              <button className="w-full bg-accent text-white py-3.5 text-sm font-medium tracking-wider uppercase hover:bg-accent-hover transition-colors">
                Checkout
              </button>
              <button
                onClick={() => { closeCart(); navigate('/shop'); }}
                className="w-full border border-foreground text-foreground py-3.5 text-sm font-medium tracking-wider uppercase hover:bg-foreground hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
