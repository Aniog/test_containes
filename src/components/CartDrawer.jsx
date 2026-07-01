import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-velmora-bg-primary/80 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-velmora-bg-secondary border-l border-velmora-border z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-velmora-border">
          <h2 className="font-serif text-xl text-velmora-text-primary tracking-wider">
            Your Cart
          </h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-velmora-text-secondary hover:text-velmora-text-primary transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-12 h-12 text-velmora-border mb-4" />
              <p className="text-velmora-text-secondary mb-4">Your cart is empty</p>
              <Link 
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="text-velmora-accent text-sm tracking-wider uppercase border-b border-velmora-accent pb-1"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.variant}`} className="flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-24 bg-velmora-bg-card flex-shrink-0">
                    <img 
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-sm tracking-[0.1em] text-velmora-text-primary uppercase">
                        {item.name}
                      </h3>
                      <p className="text-xs text-velmora-text-secondary mt-1 capitalize">
                        {item.variant} Tone
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-velmora-border">
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}
                          className="p-1.5 text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm text-velmora-text-primary">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}
                          className="p-1.5 text-velmora-text-secondary hover:text-velmora-text-primary transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <p className="text-velmora-accent font-medium">
                        ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  
                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id, item.variant)}
                    className="text-velmora-text-secondary hover:text-velmora-error transition-colors self-start"
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
          <div className="p-6 border-t border-velmora-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-velmora-text-secondary">Subtotal</span>
              <span className="text-xl text-velmora-text-primary font-serif">${cartTotal}</span>
            </div>
            <p className="text-xs text-velmora-text-secondary mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full bg-velmora-accent text-velmora-bg-primary py-4 text-center font-medium tracking-wider uppercase text-sm hover:bg-velmora-accent-hover transition-colors duration-300"
            >
              Checkout
            </Link>
            <Link 
              to="/shop"
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center mt-3 text-sm text-velmora-text-secondary hover:text-velmora-text-primary transition-colors duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </>
  );
}