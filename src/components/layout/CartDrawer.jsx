import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-cream z-50 shadow-2xl flex flex-col animate-slide-in-right"
        role="dialog"
        aria-label="Shopping bag"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-divider">
          <h2 className="font-serif text-xl text-velmora-charcoal">Your Bag</h2>
          <button onClick={closeCart} className="text-velmora-muted hover:text-velmora-charcoal transition-colors" aria-label="Close shopping bag">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-velmora-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-muted font-sans mb-6">Discover something you love.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-block px-8 py-3 bg-velmora-gold text-white text-xs font-sans font-semibold tracking-product uppercase hover:bg-velmora-gold-hover transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-velmora-divider/50 flex-shrink-0 overflow-hidden">
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

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm uppercase tracking-product text-velmora-charcoal truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-velmora-muted font-sans mt-1">
                      {item.tone} tone
                    </p>
                    <p className="text-sm font-sans font-medium text-velmora-charcoal mt-2">
                      ${item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 border border-velmora-divider flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-velmora-charcoal w-4 text-center" aria-label={`Quantity: ${item.quantity}`}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 border border-velmora-divider flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-velmora-muted hover:text-velmora-charcoal font-sans underline transition-colors"
                        aria-label={`Remove ${item.name} from bag`}
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
          <div className="border-t border-velmora-divider px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-velmora-muted">Subtotal</span>
              <span className="text-lg font-serif text-velmora-charcoal">${totalPrice}</span>
            </div>
            <p className="text-xs text-velmora-muted font-sans mb-4">Shipping calculated at checkout.</p>
            <button className="w-full py-3 bg-velmora-gold text-white text-xs font-sans font-semibold tracking-product uppercase hover:bg-velmora-gold-hover transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
