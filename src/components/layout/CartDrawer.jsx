import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-brand-cream z-50 shadow-2xl flex flex-col animate-slide-left">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
          <h2 className="font-serif text-lg tracking-wide text-brand-charcoal">
            Your Bag ({items.length})
          </h2>
          <button onClick={closeCart} className="p-1 text-brand-muted hover:text-brand-charcoal transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-brand-muted-light mb-4" />
              <p className="font-serif text-lg text-brand-charcoal mb-2">Your bag is empty</p>
              <p className="text-sm text-brand-muted mb-6">Discover something you love.</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs tracking-extra-wide uppercase font-sans font-medium bg-brand-gold text-white px-8 py-3 hover:bg-brand-gold-dark transition-colors duration-300"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  <div className="w-20 h-24 bg-brand-warm rounded flex-shrink-0 overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.key}`}
                      data-strk-img={`[${item.product.descId}] [${item.product.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1">{item.tone} Tone</p>
                    <p className="text-sm font-sans font-medium text-brand-charcoal mt-2">
                      ${item.product.price}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-brand-charcoal w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-brand-sand text-brand-muted hover:border-brand-gold hover:text-brand-gold transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="ml-auto text-xs text-brand-muted hover:text-brand-charcoal underline font-sans transition-colors"
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
            <p className="text-xs text-brand-muted mb-4 font-sans">Shipping calculated at checkout.</p>
            <button className="w-full text-xs tracking-extra-wide uppercase font-sans font-medium bg-brand-gold text-white py-3.5 hover:bg-brand-gold-dark transition-colors duration-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
