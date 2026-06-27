import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    getCartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={closeCart}
        style={{ animation: 'fadeIn 0.3s ease' }}
      />

      {/* Drawer */}
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-surface)] z-50 shadow-xl flex flex-col"
        style={{ animation: 'slideInRight 0.3s ease' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border)]">
          <h2 className="font-serif text-xl">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:opacity-70 transition-opacity"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-[var(--color-border)] mb-4" />
              <p className="text-[var(--color-muted)] mb-6">Your cart is empty</p>
              <Link 
                to="/shop" 
                onClick={closeCart}
                className="btn-primary"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div 
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 pb-6 border-b border-[var(--color-border)]"
                >
                  {/* Image */}
                  <div className="w-20 h-24 bg-[var(--color-surface-alt)] flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h3 
                      className="product-name mb-1"
                      style={{ fontFamily: 'var(--font-family-serif)' }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] mb-2">
                      {item.variant}
                    </p>
                    <p className="text-sm font-medium mb-3">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-[var(--color-border)]">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-[var(--color-surface-alt)] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-4 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-[var(--color-surface-alt)] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors underline"
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
          <div className="p-6 border-t border-[var(--color-border)] bg-[var(--color-surface-alt)]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[var(--color-muted)]">Subtotal</span>
              <span className="text-lg font-medium">${getCartTotal().toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--color-muted)] mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link 
              to="/checkout"
              onClick={closeCart}
              className="btn-accent w-full mb-3"
            >
              Checkout
            </Link>
            <Link 
              to="/shop"
              onClick={closeCart}
              className="btn-secondary w-full"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;