import { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeFromCart, updateQuantity, subtotal } = useCart();

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
        className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-ivory z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-champagne">
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button
            onClick={closeCart}
            className="p-2 -mr-2 text-espresso hover:text-taupe transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag className="w-16 h-16 text-champagne mb-4" />
            <p className="text-taupe text-center mb-6">
              Your bag is empty. Let's find something you'll love.
            </p>
            <button
              onClick={closeCart}
              className="btn-outline"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  {/* Image */}
                  <div className="w-24 h-32 bg-cream flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="product-title text-espresso">
                      {item.name}
                    </h3>
                    {item.variant && (
                      <p className="text-xs text-taupe mt-1 capitalize">
                        {item.variant} tone
                      </p>
                    )}
                    <p className="font-serif text-lg mt-2">
                      ${item.price}
                    </p>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between mt-auto pt-3">
                      <div className="flex items-center border border-warmgray/30">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-cream transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-cream transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-taupe hover:text-espresso transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-champagne px-6 py-6 space-y-4 bg-cream/50">
              <div className="flex items-center justify-between">
                <span className="text-sm text-taupe">Subtotal</span>
                <span className="font-serif text-xl">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-taupe">
                Shipping and taxes calculated at checkout
              </p>
              <button className="w-full btn-primary">
                Checkout
              </button>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-taupe hover:text-espresso transition-colors py-2"
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
