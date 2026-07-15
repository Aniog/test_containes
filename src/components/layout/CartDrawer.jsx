import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

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
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 z-50 transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-100">
            <h2 className="font-serif text-lg tracking-wider">
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeCart} className="p-1 hover:text-velvet-600 transition-colors" aria-label="Close cart">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-charcoal-300 mb-4" />
                <p className="text-charcoal-500 text-sm">Your bag is empty</p>
                <button
                  onClick={closeCart}
                  className="mt-4 text-xs tracking-wider uppercase font-medium text-velvet-600 hover:text-velvet-700 underline underline-offset-4"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((item) => (
                  <li key={`${item.id}-${item.variant}`} className="flex gap-4 pb-5 border-b border-charcoal-100">
                    <div className="w-20 h-20 flex-shrink-0 bg-velvet-100 rounded-sm overflow-hidden">
                      <div className="w-full h-full bg-velvet-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 id={`cart-name-${item.id}`} className="product-name text-[11px]">{item.name}</h3>
                      <p className="text-xs text-charcoal-500 mt-0.5">{item.variant}</p>
                      <p className="product-price mt-1">${item.price}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-charcoal-200">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:text-velvet-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:text-velvet-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-xs text-charcoal-400 hover:text-charcoal-700 underline underline-offset-2 transition-colors"
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
            <div className="border-t border-charcoal-100 px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal-600">Subtotal</span>
                <span className="font-serif text-lg">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-400">Shipping & taxes calculated at checkout</p>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}