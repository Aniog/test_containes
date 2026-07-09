import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from './cart-context.jsx';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <>
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={closeDrawer}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md bg-white h-full animate-slide-in-right shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
              <h2 className="font-serif text-xl tracking-wider">SHOPPING BAG</h2>
              <button onClick={closeDrawer} className="p-1 hover:opacity-70 transition-opacity">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-stone mb-4" />
                <p className="text-velmora-slate text-sm">Your bag is empty.</p>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 animate-fade-in">
                    <div className="w-20 h-20 bg-velmora-sand flex-shrink-0">
                      <img
                        data-strk-img-id={`cart-${item.id}-${item.variant}`}
                        data-strk-img={`[cart-title-${item.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <span id={`cart-title-${item.id}`} className="hidden">{item.name}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm tracking-wider text-velmora-charcoal uppercase">{item.name}</p>
                      <p className="text-xs text-velmora-stone mt-0.5">{item.variant === 'gold' ? 'Gold Tone' : 'Silver Tone'}</p>
                      <p className="text-sm text-velmora-gold mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-border text-velmora-slate hover:border-velmora-charcoal transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center border border-velmora-border text-velmora-slate hover:border-velmora-charcoal transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-xs text-velmora-stone underline hover:text-velmora-charcoal transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-velmora-border px-6 py-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-velmora-slate">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-velmora-stone">Shipping & taxes calculated at checkout</p>
                <button className="btn-primary w-full">Checkout</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
