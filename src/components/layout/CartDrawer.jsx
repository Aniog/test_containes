import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button onClick={closeCart} className="p-1 text-brand-muted hover:text-brand-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-brand-muted font-sans text-sm">Your bag is empty</p>
              <button
                onClick={closeCart}
                className="mt-4 btn-outline text-xs"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-ivory rounded flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.imgId}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm font-semibold text-brand-charcoal truncate">{item.name}</h3>
                    <p className="text-xs text-brand-muted font-sans mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-charcoal font-sans underline transition-colors"
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
          <div className="border-t border-brand-sand px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-brand-muted">Subtotal</span>
              <span className="text-lg font-serif font-semibold text-brand-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-brand-muted font-sans mb-4">Shipping calculated at checkout</p>
            <button className="w-full btn-gold py-4">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
