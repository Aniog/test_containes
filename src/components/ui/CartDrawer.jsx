import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import Button from './Button';

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
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl text-charcoal">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-cream-dark transition-colors"
          >
            <X className="w-5 h-5 text-charcoal" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-charcoal-light mb-4" />
              <p className="font-serif text-lg text-charcoal mb-2">Your cart is empty</p>
              <p className="text-charcoal-light text-sm">Add some beautiful jewelry to get started</p>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  <div className="w-24 h-30 bg-cream-dark flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="product-name text-sm">{item.name}</h3>
                    <p className="text-charcoal-light text-sm capitalize mt-1">{item.variant} Tone</p>
                    <p className="text-charcoal mt-2">${item.price}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                        className="w-8 h-8 border border-border flex items-center justify-center hover:border-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-sans text-sm w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                        className="w-8 h-8 border border-border flex items-center justify-center hover:border-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="text-charcoal-light hover:text-charcoal transition-colors"
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
          <div className="p-6 border-t border-border bg-cream-dark">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-sm uppercase tracking-widest text-charcoal-light">Subtotal</span>
              <span className="font-serif text-xl text-charcoal">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-charcoal-light text-sm mb-4">Shipping and taxes calculated at checkout</p>
            <Button variant="primary" className="w-full">
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}