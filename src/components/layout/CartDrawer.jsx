import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, cartTotal, isOpen, closeCart, updateQuantity, removeItem } =
    useCart();

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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-xl animate-slide-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200">
            <h2 className="font-serif text-xl font-light">Your Bag</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-stone-300 mb-4" />
                <p className="text-stone-500 mb-4">Your bag is empty</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="inline-block px-6 py-2 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-dark transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(({ key, product, variant, quantity }) => (
                  <div key={key} className="flex gap-4">
                    {/* Product Image Placeholder */}
                    <div className="w-20 h-24 bg-stone-100 flex-shrink-0 flex items-center justify-center">
                      <span className="text-stone-400 text-xs">
                        {product.name.charAt(0)}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium uppercase tracking-wider">
                            {product.name}
                          </h3>
                          <p className="text-xs text-stone-500 mt-1 capitalize">
                            {variant.name}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(key)}
                          className="text-stone-400 hover:text-stone-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-stone-200">
                          <button
                            onClick={() => updateQuantity(key, quantity - 1)}
                            className="p-2 hover:bg-stone-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-2 text-sm min-w-[2rem] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(key, quantity + 1)}
                            className="p-2 hover:bg-stone-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-sm font-medium">
                          ${(product.price * quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-stone-200 px-6 py-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-stone-600">Subtotal</span>
                <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-stone-500">
                Shipping & taxes calculated at checkout
              </p>
              <button className="w-full py-3 bg-gold text-white text-sm uppercase tracking-wider hover:bg-gold-dark transition-colors">
                Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-sm text-stone-600 hover:text-gold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
