import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, cartTotal, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
            <h2
              className="text-lg font-medium tracking-wide"
              style={{ letterSpacing: '0.1em' }}
            >
              YOUR BAG ({cart.length})
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Close cart"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-divider mb-4" />
                <p className="text-text-secondary mb-6">Your bag is empty</p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-8 py-3 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-dark transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-6">
                {cart.map((item, index) => (
                  <li key={`${item.id}-${item.variant}-${index}`} className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 bg-cream overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-wide text-text-primary mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-text-muted mb-2">{item.variant}</p>
                      <p className="font-medium mb-3">${item.price}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-divider">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 text-text-secondary hover:text-text-primary transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-text-muted hover:text-text-primary underline transition-colors"
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
          {cart.length > 0 && (
            <div className="border-t border-divider px-6 py-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-text-secondary">Subtotal</span>
                <span className="font-medium text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-text-muted mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full py-4 bg-gold text-white text-center text-sm uppercase tracking-wider hover:bg-gold-dark transition-colors duration-200"
              >
                Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 py-3 text-sm text-text-secondary hover:text-text-primary transition-colors"
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
