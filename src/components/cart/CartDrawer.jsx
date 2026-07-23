import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    isDrawerOpen, 
    setIsDrawerOpen 
  } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 transition-opacity"
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-cream)] z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-taupe-light)]">
          <h2 className="font-serif text-xl text-[var(--color-charcoal)]">Your Cart</h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 hover:text-[var(--color-gold)] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-[var(--color-taupe)] mb-4" />
              <p className="text-[var(--color-charcoal)] mb-2">Your cart is empty</p>
              <Link
                to="/shop"
                onClick={() => setIsDrawerOpen(false)}
                className="text-sm text-[var(--color-gold)] hover:underline"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-[var(--color-taupe-light)]"
                >
                  {/* Image */}
                  <div className="w-20 h-24 bg-[var(--color-cream-dark)] flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="product-title text-xs">{item.name}</h3>
                    <p className="text-sm text-[var(--color-taupe)] mt-1 capitalize">
                      {item.variant} Tone
                    </p>
                    <p className="text-sm font-medium mt-1">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity & Remove */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[var(--color-taupe-light)]">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:text-[var(--color-gold)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:text-[var(--color-gold)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-xs text-[var(--color-taupe)] hover:text-[var(--color-error)] transition-colors"
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
        {cart.length > 0 && (
          <div className="p-6 border-t border-[var(--color-taupe-light)] bg-[var(--color-cream-dark)]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-[var(--color-taupe)]">Subtotal</span>
              <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--color-taupe)] mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={() => setIsDrawerOpen(false)}
              className="btn-primary w-full text-center"
            >
              Checkout
            </Link>
            <Link
              to="/shop"
              onClick={() => setIsDrawerOpen(false)}
              className="block text-center mt-3 text-sm text-[var(--color-taupe)] hover:text-[var(--color-gold)]"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}