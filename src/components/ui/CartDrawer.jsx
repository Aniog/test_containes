import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--color-secondary)] shadow-xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5" />
              <span className="heading-serif text-lg">Your Cart</span>
              <span className="text-sm text-[var(--color-muted)]">
                ({cart.length} {cart.length === 1 ? 'item' : 'items'})
              </span>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-[var(--color-accent)] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="w-12 h-12 text-[var(--color-muted-light)] mb-4" />
                <p className="text-[var(--color-muted)] mb-4">Your cart is empty</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="btn-outline text-sm"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div 
                    key={`${item.id}-${item.variant}`}
                    className="flex gap-4 pb-6 border-b border-[var(--color-border)]"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-24 bg-[var(--color-secondary-dark)] flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h4 className="product-name text-[10px]">{item.name}</h4>
                      <p className="text-sm text-[var(--color-muted)] mt-1 capitalize">
                        {item.variant} / Qty: {item.quantity}
                      </p>
                      <p className="mt-2 font-medium">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-sm text-[var(--color-muted)] hover:text-[var(--color-error)] transition-colors"
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
            <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-secondary-dark)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[var(--color-muted)]">Subtotal</span>
                <span className="text-lg font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[var(--color-muted)] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Link 
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary w-full text-center"
              >
                Checkout
              </Link>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] mt-3 transition-colors"
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