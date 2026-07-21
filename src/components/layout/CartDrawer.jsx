import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeCart();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 w-full max-w-md h-full bg-ivory shadow-xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-hairline">
            <h2 className="font-serif text-xl">Your Cart ({itemCount})</h2>
            <button
              onClick={closeCart}
              className="p-2 text-stone hover:text-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-16 h-16 text-hairline mb-4" />
                <p className="font-serif text-lg text-stone mb-2">Your cart is empty</p>
                <p className="text-sm text-stone/60 mb-6">Discover our collection of demi-fine jewelry</p>
                <Link
                  to="/collection"
                  onClick={closeCart}
                  className="btn-primary"
                >
                  Shop the Collection
                </Link>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item, index) => (
                  <li key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                    <div className="w-24 h-24 bg-cream flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="font-serif text-sm uppercase tracking-wider hover:text-gold transition-colors line-clamp-1"
                      >
                        {item.name}
                      </Link>
                      {item.variant && (
                        <p className="text-xs text-stone mt-0.5">{item.variant}</p>
                      )}
                      <p className="text-sm font-medium mt-1">${item.price}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-hairline">
                          <button
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="p-2 text-stone hover:text-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(index, item.quantity + 1)}
                            className="p-2 text-stone hover:text-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(index)}
                          className="text-xs text-stone hover:text-red-600 transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-hairline px-6 py-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-stone">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone/60">Shipping and taxes calculated at checkout</p>
              <button className="w-full btn-primary py-4">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full btn-secondary py-4"
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
