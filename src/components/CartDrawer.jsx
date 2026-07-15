import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 transition-opacity duration-400 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream shadow-xl transition-transform duration-400 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-beige">
            <h2 className="font-serif text-xl uppercase tracking-wider font-light">
              Cart ({totalItems})
            </h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-ink hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-beige mb-4" />
                <p className="font-serif text-lg text-taupe mb-2">Your cart is empty</p>
                <p className="text-sm text-taupe/70 mb-6">Discover pieces you'll love</p>
                <Button onClick={onClose} asChild>
                  <Link to="/shop">Shop Now</Link>
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div key={`${item.productId}-${item.variant}`} className="flex gap-4 pb-6 border-b border-beige last:border-0">
                    <div className="w-20 h-20 flex-shrink-0 bg-beige-light overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-widest text-ink truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs text-taupe mt-1 uppercase tracking-wider">
                        {item.variant}
                      </p>
                      <p className="text-sm text-ink font-medium mt-1">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-beige">
                          <button
                            className="w-7 h-7 flex items-center justify-center text-taupe hover:text-ink hover:bg-beige-light transition-colors"
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button
                            className="w-7 h-7 flex items-center justify-center text-taupe hover:text-ink hover:bg-beige-light transition-colors"
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          className="text-[11px] uppercase tracking-wider text-taupe hover:text-ink transition-colors"
                          onClick={() => removeItem(item.productId, item.variant)}
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
            <div className="border-t border-beige px-6 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider text-taupe">Subtotal</span>
                <span className="font-serif text-lg text-ink">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe/70">Shipping & taxes calculated at checkout</p>
              <Button className="w-full">Checkout</Button>
              <button
                onClick={onClose}
                className="w-full text-center text-xs uppercase tracking-widest text-taupe hover:text-ink transition-colors py-2"
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