import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 z-[60] transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone/50">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-taupe hover:text-charcoal transition-colors bg-transparent border-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-stone mb-4" />
              <p className="text-taupe text-sm">Your cart is empty</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-sm text-gold hover:text-gold-dark transition-colors underline bg-transparent border-none"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-20 h-20 bg-sand rounded-sm flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs uppercase tracking-product text-charcoal font-sans font-medium truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-taupe mt-0.5 capitalize">{item.variant} tone</p>
                    <p className="text-sm text-charcoal font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center border border-stone rounded-sm text-taupe hover:text-charcoal transition-colors bg-transparent p-0"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm text-charcoal w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center border border-stone rounded-sm text-taupe hover:text-charcoal transition-colors bg-transparent p-0"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id, item.variant)}
                    className="text-taupe hover:text-charcoal transition-colors self-start bg-transparent border-none p-1"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-stone/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-taupe">Subtotal</span>
              <span className="text-lg font-serif text-charcoal">${totalPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-taupe mb-4">Shipping calculated at checkout</p>
            <button className="w-full py-3.5 bg-gold hover:bg-gold-dark text-cream text-sm uppercase tracking-wider font-medium transition-colors border-none rounded-sm">
              Checkout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full mt-2 py-3 text-sm text-taupe hover:text-charcoal transition-colors bg-transparent border-none underline"
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
