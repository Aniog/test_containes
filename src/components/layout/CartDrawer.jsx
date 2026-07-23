import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-ivory shadow-lift animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <h2 className="font-serif text-xl tracking-wide text-charcoal">
            Your Cart {itemCount > 0 && `(${itemCount})`}
          </h2>
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
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-20 h-20 rounded-full bg-cream flex items-center justify-center mb-6">
              <ShoppingBag className="w-8 h-8 text-taupe" />
            </div>
            <p className="text-lg font-medium text-charcoal mb-2">Your cart is empty</p>
            <p className="text-sm text-taupe text-center mb-8">
              Discover our collection of demi-fine gold jewelry
            </p>
            <Button onClick={closeCart} variant="primary">
              <Link to="/shop" onClick={closeCart} className="text-charcoal">
                Start Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {/* Image */}
                    <div className="w-24 h-24 bg-cream rounded-sm overflow-hidden flex-shrink-0">
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
                          <h3 className="font-serif text-sm uppercase tracking-extra-wide text-charcoal leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-xs text-taupe mt-1">{item.variant}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-taupe hover:text-charcoal transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity */}
                        <div className="flex items-center border border-sand rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="p-2 text-taupe hover:text-charcoal disabled:opacity-50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-sm font-medium text-charcoal">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= 10}
                            className="p-2 text-taupe hover:text-charcoal disabled:opacity-50 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium text-charcoal">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-sand px-6 py-6 bg-cream/50">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-taupe">Subtotal</span>
                <span className="font-serif text-lg text-charcoal">${subtotal.toFixed(2)}</span>
              </div>

              <p className="text-xs text-taupe mb-4">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout button */}
              <Button size="full" className="mb-3">
                Proceed to Checkout
              </Button>

              {/* Continue shopping */}
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-taupe hover:text-gold transition-colors py-2"
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
