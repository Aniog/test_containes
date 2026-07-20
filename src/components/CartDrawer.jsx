import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-velmora-deep/40 z-[60] transition-opacity duration-300"
        onClick={closeCart}
      />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-offwhite z-[70] flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
          <h2 className="font-serif text-xl text-velmora-deep">Your Cart</h2>
          <button onClick={closeCart} aria-label="Close cart" className="hover:opacity-60 transition-opacity">
            <X className="w-5 h-5 text-velmora-deep" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag className="w-12 h-12 text-velmora-linen" strokeWidth={1} />
              <p className="font-serif text-lg text-velmora-warmgray">Your cart is empty</p>
              <p className="text-sm text-velmora-lightgray">Add something beautiful to get started.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-velmora-ivory flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] font-sans uppercase tracking-wider text-velmora-lightgray">
                      {item.name.split(' ').map(w => w[0]).join('').slice(0, 3)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm uppercase tracking-wider text-velmora-deep truncate">
                      {item.name}
                    </p>
                    {item.variant && (
                      <p className="text-xs text-velmora-lightgray mt-0.5">{item.variant}</p>
                    )}
                    <p className="text-sm text-velmora-warmgray mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 border border-velmora-sand flex items-center justify-center hover:bg-velmora-ivory transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 border border-velmora-sand flex items-center justify-center hover:bg-velmora-ivory transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="ml-auto text-xs text-velmora-lightgray underline hover:text-velmora-deep transition-colors"
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

        {items.length > 0 && (
          <div className="border-t border-velmora-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-velmora-warmgray">Subtotal</span>
              <span className="font-serif text-lg text-velmora-deep">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-lightgray mb-4">Shipping & taxes calculated at checkout.</p>
            <button className="w-full bg-velmora-bronze text-white text-[13px] font-sans uppercase tracking-[0.1em] py-3.5 hover:bg-velmora-gold transition-colors duration-300">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-3 border border-velmora-deep text-velmora-deep text-[13px] font-sans uppercase tracking-[0.1em] py-3.5 hover:bg-velmora-deep hover:text-white transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
