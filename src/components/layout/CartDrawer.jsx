import React from 'react';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-velmora-overlay z-50 overlay-enter"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-velmora-white z-50 shadow-2xl flex flex-col cart-drawer-enter">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <h2 className="font-serif text-lg tracking-wide">Your Bag ({itemCount})</h2>
          <button onClick={closeCart} className="p-1 text-velmora-muted hover:text-velmora-text transition-colors duration-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
              <p className="font-serif text-lg text-velmora-text mb-2">Your bag is empty</p>
              <p className="text-sm text-velmora-muted">Discover our collection and find something you love.</p>
              <button
                onClick={closeCart}
                className="mt-6 px-8 py-3 bg-velmora-gold text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-gold-dark transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.tone}`} className="flex gap-4">
                  <div className="w-20 h-24 bg-velmora-warm flex-shrink-0">
                    <img
                      data-strk-img-id={`cart-${item.imgId}-${item.tone}`}
                      data-strk-img={`[${item.descId}] [${item.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm tracking-[0.1em] uppercase truncate">{item.name}</h3>
                    <p className="text-xs text-velmora-muted mt-1 capitalize">{item.tone} tone</p>
                    <p className="text-sm font-medium mt-2">${item.price}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity - 1)}
                        className="w-7 h-7 border border-velmora-border flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.tone, item.quantity + 1)}
                        className="w-7 h-7 border border-velmora-border flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors duration-200"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.tone)}
                        className="ml-auto text-xs text-velmora-muted hover:text-velmora-text underline transition-colors duration-200"
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
          <div className="border-t border-velmora-border px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-velmora-muted">Subtotal</span>
              <span className="font-serif text-lg">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-velmora-muted mb-4">Shipping and taxes calculated at checkout.</p>
            <button className="w-full py-3.5 bg-velmora-gold text-white text-xs tracking-[0.15em] uppercase font-medium hover:bg-velmora-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-velmora-gold/20">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
