import React, { useEffect } from 'react';
import { useCart } from '@/context/CartContext.jsx';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-velmora-cream z-50 flex flex-col animate-slide-in shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-linen">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velmora-charcoal" />
            <h2 className="font-serif text-xl text-velmora-charcoal tracking-wide">
              Your Bag ({totalItems})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-velmora-parchment rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-velmora-charcoal" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
              <p className="font-serif text-lg text-velmora-charcoal mb-1">Your bag is empty</p>
              <p className="text-sm text-velmora-stone">Explore our collection and find something beautiful.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-24 bg-velmora-parchment flex-shrink-0 overflow-hidden rounded-sm flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-velmora-sand" />
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-sans text-xs font-medium tracking-widest-lg uppercase text-velmora-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-stone mt-0.5 capitalize">{item.tone} tone</p>
                    <p className="text-sm font-medium text-velmora-charcoal mt-1.5">
                      ${item.price}
                    </p>
                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-sand rounded-full hover:border-velmora-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-sand rounded-full hover:border-velmora-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id, item.tone)}
                        className="ml-auto p-1.5 text-velmora-taupe hover:text-red-500 transition-colors"
                        aria-label="Remove item"
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
          <div className="border-t border-velmora-linen px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-velmora-stone">Subtotal</span>
              <span className="font-sans text-lg font-medium text-velmora-charcoal">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-velmora-taupe">Shipping and taxes calculated at checkout.</p>
            <button className="btn-primary w-full">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="btn-outline w-full"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}