import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } =
    useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-cream shadow-modal animate-slideInRight">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-serif text-lg tracking-widest uppercase">
              Your Cart
            </h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-warmGray mb-4">Your cart is empty</p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsCartOpen(false)}
                >
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
                    <div className="w-20 h-24 bg-creamLight overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-product uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs text-warmGray mt-1 capitalize">
                        {item.variant} / Qty: {item.quantity}
                      </p>
                      <p className="text-sm font-medium mt-2">
                        ${item.price * item.quantity}
                      </p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity - 1)
                          }
                          className="p-1 border border-border hover:border-gold transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" strokeWidth={2} />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.variant, item.quantity + 1)
                          }
                          className="p-1 border border-border hover:border-gold transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" strokeWidth={2} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto p-1 text-muted hover:text-error transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" strokeWidth={1.5} />
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
            <div className="p-6 border-t border-border bg-creamLight">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-warmGray">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal}</span>
              </div>
              <p className="text-xs text-muted mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Button variant="primary" size="full">
                Checkout
              </Button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full mt-3 text-sm text-warmGray hover:text-charcoal transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}