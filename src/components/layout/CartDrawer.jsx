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
        className="fixed inset-0 z-50 bg-black/40 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-brand-cream shadow-2xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-xl tracking-wide text-brand-charcoal">
            Your Bag
          </h2>
          <button
            onClick={closeCart}
            className="p-1 text-brand-muted hover:text-brand-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-brand-muted">Your bag is empty</p>
              <p className="text-sm text-brand-muted-light mt-2 font-sans">
                Discover our collection of fine jewelry
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-warm rounded flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}-${item.variant}`}
                      data-strk-img={`[${item.name.toLowerCase().replace(/\s+/g, '-')}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-extra-wide uppercase text-brand-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-brand-muted font-sans mt-0.5">{item.variant}</p>
                    <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">
                      ${item.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal min-w-[16px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-gold transition-colors font-sans underline"
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
              <span className="text-lg font-serif text-brand-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-brand-muted font-sans mb-4">
              Shipping & taxes calculated at checkout
            </p>
            <button className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white font-sans text-xs tracking-super-wide uppercase py-4 transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
