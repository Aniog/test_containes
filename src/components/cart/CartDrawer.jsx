import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-warm-white z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <h2 className="font-serif text-xl tracking-wide text-stone-800">
            Your Bag ({itemCount})
          </h2>
          <button onClick={closeCart} className="text-stone-500 hover:text-stone-800 transition-colors" aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-stone-500 text-sm mb-4">Your bag is empty</p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="text-xs tracking-super-wide uppercase font-medium text-gold hover:text-gold-dark transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image placeholder */}
                  <div className="w-20 h-24 bg-stone-100 flex-shrink-0 rounded overflow-hidden">
                    <img
                      data-strk-img-id={`cart-${item.id}-${item.variant}`}
                      data-strk-img={`[cart-item-${item.id}-name] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="160"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 id={`cart-item-${item.id}-name`} className="font-serif text-sm tracking-wide uppercase text-stone-800 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{item.variant}</p>
                    <p className="text-sm font-medium text-stone-800 mt-1">${item.price}</p>

                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 border border-stone-300 flex items-center justify-center text-stone-600 hover:border-gold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-stone-800 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 border border-stone-300 flex items-center justify-center text-stone-600 hover:border-gold transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-stone-400 hover:text-stone-700 underline transition-colors"
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
          <div className="border-t border-stone-200 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-stone-600">Subtotal</span>
              <span className="text-lg font-serif text-stone-800">${total}</span>
            </div>
            <p className="text-xs text-stone-500 mb-4">Shipping calculated at checkout</p>
            <button className="w-full bg-gold text-white text-xs tracking-super-wide uppercase font-medium py-3.5 hover:bg-gold-dark transition-colors">
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="w-full mt-2 text-xs tracking-super-wide uppercase font-medium text-stone-600 hover:text-gold py-2 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
