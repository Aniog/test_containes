import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer({ open, onClose }) {
  const { cart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-400 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-deep-950/40 backdrop-blur-sm" />
      </div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 bg-cream shadow-2xl transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-deep-100">
            <h2 className="font-serif text-lg text-deep-800">
              Your Bag ({itemCount})
            </h2>
            <button onClick={onClose} className="text-deep-500 hover:text-deep-800 transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-deep-300 mb-4" />
                <p className="font-sans text-sm text-deep-500">Your bag is empty.</p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-4 btn-outline text-xs"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <ul className="space-y-5">
                {cart.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-deep-100">
                    {/* Image placeholder */}
                    <div className="w-20 h-20 flex-shrink-0 bg-deep-100 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-warm-200 to-warm-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-serif text-sm tracking-wider uppercase text-deep-800">{item.name}</p>
                          <p className="font-sans text-xs text-deep-400 mt-0.5">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-deep-300 hover:text-deep-600 transition-colors ml-2"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-deep-200">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-deep-500 hover:text-deep-800 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-sans text-sm text-deep-700">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-deep-500 hover:text-deep-800 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="font-sans text-sm font-medium text-deep-700">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-deep-100 px-6 py-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm text-deep-500">Subtotal</span>
                <span className="font-serif text-lg text-deep-800">${subtotal.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-deep-400">Shipping & taxes calculated at checkout</p>
              <button className="btn-primary w-full text-sm">Checkout</button>
              <button
                onClick={onClose}
                className="w-full text-center font-sans text-xs text-deep-500 hover:text-deep-700 transition-colors py-2 tracking-wider uppercase"
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