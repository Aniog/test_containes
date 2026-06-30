import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, cartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cream-200">
          <h2 className="font-serif text-xl text-charcoal-900">Shopping Bag</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 text-charcoal-600 hover:text-charcoal-900 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-warm-gray mb-4" />
              <p className="text-charcoal-600 font-medium mb-2">Your bag is empty</p>
              <p className="text-sm text-warm-gray mb-6">Discover our collection of demi-fine jewelry.</p>
              <Button variant="primary" onClick={() => setCartOpen(false)}>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map(item => (
                <li key={`${item.id}-${item.material}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-cream-200 rounded-sm overflow-hidden flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-charcoal-900 truncate">{item.name}</h3>
                        <p className="text-xs text-warm-gray mt-1 capitalize">{item.material}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.material)}
                        className="p-1 text-warm-gray hover:text-charcoal-900 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-cream-300 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.material, item.quantity - 1)}
                          className="p-1.5 text-charcoal-600 hover:text-charcoal-900 disabled:opacity-40"
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-3 text-sm text-charcoal-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.material, item.quantity + 1)}
                          className="p-1.5 text-charcoal-600 hover:text-charcoal-900"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-medium text-charcoal-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-cream-200 px-6 py-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-charcoal-600">Subtotal</span>
              <span className="text-lg font-medium text-charcoal-900">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-warm-gray">Shipping and taxes calculated at checkout.</p>
            <Button variant="primary" size="lg" className="w-full">
              Checkout
            </Button>
            <button
              onClick={() => setCartOpen(false)}
              className="w-full text-center text-xs tracking-widest uppercase text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
