import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

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
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 z-50 bg-charcoal/30 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(26, 26, 26, 0.3)' }}
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div 
        className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-cream animate-slide-in custom-scrollbar overflow-hidden"
        style={{ 
          backgroundColor: 'var(--color-cream)',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <h2 className="font-serif text-xl" style={{ fontFamily: 'var(--font-serif)' }}>
              Your Cart
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="text-charcoal hover:text-gold transition-colors"
              aria-label="Close cart"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} strokeWidth={1} className="text-stone mb-4" style={{ color: 'var(--color-stone)' }} />
                <p className="font-serif text-lg mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  Your cart is empty
                </p>
                <p className="text-sm text-stone" style={{ color: 'var(--color-stone)' }}>
                  Add some beautiful jewelry to get started
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div 
                    key={`${item.id}-${item.variant}`} 
                    className="flex gap-4 pb-6 border-b"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    {/* Image */}
                    <div 
                      className="w-20 h-24 flex-shrink-0 bg-warm-white"
                      style={{ backgroundColor: 'var(--color-warm-white)' }}
                    >
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <h3 
                        className="product-name text-xs mb-1"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-sm text-stone mb-2 capitalize" style={{ color: 'var(--color-stone)' }}>
                        {item.variant} Gold
                      </p>
                      <p className="font-medium mb-3">${item.price}</p>

                      {/* Quantity */}
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border hover:bg-warm-white transition-colors"
                          style={{ borderColor: 'var(--color-border)' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border hover:bg-warm-white transition-colors"
                          style={{ borderColor: 'var(--color-border)' }}
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                        
                        <button 
                          onClick={() => removeFromCart(item.id, item.variant)}
                          className="ml-auto text-sm text-stone hover:text-charcoal transition-colors"
                          style={{ color: 'var(--color-stone)' }}
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
            <div className="p-6 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-stone" style={{ color: 'var(--color-stone)' }}>Subtotal</span>
                <span className="font-serif text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>
              <p className="text-xs text-stone mb-4" style={{ color: 'var(--color-stone)' }}>
                Shipping and taxes calculated at checkout
              </p>
              <button className="btn-primary w-full">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}