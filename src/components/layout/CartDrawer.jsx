import { useEffect } from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../data/products';
import Button from '../ui/Button';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getCartTotal
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-velmora-cream shadow-xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-velmora-border">
            <h2 className="font-serif text-xl text-velmora-charcoal">Your Cart</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-velmora-sand transition-colors"
            >
              <X className="w-5 h-5 text-velmora-charcoal" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-velmora-muted font-sans mb-4">Your cart is empty</p>
                <Button onClick={closeCart} variant="secondary">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-20 h-24 bg-velmora-sand flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="product-name text-velmora-charcoal text-xs">
                        {item.name}
                      </h3>
                      <p className="text-sm text-velmora-muted font-sans mt-1 capitalize">
                        {item.variant} Tone
                      </p>
                      <p className="text-sm font-sans font-medium text-velmora-charcoal mt-1">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-velmora-border hover:border-velmora-gold transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm font-sans w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-velmora-border hover:border-velmora-gold transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto p-2 text-velmora-muted hover:text-velmora-error transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-velmora-border p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-sans text-velmora-muted">Subtotal</span>
                <span className="font-sans font-medium text-velmora-charcoal">
                  {formatPrice(getCartTotal())}
                </span>
              </div>
              <p className="text-xs text-velmora-muted font-sans">
                Shipping and taxes calculated at checkout
              </p>
              <Button size="full">
                Checkout
              </Button>
              <button
                onClick={closeCart}
                className="w-full text-center text-sm text-velmora-muted hover:text-velmora-charcoal font-sans transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;