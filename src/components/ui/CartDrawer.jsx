import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal/50 z-50 transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
        style={{ backgroundColor: 'rgba(26, 24, 20, 0.5)' }}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-cream z-50 shadow-xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'var(--color-champagne)' }}>
          <h2 className="font-serif text-xl tracking-wide">Your Bag</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:opacity-60 transition-opacity"
            aria-label="Close cart"
          >
            <X size={20} style={{ color: 'var(--color-warm-black)' }} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={48} style={{ color: 'var(--color-champagne)' }} className="mb-4" />
              <p className="text-warm-gray mb-2">Your bag is empty</p>
              <p className="text-muted text-sm mb-6">Discover our collection of demi-fine jewelry</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-8 py-3 text-sm tracking-widest uppercase border transition-colors hover:bg-charcoal hover:text-cream"
                style={{ 
                  borderColor: 'var(--color-warm-black)', 
                  color: 'var(--color-warm-black)' 
                }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-28 bg-ivory flex-shrink-0 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="product-name text-xs mb-1">{item.name}</h3>
                        <p className="text-xs text-warm-gray capitalize">{item.variant} tone</p>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id, item.variant)}
                        className="text-muted hover:text-warm-black transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <div className="flex items-center border" style={{ borderColor: 'var(--color-champagne)' }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-ivory transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-ivory transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t px-6 py-6" style={{ borderColor: 'var(--color-champagne)' }}>
            <div className="flex justify-between items-center mb-4">
              <p className="text-warm-gray">Subtotal</p>
              <p className="text-lg font-medium">{formatPrice(getCartTotal())}</p>
            </div>
            <p className="text-xs text-muted mb-4">Shipping and taxes calculated at checkout</p>
            <Link 
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-4 text-center text-sm tracking-widest uppercase bg-charcoal text-cream hover:opacity-90 transition-opacity"
            >
              Checkout
            </Link>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full py-3 mt-2 text-sm tracking-wider text-warm-gray hover:text-warm-black transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
