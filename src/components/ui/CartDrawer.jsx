import { useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    cartTotal, 
    cartCount 
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[var(--overlay)]"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div 
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid rgba(200, 185, 154, 0.3)' }}
        >
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} style={{ color: 'var(--espresso-mid)' }} />
            <h2 className="font-serif text-xl" style={{ color: 'var(--espresso-mid)' }}>
              Your Bag
            </h2>
            {cartCount > 0 && (
              <span className="text-sm" style={{ color: 'var(--stone-dark)' }}>
                ({cartCount} {cartCount === 1 ? 'item' : 'items'})
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 transition-opacity duration-200 hover:opacity-60"
            aria-label="Close cart"
          >
            <X size={20} style={{ color: 'var(--espresso-mid)' }} />
          </button>
        </div>

        {/* Content */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <ShoppingBag size={48} style={{ color: 'var(--stone)', opacity: 0.5 }} />
            <p className="mt-4 text-center" style={{ color: 'var(--espresso-light)' }}>
              Your bag is empty
            </p>
            <button
              onClick={() => setIsCartOpen(false)}
              className="btn-primary mt-6"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div 
                    key={`${item.product.id}-${item.variant}`}
                    className="flex gap-4"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded bg-[var(--cream)]">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div>
                          <h3 
                            className="font-serif text-sm uppercase tracking-wider"
                            style={{ color: 'var(--espresso-mid)' }}
                          >
                            {item.product.name}
                          </h3>
                          <p className="text-xs mt-1" style={{ color: 'var(--stone-dark)' }}>
                            {item.variant}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.variant)}
                          className="p-1 transition-opacity hover:opacity-60"
                          aria-label="Remove item"
                        >
                          <X size={16} style={{ color: 'var(--stone-dark)' }} />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity - 1)}
                            className="p-1 rounded-full transition-colors"
                            style={{ 
                              backgroundColor: 'var(--cream)',
                              color: 'var(--espresso-mid)'
                            }}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} />
                          </button>
                          <span 
                            className="w-8 text-center text-sm"
                            style={{ color: 'var(--espresso)' }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.variant, item.quantity + 1)}
                            className="p-1 rounded-full transition-colors"
                            style={{ 
                              backgroundColor: 'var(--cream)',
                              color: 'var(--espresso-mid)'
                            }}
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="price">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div 
              className="px-6 py-6 space-y-4"
              style={{ borderTop: '1px solid rgba(200, 185, 154, 0.3)' }}
            >
              <div className="flex justify-between items-center">
                <span style={{ color: 'var(--espresso-light)' }}>Subtotal</span>
                <span className="font-medium text-lg" style={{ color: 'var(--espresso-mid)' }}>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs" style={{ color: 'var(--stone-dark)' }}>
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-primary w-full">
                Checkout
              </button>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3 text-sm tracking-wider uppercase transition-colors duration-200"
                style={{ color: 'var(--stone-dark)' }}
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
