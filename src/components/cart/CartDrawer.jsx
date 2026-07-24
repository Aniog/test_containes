import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[70] bg-black/30 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-md z-[80] flex flex-col shadow-2xl"
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
          <h2 className="font-serif text-xl tracking-wide">Your Cart</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 mb-4" style={{ color: 'var(--color-muted-light)' }} />
              <p className="font-serif text-lg mb-2" style={{ color: 'var(--color-muted)' }}>
                Your cart is empty
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-sm underline hover:opacity-60 transition-opacity"
                style={{ color: 'var(--color-charcoal)' }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map(item => (
                <div
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4"
                >
                  <div
                    className="w-24 h-24 flex-shrink-0"
                    style={{ backgroundColor: 'var(--color-ivory)' }}
                  >
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="product-name text-xs">{item.name}</h3>
                      <p className="text-sm mt-1" style={{ color: 'var(--color-muted)' }}>
                        {item.variant}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border hover:opacity-60 transition-opacity"
                          style={{ borderColor: 'var(--color-border-dark)' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border hover:opacity-60 transition-opacity"
                          style={{ borderColor: 'var(--color-border-dark)' }}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-sans text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="self-start p-1 hover:opacity-60 transition-opacity"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>Subtotal</span>
              <span className="font-sans text-lg font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs mb-4" style={{ color: 'var(--color-muted-light)' }}>
              Shipping and taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-full mt-3 text-sm underline hover:opacity-60 transition-opacity"
              style={{ color: 'var(--color-charcoal)' }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}