import React from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, itemCount, subtotal, removeItem, updateQuantity } = useCart();

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-[#FAFAF8] shadow-2xl animate-slide-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-4 h-4 text-velmora-gold" />
            <h2 className="font-serif text-lg tracking-widest uppercase">Your Bag</h2>
            {itemCount > 0 && (
              <span className="text-xs text-velmora-taupe">({itemCount})</span>
            )}
          </div>
          <button onClick={onClose} className="text-velmora-dark hover:text-velmora-gold transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
              <p className="font-serif text-lg text-velmora-dark">Your bag is empty</p>
              <p className="text-sm text-velmora-taupe mt-1 mb-6">Add something beautiful to get started.</p>
              <Link
                to="/shop"
                onClick={onClose}
                className="px-8 py-3 bg-velmora-dark text-white text-sm tracking-widest uppercase hover:bg-velmora-gold transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item, idx) => (
                <div key={`${item.productId}-${item.variant}-${idx}`} className="flex gap-4 pb-5 border-b border-velmora-border">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 flex-shrink-0 bg-velmora-sand rounded-sm overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-velmora-gold-light/40 to-velmora-gold/20 flex items-center justify-center">
                      <ShoppingBag className="w-5 h-5 text-velmora-gold/50" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-serif text-sm uppercase tracking-widest text-velmora-dark">{item.name}</p>
                        <p className="text-xs text-velmora-taupe mt-0.5">{item.variant}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.variant)}
                        className="text-velmora-taupe hover:text-velmora-rose transition-colors ml-2"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-velmora-border">
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-xs font-medium tabular-nums">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          className="p-1.5 hover:text-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-serif text-sm text-velmora-dark">${(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-velmora-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-velmora-taupe">Subtotal</span>
              <span className="font-serif text-lg text-velmora-dark">${subtotal.toFixed(0)}</span>
            </div>
            <p className="text-[11px] text-velmora-taupe text-center">Shipping & taxes calculated at checkout</p>
            <button className="w-full py-3.5 bg-velmora-dark text-white text-xs tracking-widest uppercase hover:bg-velmora-gold transition-colors duration-300">
              Checkout — ${subtotal.toFixed(0)}
            </button>
            <button
              onClick={onClose}
              className="w-full text-xs tracking-widest uppercase text-velmora-taupe hover:text-velmora-dark transition-colors underline underline-offset-4"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
