import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

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
        className={cn(
          'fixed inset-0 bg-black/40 z-50 transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md bg-ivory z-50 shadow-xl transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-beige">
            <div>
              <h2 className="font-serif text-xl text-near-black">Your Cart</h2>
              <p className="text-sm text-taupe mt-0.5">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-near-black" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-10 h-10 text-beige mb-4" />
                <p className="font-serif text-lg text-near-black">Your cart is empty</p>
                <p className="text-sm text-taupe mt-1">Add something beautiful to begin.</p>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={item.key} className="flex gap-4 pb-5 border-b border-beige last:border-0">
                    <div className="w-20 h-20 flex-shrink-0 bg-beige/30 rounded-sm overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-wide-lg text-near-black truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-taupe mt-0.5 capitalize">{item.variant}</p>
                      <p className="text-sm font-medium text-near-black mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1 border border-beige rounded-sm hover:border-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 text-near-black" />
                        </button>
                        <span className="text-sm font-medium text-near-black w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1 border border-beige rounded-sm hover:border-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 text-near-black" />
                        </button>
                        <button
                          onClick={() => removeItem(item.key)}
                          className="ml-auto text-xs text-taupe hover:text-near-black transition-colors"
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
            <div className="px-6 py-5 border-t border-beige">
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-lg text-near-black">Total</span>
                <span className="font-serif text-xl text-near-black">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-gold hover:bg-gold-dark text-white py-3.5 text-sm uppercase tracking-wider font-medium transition-all duration-300">
                Checkout
              </button>
              <p className="text-xs text-taupe text-center mt-3">
                Free worldwide shipping on all orders
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}