import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

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

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-ivory shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
            <h2 className="font-serif text-xl text-charcoal">Your Bag ({itemCount})</h2>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 text-charcoal-light hover:text-charcoal transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Content */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <ShoppingBag className="w-16 h-16 text-sand mb-6" strokeWidth={1} />
              <p className="font-serif text-xl text-charcoal mb-2">Your bag is empty</p>
              <p className="text-warm-gray text-body-sm mb-8 text-center">
                Discover our collection of demi-fine jewelry
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
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.variant}`} className="flex gap-4">
                      {/* Image */}
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="flex-shrink-0 w-24 h-24 bg-cream rounded-md overflow-hidden"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/product/${item.slug}`}
                          onClick={closeCart}
                          className="block"
                        >
                          <h3 className="font-serif text-sm text-charcoal uppercase tracking-wider truncate">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="text-warm-gray text-caption mt-1 capitalize">
                          {item.variant}
                        </p>
                        <p className="text-charcoal text-body-sm mt-1">
                          {formatPrice(item.price)}
                        </p>

                        {/* Quantity */}
                        <div className="flex items-center gap-3 mt-3">
                          <div className="flex items-center border border-sand rounded-sm">
                            <button
                              onClick={() => updateQuantity(item.productId, item.variant, item.quantity - 1)}
                              className="p-2 text-charcoal-light hover:text-charcoal transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" strokeWidth={2} />
                            </button>
                            <span className="px-3 text-body-sm text-charcoal">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.variant, item.quantity + 1)}
                              className="p-2 text-charcoal-light hover:text-charcoal transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" strokeWidth={2} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.productId, item.variant)}
                            className="text-warm-gray text-caption hover:text-error transition-colors underline"
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
              <div className="border-t border-sand px-6 py-6 bg-cream">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-charcoal-light">Subtotal</span>
                  <span className="font-serif text-lg text-charcoal">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-warm-gray text-caption mb-6">
                  Shipping and taxes calculated at checkout
                </p>
                <button className="btn-primary w-full">
                  Checkout
                </button>
                <button
                  onClick={closeCart}
                  className="w-full mt-3 text-charcoal-light text-body-sm hover:text-charcoal transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
