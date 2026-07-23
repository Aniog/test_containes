import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart, useCartDispatch } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ open, onClose }) {
  const { items, totalItems, totalPrice } = useCart();
  const { removeItem, updateQuantity } = useCartDispatch();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          open ? 'bg-black/30 backdrop-blur-sm pointer-events-auto' : 'bg-transparent pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 transform transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-warm-200">
            <h2 className="font-serif text-xl tracking-[0.15em] uppercase text-charcoal-900">
              Shopping Bag ({totalItems})
            </h2>
            <button onClick={onClose} className="p-2 text-charcoal-600 hover:text-charcoal-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
                <p className="font-serif text-lg text-charcoal-500">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 text-xs font-sans uppercase tracking-[0.15em] text-charcoal-700 underline underline-offset-4 hover:text-charcoal-900 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-warm-100">
                    <div className="w-20 h-20 bg-warm-100 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-xs">{item.name}</h3>
                      <p className="text-xs text-charcoal-500 mt-1">{item.variant}</p>
                      <p className="text-sm font-sans text-charcoal-700 mt-1">${item.price}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-warm-300">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-sans text-charcoal-900 min-w-[24px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-charcoal-600 hover:text-charcoal-900 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-charcoal-400 hover:text-charcoal-700 underline transition-colors"
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
            <div className="border-t border-warm-200 px-6 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-sans text-charcoal-600">Subtotal</span>
                <span className="font-serif text-lg text-charcoal-900">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-400">Shipping & taxes calculated at checkout</p>
              <button className="accent-btn w-full">Checkout</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}