import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-velmora-cream shadow-xl animate-slide-down"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-velmora-border)' }}>
            <h2 className="font-serif text-xl tracking-wider">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
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
                <ShoppingBag className="w-12 h-12 mb-4 opacity-30" />
                <p className="text-velmora-text-muted mb-4">Your cart is empty</p>
                <Link 
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 text-sm tracking-wider transition-colors"
                  style={{ 
                    backgroundColor: 'var(--color-velmora-gold)',
                    color: 'white'
                  }}
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-velmora-cream-dark rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm tracking-wider uppercase">{item.name}</h3>
                      <p className="text-sm text-velmora-text-muted capitalize">{item.variant} Tone</p>
                      <p className="text-sm mt-1" style={{ color: 'var(--color-velmora-gold-dark)' }}>
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded border hover:opacity-70 transition-opacity"
                          style={{ borderColor: 'var(--color-velmora-border)' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded border hover:opacity-70 transition-opacity"
                          style={{ borderColor: 'var(--color-velmora-border)' }}
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-sm underline hover:opacity-70 transition-opacity"
                          style={{ color: 'var(--color-velmora-text-muted)' }}
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
            <div className="p-6 border-t" style={{ borderColor: 'var(--color-velmora-border)' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm tracking-wider">Subtotal</span>
                <span className="font-serif text-xl">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-velmora-text-muted mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <button 
                className="w-full py-4 text-sm tracking-wider transition-opacity hover:opacity-90"
                style={{ 
                  backgroundColor: 'var(--color-velmora-gold)',
                  color: 'white'
                }}
              >
                CHECKOUT
              </button>
              <Link 
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="block text-center mt-3 text-sm underline hover:opacity-70 transition-opacity"
                style={{ color: 'var(--color-velmora-text-muted)' }}
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}