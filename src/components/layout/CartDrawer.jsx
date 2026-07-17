import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 shadow-xl transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-charcoal-100">
            <div>
              <h2 className="font-serif text-xl font-semibold text-charcoal-900">Your Cart</h2>
              <p className="text-sm text-charcoal-500 mt-0.5">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-charcoal-400 hover:text-charcoal-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-charcoal-200 mb-4" />
                <p className="font-serif text-lg text-charcoal-400">Your cart is empty</p>
                <p className="text-sm text-charcoal-400 mt-2">Add some pieces to get started</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-6 btn-primary"
                >
                  Shop Now
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-6 border-b border-charcoal-100 last:border-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover bg-taupe-100"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-charcoal-800 mb-1">{item.name}</h3>
                      <p className="text-xs text-charcoal-400 uppercase tracking-wider mb-1">
                        {item.variant === 'gold' ? '18K Gold Plated' : 'Sterling Silver'}
                      </p>
                      <p className="font-sans text-sm font-semibold text-charcoal-800">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-charcoal-200">
                          <button
                            className="px-2 py-1 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1 text-sm font-medium text-charcoal-800 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-xs text-charcoal-400 hover:text-charcoal-800 transition-colors uppercase tracking-wider"
                          onClick={() => removeItem(item.id, item.variant)}
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
            <div className="border-t border-charcoal-100 px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm uppercase tracking-wider text-charcoal-600">Subtotal</span>
                <span className="font-serif text-xl font-semibold text-charcoal-900">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-400">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-center block">
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-center text-sm text-charcoal-500 hover:text-charcoal-800 transition-colors uppercase tracking-wider"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}