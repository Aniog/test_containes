import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    updateQuantity, 
    removeItem, 
    itemCount, 
    subtotal 
  } = useCart();
  
  const drawerRef = useRef(null);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeCart]);

  // Prevent body scroll when open
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
        className="absolute inset-0 bg-velmora-charcoal/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-velmora-cream shadow-lifted transform transition-transform duration-300 ease-out flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-velmora-charcoal" />
            <h2 className="font-serif text-xl">Your Bag</h2>
            {itemCount > 0 && (
              <span className="text-sm text-velmora-warm-gray">
                ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-velmora-border/50 flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-velmora-warm-gray" />
            </div>
            <h3 className="font-serif text-xl mb-2">Your bag is empty</h3>
            <p className="text-sm text-velmora-warm-gray mb-8">
              Discover pieces crafted to be treasured
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-6">
                {items.map((item) => (
                  <li 
                    key={`${item.productId}-${item.variant}`} 
                    className="flex gap-4 pb-6 border-b border-velmora-border last:border-0"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 bg-velmora-border rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-product-name">{item.name}</h4>
                          <p className="text-xs text-velmora-warm-gray mt-1">
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.productId, item.variant)}
                          className="p-1 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity */}
                        <div className="flex items-center border border-velmora-border rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                            className="p-2 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                            className="p-2 text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="text-sm font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="border-t border-velmora-border px-6 py-6 bg-white">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-velmora-warm-gray">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-warm-gray mb-4">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="btn-primary w-full">
                Checkout — ${subtotal.toFixed(2)}
              </button>

              {/* Continue Shopping */}
              <button
                onClick={closeCart}
                className="w-full mt-3 text-sm text-velmora-warm-gray hover:text-velmora-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
