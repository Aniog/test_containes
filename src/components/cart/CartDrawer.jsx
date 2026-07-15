import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  // Prevent body scroll when drawer is open
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
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory shadow-xl animate-slideIn flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-sand">
          <h2 className="font-serif text-xl text-charcoal">Your Bag ({totalItems})</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-charcoal/60 hover:text-charcoal transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-taupe" />
            </div>
            <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
            <p className="font-sans text-sm text-taupe mb-6">
              Discover our collection of demi-fine jewelry
            </p>
            <Button onClick={() => setIsOpen(false)} variant="primary">
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.map(item => (
                <div key={`${item.product.id}-${item.variant}`} className="flex gap-4">
                  {/* Product image */}
                  <div className="w-24 h-24 bg-cream rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.id}`}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-sm text-charcoal hover:text-gold transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-sans text-xs text-taupe mt-0.5">{item.variant}</p>
                    <p className="font-sans text-sm font-medium text-charcoal mt-1">
                      ${item.product.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-sand rounded">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-charcoal/60 hover:text-charcoal transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-sans text-sm text-charcoal">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-charcoal/60 hover:text-charcoal transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.variant)}
                        className="font-sans text-xs text-taupe hover:text-charcoal transition-colors underline underline-offset-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-sand p-6 bg-cream">
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-sm text-charcoal">Subtotal</span>
                <span className="font-serif text-lg text-charcoal">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="font-sans text-xs text-taupe mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Button variant="primary" className="w-full" size="lg">
                Checkout
              </Button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full mt-3 font-sans text-sm text-charcoal/60 hover:text-gold transition-colors underline underline-offset-2"
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
