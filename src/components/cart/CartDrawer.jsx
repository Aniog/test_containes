import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';

function CartDrawer() {
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
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-primary/30 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-serif text-xl tracking-widest">YOUR CART</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:text-accent transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-border mb-4" />
              <p className="text-secondary mb-4">Your cart is empty</p>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div 
                  key={`${item.id}-${item.variant}`}
                  className="flex gap-4 animate-fade-in"
                >
                  {/* Product Image */}
                  <div className="w-24 h-28 bg-card-bg flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xs tracking-widest uppercase">
                        {item.name}
                      </h3>
                      <p className="text-sm text-secondary mt-1">
                        {item.variant}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-2 hover:bg-border/30 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-2 hover:bg-border/30 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="self-start p-1 text-secondary hover:text-error transition-colors"
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
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-secondary">Subtotal</span>
              <span className="font-serif text-lg">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-secondary">
              Shipping and taxes calculated at checkout
            </p>
            <Button variant="primary" size="full">
              CHECKOUT
            </Button>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-full text-center text-sm text-secondary hover:text-primary transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;