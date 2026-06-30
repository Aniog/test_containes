import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal, itemCount } = useCart();

  // Lock body scroll when drawer is open
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
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-overlay z-50 transition-opacity duration-300"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface z-50 shadow-hover flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl uppercase tracking-wider">
            Your Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:text-gold transition-colors"
            aria-label="Close cart"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <div className="w-20 h-20 rounded-full bg-divider flex items-center justify-center mb-6">
              <ShoppingBag size={32} strokeWidth={1} className="text-muted-gray" />
            </div>
            <p className="font-serif text-lg text-charcoal mb-2">Your bag is empty</p>
            <p className="font-sans text-sm text-warm-gray mb-8 text-center">
              Discover our collection of demi-fine jewelry
            </p>
            <Link
              to="/shop"
              onClick={closeCart}
              className="btn-primary"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div
                    key={`${item.id}-${item.variant}-${index}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-divider rounded overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm uppercase tracking-wide truncate">
                        {item.name}
                      </h3>
                      {item.variant && (
                        <p className="font-sans text-xs text-warm-gray mt-1">
                          {item.variant}
                        </p>
                      )}
                      <p className="font-sans text-sm mt-2">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-border rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-2 hover:bg-divider transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} strokeWidth={1.5} />
                          </button>
                          <span className="px-3 font-sans text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-2 hover:bg-divider transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} strokeWidth={1.5} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="font-sans text-xs text-warm-gray hover:text-gold transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-6 bg-surface">
              {/* Subtotal */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-sans text-sm uppercase tracking-wide text-warm-gray">
                  Subtotal
                </span>
                <span className="font-serif text-lg">{formatPrice(subtotal)}</span>
              </div>
              <p className="font-sans text-xs text-muted-gray mb-6">
                Shipping and taxes calculated at checkout
              </p>

              {/* Checkout Button */}
              <button className="btn-primary w-full mb-3">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="btn-secondary w-full"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
