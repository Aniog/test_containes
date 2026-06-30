import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, drawerOpen, closeDrawer, removeItem, updateQuantity, itemCount, subtotal } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[100] transition-opacity duration-400 ${drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeDrawer}
      />

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-velmora-cream z-[110] shadow-2xl transform transition-transform duration-400 ease-out ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone">
            <h2 className="font-serif text-lg tracking-wider flex items-center gap-2 text-velmora-espresso">
              <ShoppingBag className="w-4 h-4 text-velmora-gold" />
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeDrawer} aria-label="Close cart" className="text-velmora-warm-gray hover:text-velmora-espresso transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-stone mb-4" />
                <p className="text-velmora-warm-gray text-sm">Your bag is empty</p>
                <Link to="/shop" onClick={closeDrawer} className="mt-4 btn-outline text-xs">
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-velmora-stone/50">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 bg-velmora-stone flex-shrink-0 rounded-sm" />

                    <div className="flex-1 min-w-0">
                      <h4 className="product-name text-xs text-velmora-espresso">{item.name}</h4>
                      <p className="text-[11px] text-velmora-muted mt-0.5 capitalize">{item.variant}</p>
                      <p className="text-sm text-velmora-charcoal font-medium mt-1">${item.price}</p>

                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center border border-velmora-stone rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-velmora-warm-gray hover:text-velmora-espresso transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium px-3 text-velmora-espresso">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-velmora-warm-gray hover:text-velmora-espresso transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-muted hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
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
            <div className="border-t border-velmora-stone px-6 py-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-velmora-warm-gray font-sans">Subtotal</span>
                <span className="font-serif text-lg text-velmora-espresso">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-[11px] text-velmora-muted mb-4 border-b border-velmora-stone/50 pb-4">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button onClick={closeDrawer} className="w-full mt-3 text-xs text-velmora-warm-gray hover:text-velmora-espresso transition-colors py-2 font-sans tracking-wider uppercase">
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
