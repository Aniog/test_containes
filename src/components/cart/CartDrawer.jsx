import { useEffect, useRef } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const drawerRef = useRef(null);

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

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) closeCart();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-velmora-cream shadow-elevated transform transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-linen">
            <h2 className="font-serif text-xl tracking-wider text-velmora-charcoal">
              Your Bag ({itemCount})
            </h2>
            <button onClick={closeCart} className="p-1 hover:text-velmora-gold transition-colors" aria-label="Close cart">
              <X className="w-5 h-5 text-velmora-stone" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-velmora-sand mb-4" />
                <p className="font-serif text-lg text-velmora-stone mb-2">Your bag is empty</p>
                <p className="text-sm text-velmora-taupe mb-6">Looks like you haven't added anything yet.</p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-gold text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-5">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    {/* Product image placeholder */}
                    <div className="w-20 h-20 bg-velmora-linen rounded overflow-hidden flex-shrink-0">
                      <div
                        className="w-full h-full"
                        data-strk-img-id={`cart-${item.id}-${item.variant}`}
                        data-strk-img={`[cart-item-name-${item.id}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="200"
                      >
                        <div className="w-full h-full bg-gradient-to-br from-velmora-linen to-velmora-sand flex items-center justify-center">
                          <span className="text-velmora-gold text-xs font-serif">VM</span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p id={`cart-item-name-${item.id}`} className="font-serif text-sm uppercase tracking-wider text-velmora-charcoal">
                            {item.name}
                          </p>
                          <p className="text-xs text-velmora-taupe capitalize mt-0.5">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.variant)}
                          className="text-velmora-taupe hover:text-velmora-charcoal transition-colors p-1"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-velmora-sand rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1.5 hover:text-velmora-gold transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3 text-velmora-stone" />
                          </button>
                          <span className="px-3 text-sm text-velmora-charcoal font-sans">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1.5 hover:text-velmora-gold transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3 text-velmora-stone" />
                          </button>
                        </div>
                        <p className="font-sans text-sm text-velmora-charcoal">
                          ${(item.price * item.quantity).toFixed(2)}
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
            <div className="border-t border-velmora-linen px-6 py-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-sm text-velmora-stone">Subtotal</span>
                <span className="font-serif text-lg text-velmora-charcoal">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-taupe text-center">
                Shipping & taxes calculated at checkout
              </p>
              <button className="btn-gold w-full text-center">
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                onClick={closeCart}
                className="block text-center text-xs text-velmora-stone hover:text-velmora-gold transition-colors uppercase tracking-widest-xl"
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
