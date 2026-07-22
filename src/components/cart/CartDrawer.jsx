import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity,
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--color-cream)] shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--color-taupe)]/20">
            <h2 className="font-serif text-xl">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:text-[var(--color-gold)] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-[var(--color-taupe)] mb-4" />
                <p className="text-[var(--color-taupe)]">Your cart is empty</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 text-sm border-b border-[var(--color-charcoal)] pb-1 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                    <div className="w-20 h-24 bg-[var(--color-sand)] overflow-hidden flex-shrink-0">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-sm uppercase tracking-wider">{item.name}</h3>
                      <p className="text-xs text-[var(--color-taupe)] mt-1 capitalize">{item.variant} Tone</p>
                      <p className="text-sm mt-1">${item.price}</p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[var(--color-taupe)]/30">
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                            className="p-1 hover:text-[var(--color-gold)]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                            className="p-1 hover:text-[var(--color-gold)]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="text-xs text-[var(--color-taupe)] hover:text-red-500 transition-colors"
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
            <div className="p-6 border-t border-[var(--color-taupe)]/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-[var(--color-taupe)]">Subtotal</span>
                <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-[var(--color-taupe)] mb-4">
                Shipping and taxes calculated at checkout
              </p>
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="block w-full bg-[var(--color-charcoal)] text-white text-center py-3 text-sm tracking-widest uppercase hover:bg-[var(--color-gold)] transition-colors"
              >
                Checkout
              </Link>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="block w-full mt-3 text-center text-sm text-[var(--color-taupe)] hover:text-[var(--color-gold)] transition-colors"
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