import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, cartTotal, updateQuantity, removeFromCart } = useCart();
  const drawerRef = useRef(null);

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

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    if (isCartOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isCartOpen, setIsCartOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-obsidian/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleBackdropClick}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velvet-200">
            <h2 className="font-serif text-xl tracking-wide">YOUR BAG</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 -mr-2 text-velvet-600 hover:text-obsidian transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velvet-300 mb-4" />
                <p className="font-serif text-lg text-velvet-600 mb-2">Your bag is empty</p>
                <p className="text-sm text-velvet-500 mb-6">
                  Discover our collection of demi-fine gold jewelry
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="btn-outline text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-velvet-100"
                  >
                    <div className="w-24 h-24 bg-velvet-100 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="product-name text-xs mb-1">{item.name}</h3>
                      <p className="text-xs text-velvet-600 mb-2">{item.variant}</p>
                      <p className="text-sm font-medium text-obsidian">${item.price}</p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velvet-200 rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 text-velvet-600 hover:text-obsidian transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-sm font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 text-velvet-600 hover:text-obsidian transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-velvet-500 hover:text-obsidian underline transition-colors"
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
          {cart.length > 0 && (
            <div className="border-t border-velvet-200 px-6 py-6 bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-velvet-700">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velvet-500 mb-4">Shipping & taxes calculated at checkout</p>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-accent w-full text-center"
              >
                Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 text-sm text-velvet-600 hover:text-obsidian underline transition-colors"
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
