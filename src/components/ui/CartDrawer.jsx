import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-2xl animate-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sand">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-taupe hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="w-16 h-16 text-sand mb-4" />
            <p className="text-taupe font-sans mb-6">Your cart is empty</p>
            <button
              onClick={closeCart}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map(item => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  <div className="w-24 h-24 bg-champagne flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="product-name text-charcoal">{item.name}</p>
                    {item.variant && (
                      <p className="text-xs text-taupe mt-1">{item.variant}</p>
                    )}
                    <p className="text-sm font-sans text-charcoal mt-1">
                      ${item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-sand text-taupe hover:border-charcoal hover:text-charcoal transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-sans text-charcoal w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-sand text-taupe hover:border-charcoal hover:text-charcoal transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id, item.variant)}
                        className="ml-auto text-xs text-taupe hover:text-charcoal underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-sand p-6 space-y-4 bg-cream">
              <div className="flex items-center justify-between">
                <span className="text-sm font-sans text-taupe">Subtotal</span>
                <span className="font-sans font-medium text-charcoal">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe font-sans">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full btn-primary flex items-center justify-center gap-2">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block w-full text-center text-sm font-sans text-taupe hover:text-charcoal underline transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
