import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-ivory-50 z-[70] shadow-2xl',
          'transition-transform duration-400 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100/40">
          <h2 className="font-serif text-xl tracking-wide text-charcoal-900">
            Your Bag ({totalItems})
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-charcoal-500 hover:text-charcoal-800 transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4" style={{ height: 'calc(100vh - 240px)' }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} className="text-charcoal-200 mb-4" strokeWidth={1} />
              <p className="font-serif text-lg text-charcoal-500 mb-2">Your bag is empty</p>
              <p className="text-sm text-charcoal-400 mb-6">Discover our curated collection</p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 bg-charcoal-900 text-ivory-50 text-xs tracking-widest uppercase font-medium hover:bg-charcoal-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.key} className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-24 bg-ivory-200 flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag size={20} className="text-charcoal-300" strokeWidth={1} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm tracking-wider text-charcoal-800 mb-0.5">
                      {item.name}
                    </p>
                    <p className="text-xs text-charcoal-400 mb-3">{item.variant}</p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-charcoal-200">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-xs font-medium text-charcoal-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1.5 text-charcoal-500 hover:text-charcoal-800 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.key)}
                        className="text-xs text-charcoal-400 underline hover:text-charcoal-700 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-charcoal-800 flex-shrink-0">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-ivory-50 border-t border-charcoal-100/40 px-6 py-5">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-sm text-charcoal-500">Subtotal</span>
              <span className="font-serif text-lg text-charcoal-900">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-charcoal-400 mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold-500 text-white text-xs tracking-widest uppercase font-semibold hover:bg-gold-600 transition-colors duration-300">
              Checkout — ${totalPrice.toFixed(2)}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
