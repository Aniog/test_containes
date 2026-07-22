import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/data/CartContext';

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, totalPrice, isDrawerOpen, closeDrawer } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-50 animate-fade-in"
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-velmora-white z-50 shadow-xl animate-slide-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-sand">
          <h2 className="font-serif text-lg tracking-wide text-velmora-charcoal">YOUR BAG</h2>
          <button onClick={closeDrawer} className="p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-velmora-muted">
              <ShoppingBag className="w-12 h-12 mb-4 text-velmora-muted-light" />
              <p className="font-serif text-lg">Your bag is empty</p>
              <p className="text-sm mt-2">Discover something you love.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.key} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-20 bg-velmora-cream rounded overflow-hidden flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-velmora-gold" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="product-name text-sm font-medium text-velmora-charcoal truncate">{item.name}</h3>
                    <p className="text-xs text-velmora-muted mt-1">Tone: {item.tone === 'gold' ? 'Gold' : 'Silver'}</p>
                    <p className="text-sm font-medium text-velmora-charcoal mt-2">${item.price}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-sand text-velmora-charcoal hover:border-velmora-gold transition-colors rounded-full"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium text-velmora-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-velmora-sand text-velmora-charcoal hover:border-velmora-gold transition-colors rounded-full"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-velmora-muted hover:text-velmora-charcoal transition-colors ml-2"
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
          <div className="border-t border-velmora-sand px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-velmora-muted">Subtotal</span>
              <span className="text-lg font-serif font-medium text-velmora-charcoal">${totalPrice}</span>
            </div>
            <button className="w-full bg-velmora-gold text-velmora-white py-3 text-xs uppercase tracking-nav font-sans font-medium hover:bg-velmora-gold-dark transition-colors">
              Checkout
            </button>
            <p className="text-xs text-velmora-muted text-center mt-3">Free shipping on orders over $75</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
